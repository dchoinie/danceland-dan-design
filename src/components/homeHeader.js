import React, { useState } from "react"
import { Link } from "gatsby"
import {
  FaSearch,
  FaAngleDown,
  FaAngleUp,
  FaRegCalendarAlt,
} from "react-icons/fa"

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="relative py-4 bg-transparent z-40">
      <div className="flex w-full relative max-w-screen-xl mx-auto py-2">
        <ul className="flex justify-between w-full text-xl font-extrabold text-white">
          <li>
            <Link
              to="/"
              className="border-b border-transparent hover:border-main-brown"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bio"
              className="border-b border-transparent hover:border-main-brown"
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              to="/earlyYears"
              className="border-b border-transparent hover:border-main-brown"
            >
              Early Years
            </Link>
          </li>
          <li>
            <button
              className="flex relative focus:outline-none solway font-extrabold border-b border-transparent hover:border-main-brown"
              onClick={() => setIsOpen(!isOpen)}
            >
              Search By Year
              {isOpen === true ? (
                <FaAngleUp className="self-center ml-1" />
              ) : (
                <FaAngleDown className="self-center ml-1" />
              )}
            </button>
            {isOpen && (
              <div className="flex absolute w-64 bg-white text-gray-800 mt-3 rounded-md shadow-md">
                <div className="flex justify-around w-full p-4">
                  <ul className="flex flex-col border-r border-gray-700 pr-6">
                    <li className="mb-1">
                      <Link to="/1955" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1955
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1956
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1957
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1958
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1959
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1960
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1961
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col">
                    <li className="mb-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1962
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1963
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1964
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1965
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1966
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1967
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to="/" className="flex">
                        <FaRegCalendarAlt className="self-center mr-2" /> 1968
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/posters"
              className="border-b border-transparent hover:border-main-brown"
            >
              Posters
            </Link>
          </li>
          <li>
            <Link
              to="/danceland-bandstand"
              className="border-b border-transparent hover:border-main-brown"
            >
              Danceland Bandstand
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HomeHeader
