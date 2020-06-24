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
    `linear-gradient(to top right, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0))`,
    data.front.childImageSharp.fluid,
  ]

  return (
    <BackgroundImage fluid={backgroundStack}>
      <div className="h-screen" style={{ marginTop: "-78px" }}>
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-full">
          <div
            className="flex flex-col items-center py-4"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <h1 className="text-gray-200 text-3xl">The History Of</h1>
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="my-6"
              style={{ width: "40vw" }}
            />
            <h1 className="text-gray-200 text-3xl">A Midwest Ballroom</h1>
            <small className="text-gray-400 mt-2">By: Steve Wilson</small>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
