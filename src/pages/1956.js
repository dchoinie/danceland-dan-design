import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import Texture from "../images/textures/vintage_speckles.png"

export const query1956 = graphql`
  {
    title1956: file(relativePath: { eq: "yearTitles/1956.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1956" }, data: { month: { eq: "January" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "February" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "March" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "April" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "May" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "June" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "July" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "August" } } }
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
        table: { eq: "data1956" }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "October" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "November" } } }
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
      filter: { table: { eq: "data1956" }, data: { month: { eq: "December" } } }
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

const year1956 = ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1956.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1956 include: Boyd Bennett & His Rockets, Wanda Jackson, Faron Young, Webb Pierce, Marvin Rainwater, Porter Wagoner, Hank Thompson & His Bravos Valley Boys, Red Sovine, Bill Wimberly & His Country Rhythm Boys, Bobby Lord, Jimmy & Johnny, Rusty Draper, Dick Mango & His Orchestra, Ray Pearl & His Musical Gems, Six Fat Dutchmen, “Whoopee” John Wilfahrt & His Orchestra"
          />
          <MonthTitle month="January" year="1956" />
          {data.january.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="February" year="1956" />
          {data.february.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="March" year="1956" />
          {data.march.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="April" year="1956" />
          {data.april.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="May" year="1956" />
          {data.may.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="June" year="1956" />
          {data.june.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="July" year="1956" />
          {data.july.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="August" year="1956" />
          {data.august.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="September" year="1956" />
          {data.september.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="October" year="1956" />
          {data.october.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="November" year="1956" />
          {data.november.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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
          <MonthTitle month="December" year="1956" />
          {data.december.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.fullDate} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-tight">
                  {node.data.artist}
                </h2>
                {node.data.price && (
                  <p className="text-lg text-gray-600 self-center mx-2">
                    {node.data.price}
                  </p>
                )}
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

export default year1956