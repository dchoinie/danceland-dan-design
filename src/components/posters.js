import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FaAngleRight } from "react-icons/fa"

const Posters = () => {
  const data = useStaticQuery(graphql`
    {
      poster6: file(relativePath: { eq: "posters/6.JPG" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      poster19: file(relativePath: { eq: "posters/19.JPG" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      poster34: file(relativePath: { eq: "posters/34.JPG" }) {
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
    <>
      <div className="px-6 lg:px-0 py-4 bg-transparent">
        <div className="flex flex-col items-center max-w-screen-xl mx-auto">
          <h2 className="text-3xl lg:text-6xl text-gray-800 leading-none text-center">
            The Artisty Of Andy Jennings
          </h2>
          <div className="w-1/5 border-t-2 border-red-600 my-2"></div>
          <p className="text-gray-700 text-xl lg:text-2xl text-center">
            Browse some of the magnificent poster designs advertising the
            Danceland acts.
          </p>
          <div className="flex justify-center w-full lg:w-3/4 py-6">
            <Img
              fluid={data.poster6.childImageSharp.fluid}
              className="w-1/3 mr-2"
            />
            <Img
              fluid={data.poster19.childImageSharp.fluid}
              className="w-1/3 mx-2"
            />
            <Img
              fluid={data.poster34.childImageSharp.fluid}
              className="w-1/3 ml-2"
            />
          </div>
          <Link
            to="/posters"
            className="flex justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xl"
          >
            Browse All Posters <FaAngleRight className="self-center ml-2" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
        <hr className="style-eight my-6" />
      </div>
    </>
  )
}

export default Posters
