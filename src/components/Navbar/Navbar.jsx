import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import { Link } from "react-scroll"

import logo from "../../images/logo.png"

const Navbar = ({ links }) => {
  const [changeOnScroll, setChangeOnScroll] = useState(false)
  const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#22AC59" }))

  const changeNavBar = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
      setChangeOnScroll(true)
    else setChangeOnScroll(false)
  }
  window.addEventListener("scroll", changeNavBar)
  return (
    <div
      className={`fixed w-full z-50 top-0 transition-all ease-in-out duration-150 ${
        changeOnScroll
          ? "py-4 backdrop-filter backdrop-blur bg-navbar-scroll border-b border-navbar-border"
          : "py-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 xl:px-0 ${
          links ? "grid grid-cols-2 md:grid-cols-3" : "flex justify-between"
        }`}
      >
        <a href="https://sgcooks.io" className="flex items-center">
          <img src={logo} className="w-8" alt="SG Cooks" />
          <h1 className="text-white text-xl font-medium pl-4 hidden md:block">
            SG Cooks
          </h1>
        </a>
        {links && (
          <div className="hidden md:flex justify-center items-center space-x-12 font-medium tracking-wide text-white">
            <Link
              to="partners"
              smooth={true}
              offset={-75}
              duration={500}
              className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-150 ease-in-out"
            >
              Partners
            </Link>
            <Link
              to="features"
              smooth={true}
              offset={-75}
              duration={500}
              className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-150 ease-in-out"
            >
              Features
            </Link>
            <Link
              to="tools"
              smooth={true}
              offset={-75}
              duration={500}
              className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-150 ease-in-out"
            >
              Tools
            </Link>
          </div>
        )}

        <div className="flex justify-end">
          <a
            href="https://dash.sgcooks.io/"
            className="dashboard-button border-primary-dark hover:border-primary transition-colors duration-500 ease-in-out"
            onMouseEnter={() => {
              set({ y: 0, color: "#fff" })
            }}
            onMouseLeave={() => {
              set({ y: 100, color: "#22AC59" })
            }}
          >
            <animated.span style={{ color }}>Dashboard</animated.span>
            <animated.div
              style={{ transform: y.to((v) => `translateY(${v}%`) }}
              className="dashboard-fill"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
