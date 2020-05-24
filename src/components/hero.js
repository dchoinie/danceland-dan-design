import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Front from "../images/front.jpg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      vinyl: file(relativePath: { eq: "vinyl.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
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
  return (
    <div
      className="relative"
      style={{
        marginTop: "-61.6px",
        filter: "sepia(30%)",
      }}
    >
      <div className="flex h-screen">
        <div
          className="flex w-1/2 relative"
          style={{
            backgroundImage: `linear-gradient(to top right, rgba(26, 26, 26, 1) 30%, rgba(26, 26, 26, 0.7)), url(${Front})`,
          }}
        >
          <div className="absolute flex flex-col w-full h-full justify-center z-40 text-center">
            <h1 className="text-5xl text-white geist">The History Of</h1>
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="w-3/4 self-center"
            />
            <h1 className="text-5xl text-white geist">A Midwest Ballroom</h1>
            <p className="text-yellow text-xl">1926 - 1968</p>
          </div>
        </div>
        <div className="flex w-1/2">
          <Img
            fluid={data.vinyl.childImageSharp.fluid}
            className="w-full"
            style={{ marginLeft: "-25%", zIndex: "-1" }}
          />
        </div>
      </div>
      <div
        className="absolute"
        style={{
          height: "100%",
          width: "20%",
          top: "0",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <div className="flex justify-center w-full h-full">
          <div
            className="w-full bg-maroon"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
              marginRight: "-30%",
            }}
          ></div>
          <div
            className="w-full bg-dark-orange"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
              marginRight: "-30%",
            }}
          ></div>
          <div
            className="w-full bg-light-orange"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
              marginRight: "-30%",
            }}
          ></div>
          <div
            className="w-full bg-yellow"
            style={{
              clipPath: "polygon(50% 0, 100% 0, 50% 100%, 0% 100%)",
              marginRight: "-30%",
            }}
          ></div>
        </div>
      </div>
      <div
        className="hidden absolute xl:flex justify-center h-full"
        style={{
          top: "0",
          right: "0",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        <p className="text-6xl text-gray-700 geist">1955 - 1968</p>
      </div>
    </div>
  )
}

export default Hero
