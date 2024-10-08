import { useEffect, useCallback } from "react"
import { motion, useCycle } from "framer-motion"

import Join from "../Join/Join"

import iphone from "../../images/iphone.png"
import imessage from "../../images/imessage.png"
import mobilearrow from "../../images/mobilearrow.svg"
import mobiletriangle from "../../images/mobiletriangle.svg"

const Mobile = () => {
  const [show, set] = useCycle(true, false)

  const cycleAnimation = useCallback(() => {
    set()
    setTimeout(() => {
      set()
    }, 5000)
  }, [set])

  useEffect(() => {
    const intervalId = setInterval(cycleAnimation, 10000)
    return () => clearInterval(intervalId)
  }, [cycleAnimation])

  const notificationVariants = {
    open: {
      display: "block",
      visibility: "visible",
      transition: {
        staggerChildren: 0.17,
        delayChildren: 0.2,
      },
    },
    closed: {
      display: "none",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  }

  const textVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  return (
    <div className="w-full px-6 xl:px-0 py-10">
      <div className="overflow-hidden relative z-1 max-w-7xl mx-auto lg:p-12 rounded-xl border border-mobile-border bg-mobile-background">
        <div className="text-left z-1 relative px-6 pt-6 md:px-10 md:pt-10 lg:p-0">
          <h2 className="tracking-extrawidest uppercase text-white opacity-50 text-base font-medium pb-2">
            EASY ACCESSIBILITY
          </h2>
          <h1 className="text-white text-3xl font-semibold opacity-90">
            Available on-the-Go
          </h1>
        </div>
        <p className="px-6 pt-6 md:px-10 md:pt-10 lg:px-0 text-white opacity-50 max-w-sm py-8 relative  leading-6 z-1">
          Etiam sem purus, commodo nec iaculus pulvinar, aliquet at erat. Cras
          aliquet.
        </p>
        <div className="relative pb-20 px-6 pt-6 md:px-10 md:pt-10 lg:pt-0 lg:px-0 z-1">
          <Join />
        </div>
        <div className="md:absolute w-full md:w-auto flex justify-center right-8 lg:right-20 bottom-0">
          <div className="relative w-64 xl:w-80">
            <img
              src={iphone}
              className="relative z-1"
              alt="SG Cooks SMS Notifications"
            />
            <motion.div
              variants={notificationVariants}
              animate={show ? "open" : "closed"}
              className="z-2 absolute top-0 left-1/2 transform -translate-x-1/2"
            >
              <div className="absolute z-2 top-4 left-1/2 transform -translate-x-1/2">
                <motion.div
                  variants={textVariants}
                  className="shadow-xl w-80 md:w-96 p-4 rounded-xl sf-display text-message"
                >
                  <div className="flex items-center justify-between text-message-description text-xs md:text-sm ">
                    <div className="flex items-center">
                      <img
                        src={imessage}
                        className="shadow-md mr-2"
                        alt="iMessage"
                      />
                      MESSAGES
                    </div>
                    <p className="">now</p>
                  </div>
                  <h1 className="text-white text-sm md:text-base font-medium pt-1.5">
                    SG Cooks Mobile Alerts
                  </h1>
                  <p className="text-sm md:text-base text-white font-normal pt-0">
                    SNKRS Shock drop for Air Jordan 1
                  </p>
                </motion.div>
              </div>
              <div className="absolute z-2 top-32 md:top-36 lg:top-36 left-1/2 transform -translate-x-1/2 ">
                <motion.div
                  variants={textVariants}
                  className="shadow-xl w-80 md:w-96 p-4 rounded-xl sf-display text-message"
                >
                  <div className="flex items-center justify-between text-message-description text-xs md:text-sm ">
                    <div className="flex items-center">
                      <img
                        src={imessage}
                        className="shadow-md mr-2"
                        alt="iMessage"
                      />
                      MESSAGES
                    </div>
                    <p className="">now</p>
                  </div>
                  <h1 className="text-white text-sm md:text-base font-medium pt-1.5">
                    SG Cooks Mobile Alerts
                  </h1>
                  <p className="text-sm md:text-base text-white font-normal pt-0">
                    SNKRS Shock drop for Air Jordan 4
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <div className="mobile-circle1 absolute -bottom-16 -left-20 w-48 h-48 rounded-full" />
            <div className="mobile-circle2 absolute -top-10 -right-10 w-28 h-28 rounded-full z-1" />
          </div>
        </div>
        <img
          src={mobilearrow}
          className="absolute left-50 top-0 z-0"
          alt="bg"
        />
        <img
          src={mobiletriangle}
          className="absolute left-0 bottom-0"
          alt="bg"
        />
      </div>
    </div>
  )
}

export default Mobile
