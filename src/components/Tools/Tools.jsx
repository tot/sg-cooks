import React, { useState } from "react"
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import tools from "../../images/tools.png"
import monitor from "../../images/monitor.png"
import aqt from "../../images/aqt.png"

import profile from "../../images/profile.svg"
import generator from "../../images/generator.svg"
import captcha from "../../images/captcha.svg"
import clock from "../../images/clock.svg"
import autoopen from "../../images/autoopen.svg"
import card from "../../images/card.svg"
import webhook from "../../images/webhook.svg"
import autotask from "../../images/autotask.svg"
import botsupport from "../../images/botsupport.svg"

import right from "../../images/chevron_right.svg"
import left from "../../images/chevron_left.svg"

import carouselcircle from "../../images/carouselcircle.svg"
import toolsarrow from "../../images/toolsarrow.svg"
import toolstriangle from "../../images/toolstriangle.svg"
import toolstriangle2 from "../../images/toolstriangle2.svg"
import toolsline from "../../images/toolsline.svg"

const Tools = () => {
  const [page, setPage] = useState(0)
  const onChange = (slide) => {
    setPage(slide)
  }
  return (
    <div id="tools" className="relative w-full py-10 lg:py-20">
      <div className="px-6 md:px-8 max-w-7xl mx-auto lg:flex">
        <div className="relative w-full mb-10 lg:mb-0 lg:w-1/2 flex items-center h-auto lg:h-96">
          <Carousel
            value={page}
            onChange={onChange}
            plugins={[
              //   "infinite",
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button className="focus:outline-none cursor-pointer absolute z-5 left-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur carousel-arrows">
                      <img src={left} className="" alt="left" />
                    </button>
                  ),
                  arrowLeftDisabled: (
                    <button className="opacity-50 cursor-not-allowed focus:outline-none absolute z-5 left-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur carousel-arrows">
                      <img src={left} className="" alt="left" />
                    </button>
                  ),
                  arrowRight: (
                    <button className="focus:outline-none cursor-pointer absolute z-5 right-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur carousel-arrows">
                      <img src={right} className="" alt="right" />
                    </button>
                  ),
                  arrowRightDisabled: (
                    <button className="opacity-50 cursor-not-allowed focus:outline-none absolute z-5 right-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur carousel-arrows">
                      <img src={right} className="" alt="right" />
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
            className="relative z-1"
          >
            <div className="px-5">
              <img
                src={tools}
                className="w-full rounded-md shadow-lg"
                alt="SG Cooks Tools Suite"
              />
            </div>
            <div className="px-5">
              <img
                src={monitor}
                className="w-full rounded-md shadow-lg"
                alt="SG Cooks Monitor Deck"
              />
            </div>
            <div className="px-5">
              <img
                src={aqt}
                className="w-full rounded-md shadow-lg"
                alt="SG Cooks Auto Quick Task"
              />
            </div>
          </Carousel>

          <img
            src={carouselcircle}
            className="w-40 md:w-auto absolute z-0 -right-4 -bottom-4 md:-right-8 md:-bottom-8 lg:-right-10 lg:bottom-0 xl:-right-12 xl:-bottom-12"
            alt="bg"
          />
          <img
            src={toolsarrow}
            className="w-56 md:w-auto lg:w-72 xl:w-auto absolute z-0 left-20 md:left-20 xl:left-12 xl:-top-20"
            alt="bg"
          />
        </div>
        <div className="lg:max-w-md ml-auto lg:ml-auto lg:w-1/2 relative">
          <div className="text-right pb-10">
            <h2 className="tracking-extrawidest uppercase text-white opacity-50 text-base font-normal pb-2">
              TOOLS
            </h2>
            <h1 className="text-white text-3xl font-semibold opacity-90 pb-2">
              Exclusive Access to the Best
            </h1>
          </div>
          {page === 0 && (
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src={generator}
                  className="w-10 lg:w-12"
                  alt="Generators"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about generators. Commodo nec iaculis pulvinar,
                  aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={captcha}
                  className="w-10 lg:w-12"
                  alt="Captcha Farming"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about captcha farming. Commodo nec iaculis pulvinar,
                  aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={profile}
                  className="w-10 lg:w-12"
                  alt="Profiles Manager"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about profiles manager. Commodo nec iaculis
                  pulvinar, aliquet at erat. Cras aliquet.
                </p>
              </div>
              <p className="text-center text-white opacity-50">+ more!</p>
            </div>
          )}
          {page === 1 && (
            <div className="space-y-6">
              <div className="flex items-center">
                <img src={clock} className="w-12" alt="Monitor Products" />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about monitoring products and accounts. Iaculis
                  pulvinar, aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={autoopen}
                  className="w-12"
                  alt="Automatically Create Tasks"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about auto open links. Commodo nec iaculis pulvinar,
                  aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={webhook}
                  className="w-12"
                  alt="Webhook Notifications"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about being notified with webhook. Commodo nec
                  iaculis pulvinar, aliquet at erat. Cras aliquet.
                </p>
              </div>
              <p className="text-center text-white opacity-50">+ more!</p>
            </div>
          )}

          {page === 2 && (
            <div className="space-y-6">
              <div className="flex items-center">
                <img src={card} className="w-12" alt="Monitor Checkouts" />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about monitoring checkouts. Commodo nec iaculis
                  pulvinar, aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={autotask}
                  className="w-12"
                  alt="Automatically Create Tasks"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about auto tasks. Commodo nec iaculis pulvinar,
                  aliquet at erat. Cras aliquet.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={botsupport}
                  className="w-12"
                  alt="Multiple Bot Support"
                />
                <p className="text-white opacity-50 pl-6 leading-6">
                  Something about supporting multiple bots. Commodo nec iaculis
                  pulvinar, aliquet at erat. Cras aliquet.
                </p>
              </div>
              <p className="text-center text-white opacity-50">+ more!</p>
            </div>
          )}
          <img
            src={toolstriangle}
            className="absolute top-40 md:top-20 lg:top-48 -right-5 lg:right-0 opacity-80"
            alt="bg"
          />
          <img
            src={toolstriangle2}
            className="absolute top-40 md:top-20 lg:top-40 -right-8 lg:-right-10 opacity-90"
            alt="bg"
          />
          <img
            src={toolsline}
            className="w-64 md:w-auto absolute -bottom-24 md:-bottom-72 lg:-bottom-64 right-5 lg:-right-8 opacity-80"
            alt="bg"
          />
        </div>
      </div>
    </div>
  )
}

export default Tools
