import React from "react"
import PropTypes from "prop-types"

const Header = ({ align, subtitle, title }) => {
  return (
    <div className={`text-${align} pb-10`}>
      <h2 className="tracking-extrawidest uppercase text-white opacity-50 text-base font-medium pb-2">
        {subtitle}
      </h2>
      <h1 className="text-white text-3xl font-semibold opacity-90 pb-2">
        {title}
      </h1>
    </div>
  )
}

Header.propTypes = {
  align: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default Header
