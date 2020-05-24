import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Texture from "../images/textures/vintage_speckles.png"

export const earlyYearsQuery = graphql`
  {
    early: allAirtable(
      filter: { table: { eq: "earlyYears" } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
            orderId
            img1 {
              url
            }
            img2 {
              url
            }
            img3 {
              url
            }
            img4 {
              url
            }
            img5 {
              url
            }
          }
        }
      }
    }
  }
`

const EarlyYears = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
        }}
      >
        <div className="flex flex-col max-w-screen-xl mx-auto">
          {data.early.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex w-full my-6 bg-white shadow-lg border border-gray-200 p-6 rounded-md border border-gray-300"
              >
                <div className="flex flex-col items-center w-full">
                  <p className="text-lg text-yellow border-b border-gray-500">
                    {node.data.fullDate}
                  </p>
                  <h2 className="text-5xl geist text-gray-700 text-center">
                    {node.data.artist}
                  </h2>
                  <div className="flex justify-center max-w-full flex-wrap">
                    {node.data.img1 && (
                      <img
                        src={node.data.img1[0].url}
                        className="max-w-xl"
                        alt=""
                      />
                    )}
                    {node.data.img2 && (
                      <img
                        src={node.data.img2[0].url}
                        className="max-w-xl"
                        alt=""
                      />
                    )}
                    {node.data.img3 && (
                      <img
                        src={node.data.img3[0].url}
                        className="max-w-xl"
                        alt=""
                      />
                    )}
                    {node.data.img4 && (
                      <img
                        src={node.data.img4[0].url}
                        className="max-w-xl"
                        alt=""
                      />
                    )}
                    {node.data.img5 && (
                      <img
                        src={node.data.img5[0].url}
                        className="max-w-xl"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default EarlyYears
