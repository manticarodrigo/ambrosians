import React, { useRef } from 'react'
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion'
import scrollIntoView from 'scroll-into-view-if-needed'
import * as R from 'ramda'

import useAnimationHandlers from 'hooks/useAnimationHandlers'

const collapsed = { opacity: 0, height: 0, overflow: 'hidden' }

export const ExpandVertical = ({
  expanded,
  scrollOnExpand,
  scrollOnCollapse,
  display,
  className,
  children
}) => {
  const sectionRef = useRef()
  const shouldReduceMotion = useReducedMotion()

  const onAnimationComplete = useAnimationHandlers(expanded, {
    onOpen: () => {
      if (scrollOnExpand) {
        scrollIntoView(sectionRef.current, {
          behavior: 'smooth',
          block: 'center'
        })
      }
    },
    onClose: () => {
      if (scrollOnCollapse) {
        scrollIntoView(sectionRef.current, {
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  })

  if (R.isNil(expanded)) {
    return <div className="dn">{children}</div>
  }

  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          ref={sectionRef}
          initial={collapsed}
          animate={{
            opacity: 1,
            height: 'auto',
            transitionEnd: {
              overflow: 'visible'
            }
          }}
          exit={collapsed}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
          style={{
            display
          }}
          className={className}
          onAnimationComplete={onAnimationComplete}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExpandVertical
