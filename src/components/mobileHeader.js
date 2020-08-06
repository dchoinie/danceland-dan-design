import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaBars, FaAngleDown, FaAngleUp } from "react-icons/fa"

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchByYearOpen, setSearchByYearOpen] = useState(false)
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
    <div className="lg:hidden px-6">
      <div className="flex w-full justify-between py-2">
        <div className="flex">
          <Link to="/">
            <Img fluid={data.logo.childImageSharp.fluid} className="w-40" />
          </Link>
        </div>
        <div className="flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <FaBars className="self-center" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex w-full justify-end">
          <ul className="flex flex-col text-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bio">Bio</Link>
            </li>
            <li>
              <Link to="/earlyYears">1926 - 1954</Link>
            </li>
            <li>
              <button
                onClick={() => setSearchByYearOpen(!searchByYearOpen)}
                className="flex w-full justify-end focus:outline-none"
              >
                Search By Year{" "}
                {searchByYearOpen === true ? (
                  <FaAngleUp className="self-center ml-1" />
                ) : (
                  <FaAngleDown className="self-center ml-1" />
                )}
              </button>
              {searchByYearOpen && (
                <ul className="flex flex-col">
                  <li>
                    <Link to="/1955">1955</Link>
                  </li>
                  <li>
                    <Link to="/1956">1956</Link>
                  </li>
                  <li>
                    <Link to="/1957">1957</Link>
                  </li>
                  <li>
                    <Link to="/1958">1958</Link>
                  </li>
                  <li>
                    <Link to="/1959">1959</Link>
                  </li>
                  <li>
                    <Link to="/1960">1960</Link>
                  </li>
                  <li>
                    <Link to="/1961">1961</Link>
                  </li>
                  <li>
                    <Link to="/1962">1962</Link>
                  </li>
                  <li>
                    <Link to="/1963">1963</Link>
                  </li>
                  <li>
                    <Link to="/1964">1964</Link>
                  </li>
                  <li>
                    <Link to="/1965">1965</Link>
                  </li>
                  <li>
                    <Link to="/1966">1966</Link>
                  </li>
                  <li>
                    <Link to="/1967">1967</Link>
                  </li>
                  <li>
                    <Link to="/1968">1968</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/posters">Posters</Link>
            </li>
            <li>
              <Link to="/danceland-bandstand">Danceland Bandstand</Link>
            </li>
            <li>
              <Link to="/managers">Managers</Link>
            </li>
            <li>
              <Link to="/local-bands">Local Bands</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
