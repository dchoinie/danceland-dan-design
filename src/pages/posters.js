import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const Posters = () => {
  const data = useStaticQuery(graphql`
    {
      andy: allAirtable(
        filter: { table: { eq: "posters" }, data: { orderId: { lte: 46 } } }
        sort: { fields: data___orderId }
      ) {
        edges {
          node {
            id
            data {
              orderId
              poster {
                localFiles {
                  childImageSharp {
                    fluid {
                      src
                      srcSet
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              date(formatString: "yyyy")
            }
          }
        }
      }
      nonAndy: allAirtable(
        filter: { table: { eq: "posters" }, data: { orderId: { gt: 46 } } }
        sort: { fields: data___orderId }
      ) {
        edges {
          node {
            id
            data {
              orderId
              poster {
                localFiles {
                  childImageSharp {
                    fluid {
                      src
                      srcSet
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              date(formatString: "MMMM yyyy")
            }
          }
        }
      }
      paint: file(relativePath: { eq: "paint.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <div className="max-w-screen-xl mx-auto py-24">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row mb-12">
              <div className="flex flex-col items-center w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl geist self-center">
                  The Artisty Of Andy Jennings
                </h2>
                <Img
                  fluid={data.paint.childImageSharp.fluid}
                  className="w-1/2"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <p className="text-xl text-gray-700 mb-2">
                  At the entrance to the ballroom Danceland patrons were greeted
                  by a poster that would announce upcoming or current shows.
                  Poster is probably an under-statement.{" "}
                </p>
                <p className="text-xl text-gray-700">
                  These were large 28” X 44” hand-painted one-of-a kind
                  masterpieces created by talented local artist Andy Jennings.
                  The posters were on hard cardboard and rested on an easel
                  right across from the box office. Very few of these exist
                  today.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
            {data.andy.edges.map(({ node }) => {
              return (
                <div key={node.id} className="w-full">
                  <div className="flex flex-col w-full h-full items-center">
                    <p className="text-5xl geist">{node.data.date}</p>
                    <Img
                      fluid={
                        node.data.poster.localFiles[0].childImageSharp.fluid
                      }
                      className="w-full h-full shadow-md"
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <h2 className="text-3xl lg:text-6xl geist text-center my-6">
            Non-Andy Jennings Posters
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
            {data.nonAndy.edges.map(({ node }) => {
              return (
                <div key={node.id} className="w-full">
                  <div className="flex flex-col w-full h-full items-center">
                    <p className="text-5xl geist">{node.data.date}</p>
                    <Img
                      fluid={
                        node.data.poster.localFiles[0].childImageSharp.fluid
                      }
                      className="w-full h-full shadow-md"
                    />
                  </div>
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
