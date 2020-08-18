import React from "react"
import { Link } from "gatsby"
import { FaArrowUp } from "react-icons/fa"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"

const ToTop = () => {
  return (
    <button
      className="focus:outline-none hidden lg:block"
      style={{ position: "fixed", bottom: "10px", left: "10px" }}
    >
      <ScrollLink to="nav" smooth={true} duration={500} className="flex">
        To Top <FaArrowUp className="self-center ml-1" />
      </ScrollLink>
    </button>
  )
}

export default ToTop
