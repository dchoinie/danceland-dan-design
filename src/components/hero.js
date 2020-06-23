import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      front: file(relativePath: { eq: "front.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "danceland_logo.png" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundStack = [
    `linear-gradient(to top right, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0))`,
    data.front.childImageSharp.fluid,
  ]

  return (
    <BackgroundImage fluid={backgroundStack}>
      <div className="h-screen" style={{ marginTop: "-78px" }}>
        <div
          className="flex flex-col justify-center max-w-screen-xl mx-auto h-full"
          style={{ border: "1px solid red" }}
        >
          <h1 className="text-white">The History Of</h1>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            className="w-1/2 -ml-20 my-6"
            style={{ transform: "rotate(-5deg)" }}
          />
          <h1 className="text-white">A Midwest Ballroom</h1>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
