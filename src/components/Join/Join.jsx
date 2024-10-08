import React from "react"
import { animated, useSpring } from "react-spring"

const Join = () => {
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }))
  return (
    <a
      href="https://dash.sgcooks.io/waitlist"
      onMouseEnter={() => set({ y: 0, color: "#fff" })}
      onMouseLeave={() => set({ y: 100, color: "#fff" })}
      className="join-button"
    >
      <animated.span style={{ color }}>Join Waitlist</animated.span>
      <animated.div
        style={{ transform: y.to((v) => `translateY(${v}%`) }}
        className="waitlist-fill"
      />
    </a>
  )
}
export default Join
