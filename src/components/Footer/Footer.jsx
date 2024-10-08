import React from "react"

import FooterLink from "../FooterLink/FooterLink"

import logo from "../../images/logo.png"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

import footerarrow from "../../images/footerarrow.svg"
import footerarrow2 from "../../images/footerarrow2.svg"
import footertriangle from "../../images/footertriangle.svg"

const Footer = () => {
  return (
    <div className="mt-16 lg:mt-24 w-full border-t border-footer-border relative">
      <div className="relative z-1 max-w-7xl mx-auto py-10 lg:pt-20">
        <div className="gap-8 lg:gap-20 p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center pb-3">
              <img src={logo} alt="SG Cooks" className="w-8 mr-4" />
              <h1 className="text-white text-lg font-bold">SG Cooks</h1>
            </div>
            <p className="text-base text-white opacity-50">
              Dedicated to increasing your reselling profits!
            </p>
          </div>
          <div className="">
            <h2 className="text-white tracking-wider text-base font-semibold uppercase pb-3">
              SG COOKS
            </h2>
            <div className="grid grid-rows-4 gap-2">
              <FooterLink text="Partners" link="partners" type="page" />
              <FooterLink text="Features" link="features" type="page" />
              <FooterLink text="Tools" link="tools" type="page" />
              <FooterLink
                text="Dashboard"
                link="https://dash.sgcooks.io/"
                type="external"
              />
            </div>
          </div>
          <div className="">
            <h2 className="text-white tracking-wider text-base font-semibold uppercase pb-3">
              PARTNERS
            </h2>
            <div className="grid grid-rows-2 gap-2">
              <FooterLink
                text="Iris Proxies"
                link="https://irisproxies.com/"
                type="external"
              />
              <FooterLink
                text="Wrath AIO"
                link="https://wrathbots.co/"
                type="external"
              />
            </div>
          </div>
          <div className="">
            <h2 className="text-white tracking-wider text-base font-semibold uppercase pb-3">
              LEGAL
            </h2>
            <div className="grid grid-rows-1">
              <FooterLink text="Terms of Service" link="terms" type="page" />
            </div>
          </div>
        </div>
        <div className="px-6 flex items-center space-x-4 pb-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/SGCoooks"
            className=""
          >
            <img src={twitter} alt="SG Cooks Twitter" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/sg.cooks"
            className=""
          >
            <img src={instagram} alt="SG Cooks Instagram" />
          </a>
        </div>
      </div>
      <img
        src={footerarrow}
        className="absolute bottom-0 right-20 xl:right-48 xl:mr-48 opacity-80 pointer-events-none"
        alt="bg"
      />
      <img
        src={footerarrow2}
        className="absolute bottom-0 right-0 xl:right-32 opacity-75 pointer-events-none"
        alt="bg"
      />
      <img
        src={footertriangle}
        className="absolute -top-48 left-0 xl:left-20 opacity-75 pointer-events-none"
        alt="bg"
      />
    </div>
  )
}
export default Footer
