import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"
import { FaAngleRight } from "react-icons/fa"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      front: file(relativePath: { eq: "front.jpg" }) {
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
    <div className="px-6 lg:px-0 bg-transparent">
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl lg:text-6xl leading-none text-gray-800">
            Danceland Bio
          </h2>
          <div className="w-1/5 border-t-2 border-red-600 my-2"></div>
          <p className="text-gray-700 text-center max-w-2xl text-xl lg:text-2xl">
            Learn more about the history of "Iowa's Smartest Ballroom" located
            in the heart of downtown Cedar Rapids, Iowa spanning from 1926 -
            1968.
          </p>
          <div className="bg-red-600 rounded shadow-md w-full lg:w-1/2 my-6">
            <Img
              fluid={data.front.childImageSharp.fluid}
              className="w-full self-center transform lg:-translate-x-4 lg:-translate-y-4 rounded"
            />
          </div>
          <Link
            to="/bio"
            className="flex justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xl"
          >
            Danceland Bio <FaAngleRight className="self-center ml-2" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <hr className="style-eight my-6" />
      </div>
    </div>
  )
}

export default About
