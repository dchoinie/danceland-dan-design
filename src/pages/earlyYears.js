import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  RefinementList,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/reset.css"
import Texture from "../images/textures/vintage_speckles.png"

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
          fullDate
          orderId
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
`

class EarlyYears extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div
        // style={{
        //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Texture})`,
        // }}
        >
          <div className="max-w-screen-xl mx-auto py-24">
            <InstantSearch
              indexName="sortByOrderId"
              searchClient={searchClient}
            >
              <div className="flex justify-center mb-12">
                <SearchBox />
              </div>
              <Configure hitsPerPage={227} />
              <Hits hitComponent={Hit} />
            </InstantSearch>
          </div>
        </div>
      </Layout>
    )
  }
}

const Hit = props => {
  return (
    <>
      <div className="flex flex-col justify-between h-full items-center rounded-md my-2 mx-auto p-6">
        <p className="text-xl text-gray-700 underline">
          {props.hit.data.fullDate}
        </p>
        <h2 className="text-5xl geist text-gray-800 flex text-center">
          {props.hit.data.artist}
        </h2>
        {props.hit.data.img1 && (
          <div className="flex justify-center w-full">
            <img
              src={props.hit.data.img1[0].url}
              alt=""
              className="w-2/3 shadow-md"
            />
          </div>
        )}
        {props.hit.data.img2 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img2[0].url} alt="" className="w-2/3" />
          </div>
        )}
      </div>
      <div className="border border-gray-300"></div>
    </>
  )
}

export default EarlyYears
