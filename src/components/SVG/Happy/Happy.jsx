import React from "react"
import PropTypes from "prop-types"

const Happy = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.25vw h-3.25vw md:w-3.5vw md:h-3.5vw xl:w-2.5vw xl:h-2.5vw"
    >
      <rect
        x={0.23}
        y={8.843}
        width={29.183}
        height={29.183}
        rx={14.591}
        transform="rotate(-17.165 .23 8.843)"
        fill="url(#prefix__paint2_linear)"
      />
      <g clipPath="url(#prefix__clip10)">
        <path
          d="M20.568 25.246a7.083 7.083 0 114.678-8.858 7.091 7.091 0 01-4.678 8.858zm-3.762-12.182a5.667 5.667 0 107.086 3.742 5.673 5.673 0 00-7.086-3.742zm2.926 9.475a3.426 3.426 0 01-3.125-.518c-.43-.313-.801-.7-1.095-1.144l6.768-2.09.002.005a4.55 4.55 0 01-.26 1.557 3.427 3.427 0 01-2.29 2.19zm-3.623-3.33a1.062 1.062 0 11-.627-2.03 1.062 1.062 0 01.627 2.03zm4.73-1.47a1.058 1.058 0 11-.624-2.021 1.058 1.058 0 01.624 2.02z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint2_linear"
          x1={14.822}
          y1={8.843}
          x2={14.822}
          y2={38.026}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#886CFB" />
          <stop offset={1} stopColor="#795DEB" />
        </linearGradient>
        <clipPath id="prefix__clip10">
          <path
            fill="#fff"
            transform="rotate(-17.16 46.556 -19.578)"
            d="M0 0h17v17H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

Happy.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Happy
