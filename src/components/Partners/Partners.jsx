import React from "react"

import Header from "../Header/Header"

import iris from "../../images/iris.svg"
import wrath from "../../images/wrath.svg"
import share from "../../images/share.svg"
import partnerlines from "../../images/partnerlines.svg"
import featuresarrow from "../../images/featuresarrow.svg"
import featuresarrow2 from "../../images/featuresarrow2.svg"

const Partners = () => {
  return (
    <div className="w-full relative">
      <img
        src={partnerlines}
        className="w-2/3 xl:w-auto absolute right-0 -top-20"
        alt="bg"
      />

      <img
        src={featuresarrow2}
        className="w-2/3 xl:w-auto absolute right-0 left-0 mx-auto top-0 opacity-100"
        alt="bg"
      />
      <img
        src={featuresarrow}
        className="w-4/5 xl:w-auto absolute left-10 right-0 xl:left-60 xl:right-32 top-0 opacity-100"
        alt="bg"
      />
      <div id="partners" className="py-10 md:pb-20 max-w-3xl mx-auto">
        <Header align="center" subtitle="our partners" title="Notable Brands" />
        <div className="px-6 grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="transform hover:scale-110 transition-transform duration-150 relative rounded-3xl border border-card-border bg-partners-fill p-6 backdrop-filter backdrop-blur">
            <img src={iris} className="pb-6 md:pb-12 w-16" alt="Iris Proxies" />
            <h1 className="text-white font-semibold text-2xl pb-2">
              Iris Proxies
            </h1>
            <p className="text-white opacity-50 text-base h-20 md:h-32 leading-6">
              Reliable Proxies with Zero Limitations. Taking success to a new
              level with our Premium Residential and our ISP plans.
            </p>
            <a
              href="https://irisproxies.com"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-80 hover:opacity-90 duration-125 transition-colors text-base font-medium"
            >
              Learn more
            </a>
            <img
              src={share}
              className="absolute -top-8 -right-8 hidden md:block"
              alt="Share"
            />
          </div>
          <div className="transform hover:scale-110 transition-transform duration-150 rounded-3xl border border-card-border bg-partners-fill p-6 backdrop-filter backdrop-blur">
            <img src={wrath} className="pb-6 md:pb-12 w-16" alt="Wrath AIO" />
            <h1 className="text-white font-semibold text-2xl pb-2">
              Wrath AIO
            </h1>
            <p className="text-white opacity-50 text-base h-24 md:h-32 leading-6">
              Wrath AIO is an all-in-one solution for purchasing hyped items
              without having to worry about out of stock.
            </p>
            <a
              href="https://wrathbots.co"
              target="_blank"
              rel="noreferrer"
              className="text-white opacity-80 hover:opacity-90 duration-125 transition-colors text-base font-medium"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
