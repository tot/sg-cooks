import React from "react"
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import tradingcards from "../../images/tradingcards.svg"
import trading from "../../images/trading.svg"
import lowkey from "../../images/lowkey.svg"
import bricks from "../../images/bricks.svg"

const ProfitsCarousel = () => {
  return (
    <div className="relative z-1">
      <Carousel
        plugins={[
          "infinite",
          "centered",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              "infinite",
              "centered",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          768: {
            plugins: [
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          1024: {
            plugins: [
              "infinite",
              "centered",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
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
