import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      front: file(relativePath: { eq: "newCover.jpg" }) {
        childImageSharp {
          fluid(quality: 70) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "danceland_logo_black.png" }) {
        childImageSharp {
          fluid(quality: 70) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "backgroundNames.jpg" }) {
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
  const imageStack = [
    `linear-gradient(to right, rgba(229, 62, 62, 0.2), rgba(229, 62, 62, 0.2))`,
    data.front.childImageSharp.fluid,
  ]
  return (
    <div
      className="hidden lg:block max-w-screen-xl mx-auto bg-transparent"
      // style={{ height: "calc(100vh - 189.23px)" }}
    >
      <div
        className="flex w-full h-full"
        // style={{ height: "calc(100vh - 189.23px)" }}
      >
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          style={{ width: "50%", maxHeight: "500px" }}
        >
          <div className="flex flex-col w-full text-center h-full justify-center items-center oswald">
            {/* <h1 className="text-5xl text-gray-800 leading-tight uppercase tracking-tight">
            Danceland
          </h1> */}
            <Img fluid={data.logo.childImageSharp.fluid} className="w-3/4" />
            <h2 className="text-red-600 text-5xl leading-tight">
              The History Of A<br /> Midwest Ballroom
            </h2>
            <p className="text-gray-800 mt-3 text-3xl">Steve Wilson</p>
          </div>
        </BackgroundImage>
        <div className="flex w-1/2 h-full self-center">
          <Img
            fluid={data.front.childImageSharp.fluid}
            className="w-full rounded-md shadow-lg self-start"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
