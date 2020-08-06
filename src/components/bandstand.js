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
    <div className="px-6 lg:px-0 bg-transparent">
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="flex flex-col items-center">
          <Img fluid={data.bandstand.childImageSharp.fluid} className="w-64" />
          <div className="w-1/5 border-t-2 border-red-600 my-2"></div>
          <p className="text-gray-700 max-w-5xl text-center py-6 text-xl lg:text-2xl">
            In December 1957 Danceland’s Darlowe Olsen created a local
            television dance program that was modeled/patterned after Dick
            Clark’s American Bandstand. He called it Danceland Bandstand, natch.
          </p>
          <div className="flex justify-center w-full lg:w-3/4 py-6">
            <Img
              fluid={data.bs1.childImageSharp.fluid}
              className="w-1/3 self-start mr-2"
            />
            <Img
              fluid={data.bs2.childImageSharp.fluid}
              className="w-1/3 self-start mx-2"
            />
            <Img
              fluid={data.bs3.childImageSharp.fluid}
              className="w-1/3 self-start ml-2"
            />
          </div>
          <Link
            to="/danceland-bandstand"
            className="flex justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xl"
          >
            Danceland Bandstand <FaAngleRight className="self-center ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bandstand
