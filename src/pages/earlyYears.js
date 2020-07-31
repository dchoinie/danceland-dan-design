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
  `E4J1WYO56U`,
  `91e29ad000a7f0d3f8144b749935edfd`
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
`

class EarlyYears extends Component {
  render() {
    return (
      <Layout>
        <div>
          <InstantSearch indexName="sortByOrderId" searchClient={searchClient}>
            <div className="flex flex-col items-center py-12 bg-red-600">
              <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl text-center pb-6 text-white">
                  Explore Danceland acts between the years 1926 - 1954. Search
                  by artist name or date.
                </h2>
              </div>
              <SearchBox />
            </div>
            <Configure hitsPerPage={616} />
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
    <div className="my-6">
      <div className="flex flex-col justify-between h-full items-center rounded-md my-2 mx-auto p-6">
        <p className="text-xl text-red-600">{props.hit.data.fullDate}</p>
        <h2 className="text-6xl text-gray-800 flex text-center geist">
          {props.hit.data.artist}
        </h2>
        {props.hit.data.img1 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img1[0].url} alt="" className="w-2/3" />
          </div>
        )}
        {props.hit.data.img2 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img2[0].url} alt="" className="w-2/3" />
          </div>
        )}
        {props.hit.data.img3 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img3[0].url} alt="" className="w-2/3" />
          </div>
        )}
        {props.hit.data.img4 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img4[0].url} alt="" className="w-2/3" />
          </div>
        )}
        {props.hit.data.img5 && (
          <div className="flex justify-center w-full">
            <img src={props.hit.data.img5[0].url} alt="" className="w-2/3" />
          </div>
        )}
      </div>
      <hr className="style-eight" />
    </div>
  )
}

export default EarlyYears
