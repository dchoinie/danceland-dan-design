import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"

export const query1967 = graphql`
  {
    title1967: file(relativePath: { eq: "yearTitles/1967.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "January" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    february: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "February" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    march: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "March" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    april: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "April" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
            video
          }
        }
      }
    }
    may: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "May" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    june: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "June" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    july: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "July" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    august: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "August" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    september: allAirtable(
      filter: {
        table: { eq: "data1967" }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    october: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "October" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    november: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "November" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    december: allAirtable(
      filter: { table: { eq: "data1967" }, data: { month: { eq: "December" } } }
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
            img5 {
              url
            }
            img6 {
              url
            }
            img7 {
              url
            }
            img8 {
              url
            }
            img9 {
              url
            }
            img10 {
              url
            }
            img11 {
              url
            }
            img12 {
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
  }
`

const year1967 = ({ data }) => {
  return (
    <Layout>
      <div>
        <StickyYear year="1967" />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1967.childImageSharp.fluid}
            summary="When it was becoming apparent Danceland was going to be a victim of an Urban Renewal project things started to go downhill, There were a few national bands booked for 1967 but they stopped pursuing any addition name acts, They would rely on an increasing number of local bands to carry on. Danceland was no longer running ads in the Cedar Rapids Gazette so it is unknown who played after August (if anyone). This was the beginning of the end. The known national acts that played at Danceland in 1967 include - The Music Machine, Sam The Sham &amp; The Pharaohs, The Cryan Shames, The Casinos, The Left Banke, The Fabulous Flippers, Pete Klint Quintet"
          />
          <MonthTitle month="January" year="1967" />
          {data.january.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="February" year="1967" />
          {data.february.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="March" year="1967" />
          {data.march.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="April" year="1967" />
          {data.april.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.video && (
                  <>
                    <div
                      className="w-3/4"
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                      }}
                    >
                      <iframe
                        src={node.data.video}
                        frameborder="0"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                    <p className="text-gray-700 text-lg text-center">
                      Harlem Shuffle - The Fabulous Flippers
                    </p>
                  </>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="May" year="1967" />
          {data.may.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="June" year="1967" />
          {data.june.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="July" year="1967" />
          {data.july.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="August" year="1967" />
          {data.august.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="September" year="1967" />
          {data.september.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="October" year="1967" />
          {data.october.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="November" year="1967" />
          {data.november.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <MonthTitle month="December" year="1967" />
          {data.december.edges.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
              >
                <p className="text-xl text-red-600">
                  {node.data.month} {node.data.day} / {node.data.weekday}
                </p>
                <h2 className="text-5xl text-gray-700 flex text-center leading-none">
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
                {node.data.img4 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img4[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img5 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img5[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img6 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img6[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img7 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img7[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img8 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img8[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img9 && (
                  <div className="flex justify-center w-full">
                    <img src={node.data.img9[0].url} alt="" className="w-2/3" />
                  </div>
                )}
                {node.data.img10 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img10[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img11 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img11[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img12 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img12[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                <div className="flex">
                  {node.data.audio1 && (
                    <div className="flex-col mr-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio1[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio1title} - {node.data.audio1artist}
                        </p>
                      </div>
                    </div>
                  )}
                  {node.data.audio2 && (
                    <div className="flex-col ml-6">
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audio2[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-700 text-lg text-center">
                          {node.data.audio2title} - {node.data.audio2artist}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default year1967
