import React from "react"
import PropTypes from "prop-types"

const Heart = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6vw h-6vw md:w-5vw md:h-5vw xl:w-3.5vw xl:h-3.5vw"
    >
      <rect
        x={8.237}
        y={0.565}
        width={49}
        height={49}
        rx={24.5}
        transform="rotate(7.99 8.237 .565)"
        stroke="url(#prefix__paint11_linear)"
        strokeDasharray="5 3"
      />
      <rect
        x={11.123}
        y={4.285}
        width={42}
        height={42}
        rx={21}
        transform="rotate(7.99 11.123 4.285)"
        fill="url(#prefix__paint12_linear)"
      />
      <path
        d="M20.38 23.458a4.95 4.95 0 015.682-4.201 5.492 5.492 0 013.83 2.389 5.492 5.492 0 014.34-1.242 4.95 4.95 0 014.304 5.602c-.682 4.862-6.988 7.72-10.683 10.164-2.868-3.39-8.155-7.847-7.472-12.712z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prefix__paint11_linear"
          x1={32.811}
          y1={0}
          x2={32.811}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA00A8" />
          <stop offset={1} stopColor="#AC017C" />
        </linearGradient>
        <linearGradient
          id="prefix__paint12_linear"
          x1={32.123}
          y1={4.285}
          x2={32.123}
          y2={46.285}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA00A8" />
          <stop offset={1} stopColor="#AC017C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

Heart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Heart
