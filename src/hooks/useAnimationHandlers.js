import { useState, useEffect } from 'react'

const useAnimationHandlers = (isVisible, handlers) => {
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const { onOpen, onClose } = handlers

    if (isCompleted) {
      if (isVisible) {
        if (onOpen) {
          onOpen()
        }
      } else {
        if (onClose) {
          onClose()
        }
      }
      setIsCompleted(false)
    }
  }, [isCompleted, isVisible])

  const onComplete = () => {
    setIsCompleted(true)
  }

  return onComplete
}

export default useAnimationHandlers
