import * as React from "react"

const Smiley = () => {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5vw h-3.5vw lg:h-auto lg:w-auto"
    >
      <g clipPath="url(#prefix__clip21)">
        <circle cx={10} cy={10} r={10} fill="#6A62CF" />
        <g filter="url(#prefix__filter17_d)">
          <ellipse
            cx={10}
            cy={10.103}
            rx={6.286}
            ry={6.353}
            fill="url(#prefix__paint13_radial)"
          />
          <ellipse
            cx={10}
            cy={10.103}
            rx={6.286}
            ry={6.353}
            fill="url(#prefix__paint14_linear)"
          />
          <path
            d="M15.286 10.103c0 2.966-2.377 5.353-5.286 5.353-2.91 0-5.286-2.387-5.286-5.353C4.714 7.137 7.091 4.75 10 4.75c2.91 0 5.286 2.387 5.286 5.353z"
            stroke="#D67504"
            strokeOpacity={0.27}
            strokeWidth={2}
          />
        </g>
        <g filter="url(#prefix__filter18_di)">
          <path
            d="M7.25 8.515v0a.734.734 0 011.179 0v0"
            stroke="#823423"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#prefix__filter19_di)">
          <path
            d="M11.571 8.515v0a.734.734 0 011.179 0v0"
            stroke="#823423"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#prefix__filter20_di)">
          <path
            d="M10 14.073c-1.673 0-3.143-1.113-3.143-2.487 0-.647.571-1.15 1.224-1.08l.72.08c.797.087 1.6.087 2.397 0l.721-.08a1.096 1.096 0 011.224 1.08c0 1.374-1.47 2.487-3.143 2.487z"
            fill="#EB5D3E"
          />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter17_d"
          x={-0.286}
          y={3.75}
          width={20.571}
          height={20.706}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.9 0 0 0 0 0.6165 0 0 0 0 0.19125 0 0 0 0.33 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter18_di"
          x={5.25}
          y={7.218}
          width={5.179}
          height={4.297}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="prefix__filter19_di"
          x={9.571}
          y={7.218}
          width={5.179}
          height={4.297}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow" />
        </filter>
        <filter
          id="prefix__filter20_di"
          x={5.857}
          y={10.5}
          width={8.286}
          height={5.574}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect2_innerShadow" />
        </filter>
        <radialGradient
          id="prefix__paint13_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 12.7059 -12.5714 0 10 3.75)"
        >
          <stop stopColor="#EED919" />
          <stop offset={1} stopColor="#F1BE08" />
        </radialGradient>
        <linearGradient
          id="prefix__paint14_linear"
          x1={10}
          y1={3.75}
          x2={10}
          y2={16.456}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.52} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <clipPath id="prefix__clip0">
          <rect width={20} height={20} rx={10} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Smiley
