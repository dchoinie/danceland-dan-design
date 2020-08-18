import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Algolia = () => {
  const data = useStaticQuery(graphql`
    {
      algolia: file(relativePath: { eq: "algolia.png" }) {
        childImageSharp {
          fluid(quality: 70) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="flex justify-center">
      <Img fluid={data.algolia.childImageSharp.fluid} className="w-40 my-2" />
    </div>
  )
}

export default Algolia
