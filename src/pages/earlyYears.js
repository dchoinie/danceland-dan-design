import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/reset.css"

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_KEY
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
    return (
      <Layout>
        <div>
          <InstantSearch indexName="sortByOrderId" searchClient={searchClient}>
            <div className="flex flex-col items-center py-12 bg-gray-400">
              <h2 className="text-4xl max-w-2xl text-center pb-6 geist">
                Explore Danceland acts between the years <br />
                1926 - 1954. Search by artist name or date.
              </h2>
              <SearchBox />
            </div>
            <Configure hitsPerPage={326} />
            <div className="max-w-screen-xl mx-auto mt-12">
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
      <hr className="style-eight" />
    </>
  )
}

export default EarlyYears
