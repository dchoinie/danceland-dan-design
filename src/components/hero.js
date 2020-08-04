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

  const newStack = [
    `linear-gradient(rgba(153, 44, 66, 1), rgba(153, 44, 66, 1))`,
    data.front.childImageSharp.fluid,
  ]

  return (
    <BackgroundImage fluid={backgroundStack}>
      <div className="h-screen" style={{ marginTop: "-79px" }}>
        <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto h-full">
          <div
            className="flex flex-col items-center py-4"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <h1 className="text-gray-200 text-3xl">Danceland</h1>
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

{
  /* <div
      className="w-full bg-cp-blue"
      style={{ height: "calc(100vh - 102.23px)" }}
    >
      <div className="flex justify-between h-full max-w-screen-xl mx-auto">
        <div className="flex flex-col self-center">
          <h1 className="text-10xl geist text-cp-white leading-none">
            Danceland
          </h1>
          <h2 className="solway text-2xl text-cp-orange">
            The History Of A Midwest Ballroom
          </h2>
          <p className="text-gray-500">By: Steve Wilson</p>
        </div>
        <div className="flex w-1/2">
          <Img
            fluid={data.front.childImageSharp.fluid}
            className="w-full self-center border-4 border-cp-red rounded-md"
            style={{
              backgroundImage:
                "linear-gradient(rgba(153, 44, 66, 1), rgba(153, 44, 66, 1))",
            }}
          />
        </div>
      </div>
    </div> */
}
