import React from "react"

import Smiley from "../SVG/Smiley/Smiley"
import ps5 from "../../images/ps5.png"

const Success = () => {
  return (
    <div className=" select-none success backdrop-filter backdrop-blur overflow-hidden rounded-md">
      <div className="p-1.5 md:p-3">
        <div className="flex items-start">
          <Smiley />
          <div className="pl-1.5 md:pl-3">
            <div className="flex items-end">
              <h3 className="font-medium text-1.75vw md:text-2vw lg:text-sm text-primary">
                SG Cooks Member
              </h3>
              <p className="text-1.35vw md:1.45vw lg:text-xs text-success-date font-normal pl-1 md:pl-3">
                Today at 7:04 AM
              </p>
            </div>
            <div className="pt-1.5 md:pt-3 pb-1.5 md:pb-2">
              <img src={ps5} alt="PS5" className="w-25vw md:w-64 lg:w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
