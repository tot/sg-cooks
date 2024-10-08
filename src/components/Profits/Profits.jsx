import React from "react"

import Carousel from "../ProfitsCarousel/ProfitsCarousel"

import graphfill from "../../images/graphfill.svg"
import graphline from "../../images/graphline.svg"
import profitgraph from "../../images/profitgraph.svg"
import profitstriangle from "../../images/profitstriangle.svg"
import profitstriangle2 from "../../images/profitstriangle2.svg"
import profitsline from "../../images/profitsline.svg"

const Profits = () => {
  return (
    <div className="w-full relative my-10 lg:my-20">
      <div className="h-8 lg:h-20 rounded-t-half bg-profits-background" />
      <div className="w-full bg-profits-background">
        <div className="py-20 xl:py-32 max-w-8xl mx-auto">
          <div className="w-full text-center pb-10 lg:pb-20">
            <h2 className="tracking-extrawidest uppercase text-primary text-base font-medium pb-2">
              PROFITS BY MEMBERS
            </h2>
            <h1 className="tracking-wide text-white text-4xl h-full items-start flex justify-center font-bold opacity-90 pb-2">
              <span className="text-base font-semibold ">$</span>
              1,000,000+
            </h1>
          </div>
          <Carousel />
        </div>
      </div>
      <div className=" w-full h-8 lg:h-20 rounded-b-half bg-profits-background" />
      <img
        src={profitsline}
        className="z-0 pointer-events-none absolute left-16 lg:left-72 top-56 opacity-75"
        alt="bg"
      />
      <img
        src={profitsline}
        className="z-0 pointer-events-none absolute left-0 lg:left-52 top-56 opacity-75"
        alt="bg"
      />
      <img
        src={profitstriangle2}
        className="z-0 pointer-events-none absolute left-2 top-56"
        alt="bg"
      />
      <img
        src={profitstriangle}
        className="z-0 pointer-events-none absolute left-2 top-56"
        alt="bg"
      />
      <img
        src={graphfill}
        className="block xl:hidden z-0 pointer-events-none absolute w-full right-0 mx-auto top-0 bottom-0 my-auto"
        alt="bg"
      />
      <img
        src={graphline}
        className="block xl:hidden z-0 pointer-events-none absolute w-full right-0 mx-auto top-0 bottom-0 my-auto"
        alt="bg"
      />
      <img
        src={profitgraph}
        className="hidden xl:block opacity-75 z-0 pointer-events-none absolute w-full right-0 mx-auto top-12 bottom-0"
        alt="bg"
      />
    </div>
  )
}

export default Profits
