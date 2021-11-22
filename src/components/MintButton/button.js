import React, { useEffect, useState, useCallback } from 'react'
import Countdown from 'react-countdown'
import { CircularProgress, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { LAMPORTS_PER_SOL } from '@solana/web3.js'

import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useWalletDialog } from '@solana/wallet-adapter-material-ui'

import Button from 'components/Button'

import {
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress
} from 'utils/candy-machine'

const MintButton = props => {
  const [balance, setBalance] = useState()
  const [isActive, setIsActive] = useState(false) // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0)
  const [itemsRedeemed, setItemsRedeemed] = useState(0)
  const [itemsRemaining, setItemsRemaining] = useState(0)

  const [alertState, setAlertState] = useState({
    open: false,
    message: '',
    severity: undefined
  })

  const [startDate, setStartDate] = useState(new Date(props.startDate))

  const { setOpen } = useWalletDialog()

  const handleConnectClick = useCallback(
    event => {
      if (!event.defaultPrevented) setOpen(true)
    },
    [setOpen]
  )

  const wallet = useAnchorWallet()
  const [candyMachine, setCandyMachine] = useState()

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed
      } = await getCandyMachineState(
        wallet,
        props.candyMachineId,
        props.connection
      )

      setItemsAvailable(itemsAvailable)
      setItemsRemaining(itemsRemaining)
      setItemsRedeemed(itemsRedeemed)

      setIsSoldOut(itemsRemaining === 0)
      setStartDate(goLiveDate)
      setCandyMachine(candyMachine)
    })()
  }

  const onMint = async () => {
    try {
      setIsMinting(true)
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        )

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          'singleGossip',
          false
        )

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success'
          })
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error'
          })
        }
      }
    } catch (error) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x137') !== -1) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135') !== -1) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          setIsSoldOut(true)
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error'
      })
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
      setIsMinting(false)
      refreshCandyMachineState()
    }
  }

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, props.connection])

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection
  ])

  return (
    <>
      {/* {wallet && (
        <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || '')}</p>
      )}

      {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

      {wallet && <p>Total Available: {itemsAvailable}</p>}

      {wallet && <p>Redeemed: {itemsRedeemed}</p>}

      {wallet && <p>Remaining: {itemsRemaining}</p>} */}

      <>
        {!wallet ? (
          <Button onClick={handleConnectClick}>Connect Wallet</Button>
        ) : (
          <Button
            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}>
            {isSoldOut ? (
              'Sold Out'
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                'Mint'
              )
            ) : (
              <>
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => {
                    completed && setIsActive(true)
                  }}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              </>
            )}
          </Button>
        )}
      </>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}>
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}>
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  )
}

const renderCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </>
  )
}

export default MintButton
