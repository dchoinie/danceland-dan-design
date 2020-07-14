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
        <div className="flex flex-col w-1/2 h-full justify-center items-center ">
          <h1 className="text-6xl text-center text-gray-800 leading-tight">
            The History Of
            <br />{" "}
            <span className="text-red-600 whitespace-no-wrap">
              A Midwest Ballroom
            </span>
          </h1>
          <div className="w-1/4 border-t-2 border-cp-gray"></div>
          <small className="text-gray-600 mt-3">By: Steve Wilson</small>
        </div>
        <div className="flex h-full w-1/2 self-center">
          <BackgroundImage
            fluid={imageStack}
            className="w-full h-full shadow-md"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></BackgroundImage>
        </div>
      </div>
    </div>
  )
}

export default RetroHero
