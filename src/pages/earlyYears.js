import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Texture from "../images/textures/vintage_speckles.png"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/algolia.css"

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

class EarlyYears extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div className="my-24">
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
      {props.hit.data.img1 && (
        <div>
          <img src={props.hit.data.img1[0].url} alt="" />
        </div>
      )}
    </div>
  )
}

export default EarlyYears
