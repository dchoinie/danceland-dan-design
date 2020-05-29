import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SpinnerImg = props => {
  const data = useStaticQuery(graphql`
    {
      spinner: file(relativePath: { eq: "spinner.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.spinner.childImageSharp.fluid}
      className={props.spinnerClass}
    />
  )
}

export default SpinnerImg
