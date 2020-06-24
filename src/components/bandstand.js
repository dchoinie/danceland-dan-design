import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"
import { FaAngleRight } from "react-icons/fa"

const Bandstand = () => {
  const data = useStaticQuery(graphql`
    {
      bandstand: file(relativePath: { eq: "bandstand/bandstand.png" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      bs1: file(relativePath: { eq: "bandstand/1.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      bs2: file(relativePath: { eq: "bandstand/2.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      bs3: file(relativePath: { eq: "bandstand/3.jpg" }) {
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
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="flex flex-col items-center">
          <Img fluid={data.bandstand.childImageSharp.fluid} className="w-64" />
          <div className="w-1/5 border-t-2 border-main-brown my-2"></div>
          <p className="text-gray-600 max-w-2xl text-center py-6">
            In December 1957 Danceland’s Darlowe Olsen created a local
            television dance program that was modeled/patterned after Dick
            Clark’s American Bandstand. He called it Danceland Bandstand, natch.
          </p>
          <div className="flex justify-center w-full py-6">
            <Img
              fluid={data.bs1.childImageSharp.fluid}
              className="w-1/4 self-start mr-2"
              objectFit=""
            />
            <Img
              fluid={data.bs2.childImageSharp.fluid}
              className="w-1/4 self-start mx-2"
              objectFit=""
            />
            <Img
              fluid={data.bs3.childImageSharp.fluid}
              className="w-1/4 self-start ml-2"
              objectFit=""
            />
          </div>
          <Link
            to="/dancelandbandstand"
            className="flex justify-center bg-light-orange hover:bg-orange-700 text-white px-4 py-2 rounded-md text-xl"
          >
            Danceland Bandstand <FaAngleRight className="self-center ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bandstand
