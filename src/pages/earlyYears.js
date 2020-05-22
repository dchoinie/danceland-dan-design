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
                className="flex w-full my-6 bg-white shadow-lg border border-gray-200 p-6 rounded-md"
              >
                <div className="flex justify-center w-1/2">
                  {node.data.img1 && <img src={node.data.img1[0].url} alt="" />}
                </div>
                <div className="flex w-1/2 flex-col justify-center items-center order-first">
                  <p className="text-lg text-yellow border-b border-gray-500">
                    {node.data.fullDate}
                  </p>
                  <h2 className="text-4xl geist text-gray-700 text-center">
                    {node.data.artist}
                  </h2>
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
