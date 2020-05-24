import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"

const Posters = () => {
  const data = useStaticQuery(graphql`
    {
      posters: allFile(
        filter: { relativeDirectory: { eq: "posters" } }
        sort: { fields: absolutePath }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90) {
                src
                srcSet
                ...GatsbyImageSharpFluid
              }
            }
            id
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto py-24">
          <div className="flex flex-col">
            <div className="flex mb-12">
              <div className="flex w-1/2">
                <h2 className="text-5xl geist self-center">
                  The Artisty Of Andy Jennings
                </h2>
              </div>
              <div className="flex w-1/2">
                <p className="text-xl text-gray-700">
                  At the entrance to the ballroom Danceland patrons were greeted
                  by a poster that would announce upcoming or current shows.
                  Poster is probably an under-statement. These were large 28” X
                  44” hand-painted one-of-a kind mini-masterpieces created by
                  talented local artist Andy Jennings. The posters were on hard
                  cardboard and rested on an easel right across from the box
                  office. Very few of these exist today.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-12">
            {data.posters.edges.map(({ node }) => {
              return (
                <div key={node.id} className="w-full">
                  <Img
                    fluid={node.childImageSharp.fluid}
                    className="w-full h-full shadow-md"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Posters
