import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"
import ToTop from "../components/toTop"

export const query1957 = graphql`
  {
    title1957: file(relativePath: { eq: "yearTitles/1957.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1957" }, data: { month: { eq: "January" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "February" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "March" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "April" } } }
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    may: allAirtable(
      filter: { table: { eq: "data1957" }, data: { month: { eq: "May" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "June" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "July" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "August" } } }
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
        table: { eq: "data1957" }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "October" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "November" } } }
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
      filter: { table: { eq: "data1957" }, data: { month: { eq: "December" } } }
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
            audio2 {
              url
            }
            audio2title
            audio2artist
          }
        }
      }
    }
    background: file(relativePath: { eq: "backgroundNamesSmaller.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          src
          srcSet
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const year1957 = ({ data }) => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <StickyYear year="1957" />
        <ToTop />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1957.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1957 include - Johnny Cash, The Everly Brothers, Gene Vincent &amp; His Blue Caps, Jerry Lee Lewis, Buddy Knox, Jimmy Bowen, Bobby Helms, Wanda Jackson, Hank Thompson &amp; His Bravos Valley Boys, Porter Wagoner, Jim Reeves, Ray Price, Marty Robbins, Leroy Van Dyke, Leon McAuliffe &amp; His Cimarron Boys, Lee Emerson, Chuck Foster &amp; His Orchestra, Guy Lombardo &amp; His Orchestra, Don Glasser &amp; His Orchestra, Six Fat Dutchmen, “Whoopee” John Wilfahrt &amp; His Orchestra"
          />
        </div>
        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "repeat-y",
          }}
        >
          <div className="max-w-screen-xl mx-auto">
            <MonthTitle month="January" year="1957" />
            {data.january.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center leading-none">
                    {node.data.artist}
                  </h2>
                  {node.data.price && (
                    <p className="text-lg text-gray-600 self-center mx-2">
                      {node.data.price}
                    </p>
                  )}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="February" year="1957" />
            {data.february.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="March" year="1957" />
            {data.march.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="April" year="1957" />
            {data.april.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="May" year="1957" />
            {data.may.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="June" year="1957" />
            {data.june.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="July" year="1957" />
            {data.july.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="August" year="1957" />
            {data.august.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="September" year="1957" />
            {data.september.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="October" year="1957" />
            {data.october.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="November" year="1957" />
            {data.november.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
            <MonthTitle month="December" year="1957" />
            {data.december.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl oswald tracking-tighter uppercase leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.img1 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img2 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img2[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audio1 && (
                      <div className="flex-col lg:mr-6">
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
                      <div className="flex-col lg:ml-6">
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
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default year1957
