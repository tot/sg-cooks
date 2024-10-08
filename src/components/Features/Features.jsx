import React from "react"

import Header from "../Header/Header"

import bot from "../../images/bot.svg"
import guide from "../../images/guide.svg"
import information from "../../images/information.svg"
import featuresarrows from "../../images/featuresarrows.svg"
import featuresrectangle from "../../images/featuresrectangle.svg"

const Features = () => {
  return (
    <div className="w-full relative">
      <img
        src={featuresarrows}
        className="w-2/3 md:w-1/2 xl:w-auto absolute left-0 -top-40 xl:left-44 xl:-top-60 opacity-70"
        alt="bg"
      />
      <img
        src={featuresrectangle}
        className="w-2/3 md:w-1/3 xl:w-auto absolute right-0 top-0"
        alt="bg"
      />
      <div
        id="features"
        className="px-6 md:px-8 pt-10 pb-5 lg:py-20 max-w-7xl mx-auto"
      >
        <Header
          align="left"
          subtitle="features"
          title="Something for Everyone"
        />
        <div className="md:px-6 flex flex-wrap lg:grid lg:grid-cols-3 gap-8 md:gap-0">
          <div className="px-4 pb-8 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-card-border w-full md:max-w-1/2 lg:max-w-full">
            <img src={bot} className="pb-5" alt="Bot Groupbuys & more" />
            <h3 className="text-white font-medium text-2xl pb-2">
              Bot Groupbuys & more
            </h3>
            <p className="text-white opacity-50 text-base leading-6 font-normal">
              Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat.
              Cras aliquet venenatis luctus.
            </p>
          </div>
          <div className="px-4 pb-8 md:p-8 border-b-2 md:border-b-0 lg:border-r-2 border-card-border w-full md:max-w-1/2 lg:max-w-full">
            <img src={guide} className="pb-5" alt="Resell Guides" />
            <h3 className="text-white font-medium text-2xl pb-2">
              Resell Guides
            </h3>
            <p className="text-white opacity-50 text-base leading-6 font-normal">
              Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat.
              Cras aliquet venenatis luctus.
            </p>
          </div>
          <div className="px-4 pb-8 md:p-8 w-full md:max-w-full max-w-full">
            <img src={information} className="pb-5" alt="Drops Information" />
            <h3 className="text-white font-medium text-2xl pb-2">
              Drops Information
            </h3>
            <p className="text-white opacity-50 text-base leading-6 font-normal">
              Etiam sem purus, commodo nec iaculis pulvinar, aliquet at erat.
              Cras aliquet venenatis luctus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
