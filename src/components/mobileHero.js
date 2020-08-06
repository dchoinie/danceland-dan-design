import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MobileHero = () => {
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
    <div className="px-6 my-12 lg:hidden">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl text-gray-800 leading-tight uppercase tracking-tight">
          Danceland
        </h1>
        <h2 className="text-red-600 text-3xl text-center leading-tight">
          The History Of A<br /> Midwest Ballroom
        </h2>
        <div className="flex w-full bg-red-600 mt-6">
          <Img
            fluid={data.front.childImageSharp.fluid}
            className="w-full transform -translate-y-2 -translate-x-2"
          />
        </div>
        <div className="border-t border-gray-400 w-1/2 mx-auto my-2"></div>
        <p className="text-gray-800 text-xl">Steve Wilson</p>
      </div>
    </div>
  )
}

export default MobileHero
