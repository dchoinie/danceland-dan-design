import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaStar } from "react-icons/fa"
import Img from "gatsby-image"

const RetroHeader = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "danceland_logo_orange_stars.png" }) {
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
    <div className="bg-cp-blue pt-2">
      <div className="border-t-2 border-b-2 border-dashed border-cp-white py-2">
        <div className="flex justify-center text-gray-200 max-w-screen-xl mx-auto text-cp-white">
          <ul className="flex self-center w-2/5 justify-around">
            <li className="text-lg solway mx-4">Home</li>
            <FaStar className="self-center text-xs text-cp-orange" />
            <li className="text-lg solway mx-4">Bio</li>
            <FaStar className="self-center text-xs text-cp-orange" />
            <li className="text-lg solway mx-4">Early Years</li>
          </ul>
          <div className="flex justify-center w-1/5 h-full relative">
            <Img fluid={data.logo.childImageSharp.fluid} className="w-full" />
          </div>
          <ul className="flex self-center w-2/5 justify-around">
            <li className="text-lg solway mx-4">Search By Year</li>
            <FaStar className="self-center text-xs text-cp-orange" />
            <li className="text-lg solway mx-4">Posters</li>
            <FaStar className="self-center text-xs text-cp-orange" />
            <li className="text-lg solway mx-4">Bandstand</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RetroHeader
