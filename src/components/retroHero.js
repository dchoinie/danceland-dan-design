import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RetroHero = () => {
  const data = useStaticQuery(graphql`
    {
      opening: file(relativePath: { eq: "homeImages/opening.jpg" }) {
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
      className="w-full bg-cp-gray"
      style={{ height: "calc(80vh - 189.39px)" }}
    >
      <div className="flex w-full h-full" style={{ border: "1px solid red" }}>
        <Img fluid={data.opening.childImageSharp.fluid} className="w-full" />
      </div>
    </div>
  )
}

export default RetroHero
