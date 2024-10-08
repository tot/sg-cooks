import {useRef} from "react"
import CountUp from "react-countup"
import { useSpring, animated } from "react-spring"

import Join from "../Join/Join"

import Monitor from "../Monitor/Monitor"
import Success from "../Success/Success"
import Graph from "../Graph/Graph"

import Notification from "../SVG/Notification/Notification"
import Happy from "../SVG/Happy/Happy"
import Heart from "../SVG/Heart/Heart"

import discord from "../../images/discord.png"

const discordParallax = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`
const monitorParallax = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const notificationParallax = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const successParallax = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`
const heartParallax = (x, y) => `translate3d(${x / 5.65}px,${y / 5.65}px,0)`
const happyParallax = (x, y) => `translate3d(${x / 5.5}px,${y / 5.5}px,0)`
const graphParallax = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`
const gainsParallax = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`

const COUNT_UP_OPTIONS = {
  start: 0.0,
    end: 89.45,
    duration: 2.5,
    separator: " ",
    decimals: 2,
    decimal: ".",
    prefix: "+",
    suffix: "%",
    onUpdate: () => console.log("updated"),
    onStart: () => {
      console.log("started")
    },
    onEnd: () => {
      console.log("ended")
    },
}

const Home = () => {
  // const countUpRef = useRef(null);
  // const { countUp } = useCountUp({
  //   ref: countUpRef,
  //   start: 0.0,
  //   end: 89.45,
  //   duration: 2.5,
  //   separator: " ",
  //   decimals: 2,
  //   decimal: ".",
  //   prefix: "+",
  //   suffix: "%",
  //   onUpdate: () => console.log("updated"),
  //   onStart: () => {
  //     console.log("started")
  //   },
  //   onEnd: () => {
  //     console.log("ended")
  //   },
  // })

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const discordStyles = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
  })

  const monitorStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: -15, x: -100, y: -100 },
    to: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
    delay: 750,
  })

  const notificationStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: -25 },
    to: { opacity: 1, scale: 1, rotate: 0 },
    delay: 1000,
  })

  const successStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: 15, x: 100, y: 75 },
    to: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
    delay: 1250,
  })

  const heartStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: -15, x: 25, y: 15 },
    to: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
    delay: 1500,
  })

  const happyStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: -15, x: 25, y: 15 },
    to: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
    delay: 1600,
  })

  const graphStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: 15, x: -100, y: -75 },
    to: { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 },
    delay: 1800,
  })

  const gainStyles = useSpring({
    from: { opacity: 0, scale: 0.5, rotate: -15, y: 15 },
    to: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    delay: 2000,
  })

  return (
    <div
      className="w-full pb-40 overflow-x-hidden home-section pt-32"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="relative z-1 max-w-7xl mx-auto pt-4">
        <div className="flex justify-center text-center px-4 md:px-0">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-semibold">
              SG Cooks
            </h1>
            <h3 className="text-slogan font-medium pt-4 text-base md:text-lg pb-10">
              Dedicated to increasing your reselling profits!
            </h3>
            <Join />
            <p className="text-sm md:text-base text-white opacity-50 pt-4 pb-10 md:pb-20">
              $40 / month
            </p>
          </div>
        </div>
        <div className="relative flex justify-center w-4/5 mx-auto pb-12 md:pb-0">
          <animated.div
            className="discord z-3"
            style={{
              transform: props.xy.to(discordParallax),
              ...discordStyles,
            }}
          >
            <img src={discord} alt="Discord" className="relative p-1" />
          </animated.div>
          <div className="absolute bottom-20 right-8 md:bottom-10 md:right-8 xl:bottom-20 xl:right-16">
            <div className="z-1 first-ellipses absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full" />
            <div className="z-0 second-ellipses absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full" />
          </div>
          <div className="absolute top-20 left-14 md:top-20 md:left-20 xl:top-1/3 xl:left-1/5 ">
            <div className="z-0 third-ellipses absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-64 md:h-64 lg:w-30vw lg:h-30vw xl:w-30vw xl:h-30vw rounded-full" />
          </div>
          <div className="absolute top-6 md:top-16 lg:top-24 -left-4 md:-left-8 lg:-left-18">
            <animated.div
              className="relative z-4"
              style={{
                transform: props.xy.to(monitorParallax),
                ...monitorStyles,
              }}
            >
              <Monitor />
            </animated.div>

            <div className="z-5 absolute -top-2 -left-3 md:-left-5 md:-top-5 lg:-left-8 lg:-top-6">
              <animated.div
                style={{
                  transform: props.xy.to(notificationParallax),
                  ...notificationStyles,
                }}
              >
                <Notification height={57} width={57} />
              </animated.div>
            </div>
          </div>
          <div className="absolute top-4 md:top-8 lg:top-12 -right-8 md:-right-12 lg:-right-20 xl:-right-32">
            <animated.div
              className="relative z-4"
              style={{
                transform: props.xy.to(successParallax),
                ...successStyles,
              }}
            >
              <Success />
            </animated.div>
            <div className="absolute -top-3 md:-top-6 lg:-top-8 -left-3.5 md:-left-6 lg:-left-8 xl:-left-12">
              <animated.div
                className="relative z-5"
                style={{
                  transform: props.xy.to(heartParallax),
                  ...heartStyles,
                }}
              >
                <Heart height={65} width={65} />
              </animated.div>

              <div className="z-6 absolute -left-1 md:-left-3 lg:-left-4 xl:-left-6 bottom-0 md-bottom-0.5 ">
                <animated.div
                  style={{
                    transform: props.xy.to(happyParallax),
                    ...happyStyles,
                  }}
                >
                  <Happy height={50} width={50} />
                </animated.div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-8 right-8 md:right-16 xl:right-32">
            <animated.div
              className="relative z-4"
              style={{ transform: props.xy.to(graphParallax), ...graphStyles }}
            >
              <Graph />
            </animated.div>
            <animated.div
              className="select-none z-5 graph-gain absolute -top-2 xl:-top-5 left-3 xl:left-8 py-0.5 px-1.5 xl:py-2 xl:px-3 text-white rounded lg:rounded-md font-medium text-1.75vw md:text-2vw lg:text-sm"
              style={{ transform: props.xy.to(gainsParallax), ...gainStyles }}
            >
              <CountUp {...COUNT_UP_OPTIONS}>
                {({countUpRef}) => (
                  <span ref={countUpRef} />
                )}
              </CountUp>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
