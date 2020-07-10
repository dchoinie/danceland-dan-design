import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

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
    `linear-gradient(to top right, rgba(236, 170, 107, 0.5), rgba(236, 170, 107, 0.5))`,
    data.front.childImageSharp.fluid,
  ]
  return (
    <div
      className="max-w-screen-xl mx-auto bg-transparent my-4"
      style={{ height: "calc(90vh - 195.39px)" }}
    >
      <div className="flex w-full h-full">
        <div className="flex flex-col w-1/2 h-full justify-center items-center ">
          <h1 className="text-7xl geist text-center text-gray-800 leading-tight">
            The History Of
            <br /> <span className="text-cp-orange">A Midwest Ballroom</span>
          </h1>
          <div className="w-1/4 border-t-2 border-cp-gray"></div>
          <small className="text-gray-600 mt-3">By: Steve Wilson</small>
        </div>
        <div className="flex w-1/2">
          <BackgroundImage
            fluid={imageStack}
            className="w-full shadow-md"
            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
          ></BackgroundImage>
        </div>
      </div>
    </div>
  )
}

export default RetroHero
