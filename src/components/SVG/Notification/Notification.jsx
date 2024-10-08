import * as React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const Notification = ({ height, width }) => {
  return (
    <motion.svg
      // initial={{ opacity: 0, scale: 0.8, y: 10, x: 10, rotate: 20 }}
      // animate={{ scale: 1, opacity: 1, y: 0, x: 0, rotate: 0 }}
      // transition={{
      //   type: "spring",
      //   bounce: 0.25,
      //   delay: 1.5,
      //   duration: 1,
      //   ease: "easeInOut",
      //   repeatType: "loop",
      //   repeat: Infinity,
      //   repeatDelay: 10,
      // }}
      // exit={{
      //   opacity: 0,
      //   scale: 0.8,
      //   y: 10,
      //   x: 10,
      //   rotate: 20,
      // }}
      width={width}
      height={height}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6vw h-6vw md:w-5vw md:h-5vw xl:w-3.25vw xl:h-3.25vw"
    >
      <rect
        x={7.376}
        y={0.565}
        width={49}
        height={49}
        rx={24.5}
        transform="rotate(7.99 7.376 .565)"
        stroke="url(#prefix__paint0_linear)"
        strokeDasharray="5 3"
      />
      <rect
        x={4.661}
        y={9.635}
        width={42}
        height={42}
        rx={21}
        transform="rotate(-6.802 4.66 9.635)"
        fill="url(#prefix__paint1_linear)"
      />
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M29.086 37.102a1.852 1.852 0 01-2.047-1.602l3.64-.434c.032.243.015.49-.05.726a1.873 1.873 0 01-1.183 1.23h-.004l-.012.002-.01.001-.01.001-.006.001c-.103.035-.21.06-.318.075zm6.956-3.6L21.478 35.24l-.217-1.82 1.712-1.128-.597-5.006a7.392 7.392 0 01.4-3.796 4.266 4.266 0 012.555-2.39l-.237-1.985 3.64-.434.237 1.984c2.415.279 3.951 2.167 4.327 5.318l.598 5.006 1.929.694.217 1.82zm.816-8.405l-1.82.217a7.95 7.95 0 00-3.8-5.612l1.138-1.456a9.076 9.076 0 012.95 2.867 10.56 10.56 0 011.532 3.984zM20.5 27.048l-1.82.217a10.559 10.559 0 01.552-4.233 9.074 9.074 0 012.193-3.48l1.447 1.148a7.948 7.948 0 00-2.372 6.348z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={31.95}
          y1={0}
          x2={31.95}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00EAD3" />
          <stop offset={1} stopColor="#00D4C0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={25.66}
          y1={9.635}
          x2={25.66}
          y2={51.635}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00EAD3" />
          <stop offset={1} stopColor="#00D5C0" />
        </linearGradient>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="rotate(-6.802 162.524 -123.524)"
            d="M0 0h22v22H0z"
          />
        </clipPath>
      </defs>
    </motion.svg>
  )
}

Notification.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Notification
