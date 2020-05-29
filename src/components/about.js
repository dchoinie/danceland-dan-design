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
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="flex flex-col items-center">
          <h2 className="text-6xl geist leading-none text-gray-800">
            Danceland Bio
          </h2>
          <div className="w-1/5 border-t-2 border-main-yellow my-2"></div>
          <p className="text-gray-600 text-center max-w-xl">
            Learn more about the history of "Iowa's Smartest Ballroom" located
            in the heart of downtown Cedar Rapids, IA spanning from 1926 - 1968.
          </p>
          <div className="bg-main-yellow rounded shadow-md w-1/2 my-12">
            <Img
              fluid={data.front.childImageSharp.fluid}
              className="w-full self-center transform -translate-x-4 -translate-y-4 rounded"
            />
          </div>
          <Link
            to="/bio"
            className="flex justify-center bg-main-yellow hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-xl"
          >
            Danceland Bio <FaAngleRight className="self-center ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
