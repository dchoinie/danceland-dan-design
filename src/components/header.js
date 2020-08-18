import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaStar, FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa"
import Img from "gatsby-image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "danceland_logo_black.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="hidden lg:block bg-transparent" id="nav">
      <div className="py-4">
        <div className="flex flex-col items-center">
          <Link to="/">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="w-64"
              style={{ transform: "rotate(-5deg)" }}
            />
          </Link>
        </div>
        <div className="max-w-screen-xl mx-auto mt-6">
          <div className="flex w-full border-b border-t border-gray-700 py-2">
            <ul className="flex justify-between w-full text-xl uppercase text-gray-700">
              <Link to="/">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Home
                </li>
              </Link>
              <Link to="/bio">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Bio
                </li>
              </Link>
              <Link to="/earlyYears">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  1926 - 1954
                </li>
              </Link>
              <li className="relative">
                <button
                  className="flex uppercase hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Search By Year{" "}
                  {isOpen === true ? (
                    <FaAngleUp className="self-center ml-2" />
                  ) : (
                    <FaAngleDown className="self-center ml-2" />
                  )}
                </button>
                {isOpen && (
                  <div className="absolute w-full z-40">
                    <div className="flex w-full justify-between bg-gray-100 p-2 rounded-md shadow-md">
                      <div className="flex flex-col w-1/2 justify-center text-center">
                        <Link to="/1955" className="hover:text-red-600">
                          1955
                        </Link>
                        <Link to="/1956" className="hover:text-red-600">
                          1956
                        </Link>
                        <Link to="/1957" className="hover:text-red-600">
                          1957
                        </Link>
                        <Link to="/1958" className="hover:text-red-600">
                          1958
                        </Link>
                        <Link to="/1959" className="hover:text-red-600">
                          1959
                        </Link>
                        <Link to="/1960" className="hover:text-red-600">
                          1960
                        </Link>
                        <Link to="/1961" className="hover:text-red-600">
                          1961
                        </Link>
                      </div>
                      <div className="flex flex-col w-1/2 justify-center text-center">
                        <Link to="/1962" className="hover:text-red-600">
                          1962
                        </Link>
                        <Link to="/1963" className="hover:text-red-600">
                          1963
                        </Link>
                        <Link to="/1964" className="hover:text-red-600">
                          1964
                        </Link>
                        <Link to="/1965" className="hover:text-red-600">
                          1965
                        </Link>
                        <Link to="/1966" className="hover:text-red-600">
                          1966
                        </Link>
                        <Link to="/1967" className="hover:text-red-600">
                          1967
                        </Link>
                        <Link to="/1968" className="hover:text-red-600">
                          1968
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <Link to="/posters">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Posters
                </li>
              </Link>
              <Link to="danceland-bandstand">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Danceland Bandstand
                </li>
              </Link>
              <Link to="/managers">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Managers
                </li>
              </Link>
              <Link to="/local-bands">
                <li className="hover:bg-red-600 hover:text-white p-1 border-t border-b border-transparent hover:border-black">
                  Local Bands
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
