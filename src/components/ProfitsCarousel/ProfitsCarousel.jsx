import React from "react"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import tradingcards from "../../images/tradingcards.svg"
import trading from "../../images/trading.svg"
import lowkey from "../../images/lowkey.svg"
import bricks from "../../images/bricks.svg"

const responsive = {
  mobile: {
    breakpoint: {max: 640, min: 0},
    items: 1,
  },
  tablet: {
    breakpoint: {max: 768, min: 640},
    items: 2,
  },
  desktop: {
    breakpoint: {max: 3000, min: 768},
    items: 3,
  },
}

const ProfitsCarousel = () => {
  return (
    <div className="relative z-1">
        <Carousel
          swipeable
          draggable
          infinite
          autoPlay
          centerMode
          keyBoardControl
          showDots={false}
          responsive={responsive}
          ssr={false}
          autoPlaySpeed={5000}
          transitionDuration={500}
          slidesToSlide={1}
      >
        <div className="profits-card backdrop-filter backdrop-blur mx-6 p-8 rounded-3xl">
          <h1 className="flex items-center text-white text-xl font-medium pb-2">
            <img src={tradingcards} className="pr-3" alt="Trading Cards" />
            Trading Cards
          </h1>
          <p className="text-white text-base opacity-80 leading-6">
            Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat. Cras
            aliquet venenatis luctus.
          </p>
        </div>
        <div className="profits-card backdrop-filter backdrop-blur mx-6 p-8 rounded-3xl">
          <h1 className="flex items-center text-white text-xl font-medium pb-2">
            <img
              src={trading}
              className="pr-3"
              alt="Stocks and Cryptocurrency Trading"
            />
            Stocks and Crypto Trading
          </h1>
          <p className="text-white text-base opacity-80 leading-6">
            Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat. Cras
            aliquet venenatis luctus.
          </p>
        </div>
        <div className="profits-card backdrop-filter backdrop-blur mx-6 p-8 rounded-3xl">
          <h1 className="flex items-center text-white text-xl font-medium pb-2">
            <img src={lowkey} className="pr-3" alt="Lowkey Flips" />
            Lowkey Flips
          </h1>
          <p className="text-white text-base opacity-80 leading-6">
            Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat. Cras
            aliquet venenatis luctus.
          </p>
        </div>
        <div className="profits-card backdrop-filter backdrop-blur mx-6 p-8 rounded-3xl">
          <h1 className="flex items-center text-white text-xl font-medium pb-2">
            <img src={bricks} className="pr-3" alt="Brick Flips" />
            Brick Flips
          </h1>
          <p className="text-white text-base opacity-80 leading-6">
            Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat. Cras
            aliquet venenatis luctus.
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default ProfitsCarousel
