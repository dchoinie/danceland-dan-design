import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

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
      <div className="flex max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center w-full">
          {data.early.edges.map(({ node }) => {
            return (
              <div key={node.id} className="flex flex-col items-center my-4">
                <h6 className="text-2xl leading-none">{node.data.fullDate}</h6>
                <h2 className="text-5xl leading-none">{node.data.artist}</h2>
                <div className="flex w-full my-4">
                  {node.data.img1 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img4 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img5 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img6 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="w-full flex justify-center mx-2">
                      <img
                        src={node.data.img7[0].url}
                        alt=""
                        className="self-start"
                      />
                    </div>
                  )}
                </div>
                <hr className="mt-4 w-full border-t border-gray-400" />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default EarlyYears
