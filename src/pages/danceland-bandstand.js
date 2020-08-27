import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const bandstandQuery = graphql`
  {
    season1: allAirtable(
      filter: { table: { eq: "bandstand" }, data: { orderId: { lte: 18 } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            orderId
            artist
            year
            month
            day
            season
            supportArtist
            price
            img1 {
              url
            }
            img2 {
              url
            }
          }
        }
      }
    }
    season2: allAirtable(
      filter: { table: { eq: "bandstand" }, data: { orderId: { gt: 18 } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            orderId
            artist
            year
            month
            day
            season
            supportArtist
            price
            img1 {
              url
            }
            img2 {
              url
            }
          }
        }
      }
    }
    bandstandLogo: file(relativePath: { eq: "bandstand/bandstand.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DancelandBandstand = ({ data }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
        <div className="flex flex-col items-center">
          <Img
            fluid={data.bandstandLogo.childImageSharp.fluid}
            className="w-1/3"
          />
          <p className="text-lg my-6">
            In December 1957 Danceland’s Darlowe Olsen created a local
            television dance program that was patterned after Dick Clark’s
            American Bandstand. He called it Danceland Bandstand, natch. The
            dances were held on Sunday afternoons from 2-5 PM and telecast over
            KCRG-TV from 3-4. Local KCRG radio disc jockeys (Dave Etzel, Jim
            Young, Jim Jensen) served as the host/emcee. The dances were for
            ages 13-18. Dress-up rules applied and parents were always welcome.
            It ran for two seasons. Both seasons featured a combination of
            records hops, local live music and an occasional national act.
            Sometimes a national act would play Saturday night and hold over for
            the Sunday slot.
          </p>
        </div>
        <h2 className="text-3xl lg:text-5xl text-center text-red-600">
          Season One (1957 - 1958)
        </h2>
        {data.season1.edges.map(({ node }) => {
          return (
            <div className="flex flex-col items-center text-center my-6 p-6 shadow-md border border-gray-300 rounded-md">
              <p className="text-xl text-red-600">
                {node.data.month} {node.data.day}, {node.data.year}
              </p>
              <h2 className="text-3xl lg:text-5xl leading-none text-gray-700">
                {node.data.artist}
              </h2>
              {node.data.supportArtist && (
                <h3 className="text-3xl text-gray-700 leading-none">
                  {node.data.supportArtist}
                </h3>
              )}
              <p className="text-lg text-gray-600">{node.data.price}</p>
              {node.data.img1 && <img src={node.data.img1[0].url} alt="" />}
              {node.data.img2 && <img src={node.data.img2[0].url} alt="" />}
            </div>
          )
        })}
        <h2 className="text-3xl lg:text-5xl text-center text-red-600">
          Season Two (1958 - 1959)
        </h2>
        {data.season2.edges.map(({ node }) => {
          return (
            <div className="flex flex-col items-center text-center my-6 p-6 shadow-md border border-gray-300 rounded-md">
              <p className="text-xl text-red-600">
                {node.data.month} {node.data.day}, {node.data.year}
              </p>
              <h2 className="text-3xl lg:text-5xl leading-none text-gray-700">
                {node.data.artist}
              </h2>
              {node.data.supportArtist && (
                <h3 className="text-3xl text-gray-700 leading-none">
                  {node.data.supportArtist}
                </h3>
              )}
              <p className="text-lg text-gray-600">{node.data.price}</p>
              {node.data.img1 && <img src={node.data.img1[0].url} alt="" />}
              {node.data.img2 && <img src={node.data.img2[0].url} alt="" />}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default DancelandBandstand
