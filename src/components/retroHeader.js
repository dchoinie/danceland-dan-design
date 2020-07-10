import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaStar, FaSearch } from "react-icons/fa"
import Img from "gatsby-image"

const RetroHeader = () => {
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
      ribbon: file(relativePath: { eq: "ribbon.png" }) {
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
    <div className="pt-4">
      <div className="flex flex-col items-center">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          className="w-1/5"
          style={{ transform: "rotate(-5deg)" }}
        />
      </div>
      <div className="max-w-screen-xl mx-auto mt-6">
        <div className="flex w-full border-double border-t-4 border-b-2 border-cp-gray py-2">
          <ul className="flex justify-between w-full text-lg uppercase text-gray-700">
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Home
            </li>
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Bio
            </li>
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Early Years
            </li>
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Search By Year
            </li>
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Posters
            </li>
            <li className="hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              Danceland Bandstand
            </li>
            <li className="flex hover:bg-blue-200 p-1 border-t border-b border-transparent hover:border-black">
              <FaSearch className="self-center" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RetroHeader
