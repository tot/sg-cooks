import React from "react"

import embedlogo from "../../images/embedlogo.png"
import foam from "../../images/foamrunner.png"

const Monitor = () => {
  return (
    <div className="relative select-none monitor backdrop-filter backdrop-blur overflow-hidden rounded-md">
      <div className="border-l-2 md:border-l-4 border-embed-border p-1.5 md:p-3">
        <div className="flex items-center">
          <div>
            <a
              href="https://kith.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-white text-1.3vw md:text-xxs font-normal pb-1"
            >
              https://kith.com/
            </a>
            <h1 className="cursor-pointer text-embed-link font-semibold text-1.75vw md:text-2vw lg:text-sm tracking-wide">
              adidas Yeezy Foam Runner - Black
            </h1>
          </div>
          <div className="hidden md:block ml-2 md:ml-4 lg:ml-4">
            <div className="bg-white rounded border-2 border-gray-300 h-3.5vw lg:h-8 w-3.25vw lg:w-6 relative"></div>{" "}
            <img
              src={foam}
              alt="Foam runner"
              className="absolute top-1 md:top-3 lg:top-3 w-8 md:w-16 lg:w-16 -right-0.5 md:-right-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 py-1 md:py-2">
          <div className="">
            <h2 className="text-white text-1.35vw md:1.45vw lg:text-xs font-medium pb-1">
              Price
            </h2>
            <p className="text-embed-description text-1.35vw md:1.45vw lg:text-xs">
              80.00 USD
            </p>
          </div>
          <div className="">
            <h2 className="text-white text-1.35vw md:1.45vw lg:text-xs font-medium pb-1">
              Stock
            </h2>
            <p className="text-embed-description text-1.35vw md:1.45vw lg:text-xs">
              20+
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 pb-1 md:pb-2">
          <div className="text-1.35vw md:1.45vw lg:text-xs">
            <h2 className="text-white font-medium pb-1">ATC</h2>
            <div className="space-y-0.5">
              <p>
                <span className="cursor-pointer text-embed-link">5</span>
                <span className="text-embed-description"> | </span>
                <span className="cursor-pointer text-embed-link">QT </span>
                <span className="text-embed-description">[3+]</span>
              </p>
              <p>
                <span className="cursor-pointer text-embed-link">7</span>
                <span className="text-embed-description"> | </span>
                <span className="cursor-pointer text-embed-link">QT </span>
                <span className="text-embed-description">[3+]</span>
              </p>
            </div>
          </div>
          <div className="text-1.35vw md:1.45vw lg:text-xs">
            <h2 className="text-white font-medium pb-1">ATC</h2>
            <div className="space-y-0.5">
              <p>
                <span className="cursor-pointer text-embed-link">6</span>
                <span className="text-embed-description"> | </span>
                <span className="cursor-pointer text-embed-link">QT </span>
                <span className="text-embed-description">[3+]</span>
              </p>
              <p>
                <span className="cursor-pointer text-embed-link">8</span>
                <span className="text-embed-description"> | </span>
                <span className="cursor-pointer text-embed-link">QT </span>
                <span className="text-embed-description">[3+]</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-1 md:pt-2">
          <img
            src={embedlogo}
            alt="Powered by SG Cooks"
            className="mr-1.5 w-embed-logo md:w-auto"
          />
          <p className="text-embed-description text-1.3vw md:text-xxs">
            Shopify | by SG Cooks
          </p>
        </div>
      </div>
    </div>
  )
}

export default Monitor
