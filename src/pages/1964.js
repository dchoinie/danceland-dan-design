import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import Texture from "../images/textures/vintage_speckles.png"

export const query1964 = graphql`
  {
    title1964: file(relativePath: { eq: "yearTitles/1964.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "January" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    february: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "February" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    march: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "March" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    april: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "April" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    may: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "May" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    june: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "June" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    july: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "July" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    august: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "August" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    september: allAirtable(
      filter: {
        table: { eq: "data1964" }
        data: { month: { eq: "September" } }
      }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    october: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "October" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    november: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "November" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
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
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
    december: allAirtable(
      filter: { table: { eq: "data1964" }, data: { month: { eq: "December" } } }
      sort: { fields: data___orderId }
    ) {
      edges {
        node {
          id
          data {
            artist
            fullDate
            img1 {
              url
            }
            img2 {
              url
            }
            img3 {
              url
            }
            month
            orderId
            price
            weekday
            year
          }
        }
      }
    }
  }
`

const year1964 = ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1964.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1964 include - Jan &amp; Dean, The Ronettes, Chuck Berry, Roy Orbison, Chad &amp; Jeremy, Dee Dee Sharp, The Everly Brothers, Roger Miller, The Crystals, Dale &amp; Grace, Bobby Vee, The Astronauts, Nino Tempo &amp; April Stevens, Bobby Vinton, Jerry Lee Lewis, Brian Hyland, The Rip Chords, Terry Stafford, Bobby Goldsboro, The Hondells, Conway Twitty, The Champs, Lonnie Mack, Johnny &amp; The Hurricanes, The Fabulous Flippers, Ronny &amp; The Daytonas, The Trashmen, Gene Simmons, The Marketts, Jimmy Clanton, Troy Shondell, Myron Lee &amp; The Caddies, Bill Black’s Combo, The Rivieras, Buddy Knox"
          />
          <MonthTitle month="January" year="1964" />
          {data.january.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="February" year="1964" />
          {data.february.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="March" year="1964" />
          {data.march.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="April" year="1964" />
          {data.april.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="May" year="1964" />
          {data.may.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="June" year="1964" />
          {data.june.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="July" year="1964" />
          {data.july.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="August" year="1964" />
          {data.august.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="September" year="1964" />
          {data.september.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="October" year="1964" />
          {data.october.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="November" year="1964" />
          {data.november.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="December" year="1964" />
          {data.december.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-main-yellow underline">
                  {node.data.fullDate}
                </p>
                <h2 className="text-5xl geist text-gray-700 flex text-center">
                  {node.data.artist}
                  {node.data.price && (
                    <span className="text-xl text-dark-orange self-center mx-2">
                      | {node.data.price}
                    </span>
                  )}
                </h2>
                {node.data.img1 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img2 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img2[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img3 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img3[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default year1964
