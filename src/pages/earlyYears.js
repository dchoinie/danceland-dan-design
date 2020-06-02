import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
  "E4J1WYO56U",
  "91e29ad000a7f0d3f8144b749935edfd"
)

export const earlyYearsQuery = graphql`
  {
    early: allAirtable(
      filter: { table: { eq: "earlyYears" } }
      sort: { fields: data___orderId }
    ) {
      nodes {
        id
        data {
          artist
          date(formatString: "yyyy")
          orderId
          img1 {
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
        }
      }
    }
  }
`

class EarlyYears extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div
          className="max-w-screen-xl mx-auto my-24"
          style={{ border: "1px solid red" }}
        >
          <h2 className="text-3xl">Search the Early Years</h2>
          <InstantSearch indexName="EarlyYears" searchClient={searchClient}>
            <div className="max-w-screen-xl mx-auto">
              <SearchBox />
              <Hits hitComponent={Hit} />
            </div>
          </InstantSearch>
        </div>
      </Layout>
    )
  }
}

const Hit = props => {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <h2 className="text-3xl geist text-center">{props.hit.data.artist}</h2>
      <p>{props.hit.data.fullDate}</p>
      {console.log(props.hit.data)}
      {/* {props.hit.data.img1 && (
        <div className="w-full">
          <Img
            fluid={props.hit.data.img1.localFiles[0].childImageSharp.fluid}
            className="w-full"
          />
        </div>
      )} */}
    </div>
  )
}

export default EarlyYears
