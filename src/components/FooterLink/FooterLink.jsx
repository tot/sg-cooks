import React from "react"
import { Link } from "react-scroll"

const FooterLink = ({ text, link, type }) => {
  return (
    <>
      {type === "page" && (
        <Link
          to={link}
          smooth={true}
          offset={-75}
          duration={500}
          className="cursor-pointer hover:opacity-90 transition-all duration-100 text-white opacity-50 font-normal"
        >
          {text}
        </Link>
      )}
      {type === "external" && (
        <a
          href={link}
          className="cursor-pointer hover:opacity-90 transition-all duration-100 text-white opacity-50 font-normal"
        >
          {text}
        </a>
      )}
    </>
  )
}

export default FooterLink
