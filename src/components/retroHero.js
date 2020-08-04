import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Frame from "../images/frame.png"

const RetroHero = () => {
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
  const imageStack = [
    `linear-gradient(to right, rgba(229, 62, 62, 0.2), rgba(229, 62, 62, 0.2))`,
    data.front.childImageSharp.fluid,
  ]
  return (
    <div
      className="max-w-screen-xl mx-auto bg-transparent"
      style={{ height: "calc(100vh - 189.23px)" }}
    >
      <div
        className="flex w-full h-full"
        style={{ height: "calc(100vh - 189.23px)" }}
      >
        <div className="flex flex-col w-1/2 text-center h-full justify-center items-center oswald">
          <h1 className="text-5xl text-gray-800 leading-tight uppercase tracking-tight">
            Danceland
          </h1>
          <h2 className="text-red-600 text-5xl leading-tight">
            The History Of A<br /> Midwest Ballroom
          </h2>
          <div className="w-1/4 border-t border-gray-400"></div>
          <p className="text-gray-800 mt-3 text-2xl">Steve Wilson</p>
        </div>
        <div className="flex w-1/2 bg-red-600 self-center rounded-md shadow-lg m-6">
          <Img
            fluid={data.front.childImageSharp.fluid}
            className="w-full self-center rounded-md shadow-lg transform -translate-x-4 -translate-y-4 border-r-4 border-b-4 border-white"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default RetroHero
