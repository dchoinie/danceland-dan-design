import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"

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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
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
            day
            audio1 {
              url
            }
            audio1title
            audio1artist
          }
        }
      }
    }
  }
`

const year1956 = ({ data }) => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <StickyYear year="1956" />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1956.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1956 include: Boyd Bennett &amp; His Rockets, Wanda Jackson, Faron Young, Webb Pierce, Marvin Rainwater, Porter Wagoner, Hank Thompson &amp; His Bravos Valley Boys, Red Sovine, Bill Wimberly &amp; His Country Rhythm Boys, Bobby Lord, Jimmy &amp; Johnny, Rusty Draper, Dick Mango &amp; His Orchestra, Ray Pearl &amp; His Musical Gems, Six Fat Dutchmen, “Whoopee” John Wilfahrt &amp; His Orchestra"
          />
          <MonthTitle month="January" year="1956" />
          {data.january.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-3xl lg:text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.audio1 && (
                  <>
                    <div className="flex w-full justify-center mt-3">
                      <audio
                        src={node.data.audio1[0].url}
                        controls
                        controlsList="nodownload"
                        preload="true"
                      ></audio>
                    </div>
                    <div className="flex">
                      <p className="text-gray-700 text-lg">
                        {node.data.audio1title} - {node.data.audio1artist}
                      </p>
                    </div>
                  </>
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
