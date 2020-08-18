import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="bg-red-600 py-8 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-center w-full">
          <ul className="flex flex-col text-center lg:flex-row">
            <li className="mx-6 text-3xl">
              <Link to="/steve-wilson">Steve Wilson</Link>
            </li>
            <li className="mx-6 text-sm self-center">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </li>
            <li className="mx-6 text-3xl">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
