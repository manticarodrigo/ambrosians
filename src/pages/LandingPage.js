import React, { useState } from 'react'
import * as R from 'ramda'

import Modal from 'react-responsive-modal'

import 'react-responsive-modal/styles.css'

const iconList = [
  { icon: 'vase', text: '7,777 Hand-drawn Generative Ambrosians' },
  { icon: 'shield', text: 'Fair Launch and Distribution' },
  {
    icon: 'harp',
    text: 'Ownership and Commercial Use of Your NFT'
  },
  { icon: 'sandal', text: 'Earn Passively' }
]

const teamList = [
  { src: 'wookie', name: 'Wookie', role: 'Operations' },
  { src: 'hercules', name: 'Hercules', role: 'Community Marketing' },
  { src: 'diogenes', name: 'Diogenes', role: 'Legal' },
  { src: 'perseus', name: 'Perseus', role: 'Finance' },
  { src: 'ivoryblack', name: 'IvoryBlack', role: 'Artist' },
  { src: 'rorro', name: 'Rorro', role: 'Dev' }
]

const Header = props => (
  <h1
    className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow"
    {...props}
  />
)

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/1.jpg)'
          }}>
          <Header>Welcome To The Ambrosian Guild</Header>
          <div className="py-8">
            <button
              disabled
              className="cursor-not-allowed p-4 uppercase text-white font-bold bg-black shadow-xl">
              Mint (coming soon)
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <div className="py-8 flex flex-wrap justify-center max-w-4xl">
            {R.range(1, 5).map(num => (
              <div key={num} className="p-2 md:p-4 w-1/2 md:w-1/4">
                <img
                  className="rounded shadow-2xl"
                  src={`/images/samples/${num}.png`}
                />
              </div>
            ))}
          </div>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            In a place that knows no time, where Olympians live their days and
            the clouds look like gold, lies Mt. Olympus. This is the home of the
            Champions, Gods, and honorable Legends whose deeds shall be
            remembered for eternity.
          </p>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            In the heart of the cosmos lies the land of the mortals and the
            darkness of the Underworld. The Greek cosmos is wide and vast. You
            can find everything from the Palace of Zeus to the Garden of
            Hesperides. If you dare to explore, you&apos;ll find the depth of
            Poseidon&apos;s Sea and maybe even Charon&apos;s boat at the River
            Styx. If you are valiant enough, you can peek into the Gates of the
            Underworld, or even the Abyss of Tartarus… where the Titans are
            patiently waiting for their time to reclaim what they deem theirs.
          </p>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            For eons, far beyond what any human can grasp, the Gates that hold
            these Titans had remained closed. However, this was until Chaos, a
            God that precedes the universe, decided to make things interesting.
            Chaos, motivated by the same thing that granted him his name, tipped
            the balances of power and unleashed the Titans from their slumber.
          </p>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            What comes next, is nothing short of a nightmare. The Titans finally
            freed from their shackles, used their power to breach the heavens
            and take Olympus by force. The battle was short. Olympians were not
            prepared for an attack of this magnitude. Tarnished by the
            unfamiliar taste of defeat and exile, they seeked refuge in the
            world of men.
          </p>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            Anguished, and craving their sacred Ambrosia, Olympians who wanted
            their home back, mortals that would do anything to try the
            Gods&apos; elixir, beings of the Underworld wanting to return the
            Titans to Tartarus out of spite, and even sacred creatures like
            nymphs and minotaurs, formed an alliance. An alliance bound to
            regress the hands of time. An alliance determined to imprison the
            Titans back where they belong. An alliance like no other. These are
            the Ambrosians.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex justify-center py-80 w-full bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/2.jpg)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Ambrosian Manifesto
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <img src="/images/manifesto.png" />
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/3.jpg)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Roadmap
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <div className="max-w-7xl flex flex-col md:flex-row items-center">
            <ul className="my-8 md:w-1/2 text-sm md:text-xl text-white">
              {iconList.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center">
                  <img
                    className="inline-block w-24 md:w-40"
                    src={`/images/icons/${icon}.png`}
                  />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <div className="md:w-1/2">
              <button
                aria-label="Open roadmap preview"
                onClick={() => setModalOpen(true)}>
                <img src="/images/roadmap.png" />
              </button>
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                classNames={{
                  modalContainer: 'flex justify-center items-center'
                }}>
                <img src="/images/roadmap.png" />
              </Modal>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full">
        <div
          className="flex flex-col justify-center items-center py-80 w-full bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/backgrounds/4.jpg)'
          }}>
          <h2 className="max-w-sm md:max-w-3xl text-4xl md:text-7xl font-caesar text-center text-white text-shadow">
            Attribute List
            <br /> (coming soon)
          </h2>
        </div>
        <div className="flex flex-col items-center p-16 w-full bg-black">
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            Meet the Team
          </p>
          <ul className="max-w-7xl flex flex-wrap my-8 text-sm md:text-xl text-white">
            {teamList.map(({ src, name, role }, index) => (
              <li
                key={index}
                className="flex flex-col items-center w-1/2 md:w-1/3 my-4">
                <img
                  className="rounded inline-block w-24 md:w-48"
                  src={`/images/team/${src}.jpeg`}
                />
                <div className="pt-4 text-center">
                  <p className="font-black text-2xl">{name}</p>
                  <p className="font-thin">{role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="py-8 text-white text-center md:text-3xl max-w-4xl">
            Contact Us
          </p>
          <ul className="max-w-7xl flex flex-col md:flex-row my-8 text-sm md:text-xl text-white">
            <li className="m-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/ambrosians"
                className="flex items-center">
                <img
                  className="rounded inline-block w-8 md:w-12"
                  src={`/images/social/discord.png`}
                />
                <p className="pl-4 font-black">Discord</p>
              </a>
            </li>
            <li className="m-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AmbrosiansNFT"
                className="flex items-center">
                <img
                  className="rounded inline-block w-8 md:w-12"
                  src={`/images/social/twitter.png`}
                />
                <p className="pl-4 font-black">Twitter</p>
              </a>
            </li>
          </ul>
          <img
            src="/images/logo.png"
            className="w-48"
            label="Ambrosians Logo"
          />
          <p className="text-white">All rights reserved 2021 ©</p>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
