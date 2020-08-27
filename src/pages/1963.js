import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"
import ToTop from "../components/toTop"

export const query1963 = graphql`
  {
    title1963: file(relativePath: { eq: "yearTitles/1963.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "January" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    february: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "February" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    march: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "March" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    april: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "April" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    may: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "May" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    june: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "June" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    july: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "July" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    august: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "August" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    september: allAirtable(
      filter: {
        table: { eq: "data1963" }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    october: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "October" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    november: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "November" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
          }
        }
      }
    }
    december: allAirtable(
      filter: { table: { eq: "data1963" }, data: { month: { eq: "December" } } }
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
            month
            orderId
            price
            weekday
            year
            day
            audioBetween2and3 {
              url
            }
            audioBetween2and3title
            audioBetween2and3artist
            audioBetween2and3two {
              url
            }
            audioBetween2and3twotitle
            audioBetween2and3twoartist
            audioBetween3and4 {
              url
            }
            audioBetween3and4title
            audioBetween3and4artist
            audioBetween4and5 {
              url
            }
            audioBetween4and5title
            audioBetween4and5artist
            audioBetween5and6 {
              url
            }
            audioBetween5and6title
            audioBetween5and6artist
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

const year1963 = ({ data }) => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <StickyYear year="1963" />
        <ToTop />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1963.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1963 include - The Beach Boys, 4 Seasons, Chubby Checker, Conway Twitty, Dion, Roy Orbison, Little Peggy March, The Fendermen, The Ventures, Freddy Cannon, Jerry Lee Lewis, The Everly Brothers, Sandy Nelson, Bobby Vinton, Pastel Six, Dick &amp; Dee Dee, Johnny Tillotson, Paul &amp; Paula, Crickets, Timi Yuro, The Kingsmen, Tommy Roe, Jimmy Gilmer &amp; The Fireballs, Brian Hyland, Lou Christie, Jay &amp; The Americans, Bill Black’s Combo, Joey Dee &amp; The Starliters, Johnny Cymbal, Steve Alaimo, Johnny &amp; The Hurricanes, Myron Lee &amp; The Caddies, Charlie Russo, The Velaires, Wanda Jackson, Burch Ray &amp; The Walkers, Lonnie Mack, The Champs, Little Jimmy Dickens, The Strangers, Six Fat Dutchmen, George Hamilton IV"
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
            <MonthTitle month="January" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="February" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="March" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="April" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="May" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="June" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="July" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="August" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="September" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="October" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="November" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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
            <MonthTitle month="December" year="1963" />
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
                  <div className="flex flex-col lg:flex-row">
                    {node.data.audioBetween2and3 && (
                      <div className="flex-col lg:mr-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3title} -{" "}
                            {node.data.audioBetween2and3artist}
                          </p>
                        </div>
                      </div>
                    )}
                    {node.data.audioBetween2and3two && (
                      <div className="flex-col lg:ml-6">
                        <div className="flex w-full justify-center mt-3">
                          <audio
                            src={node.data.audioBetween2and3two[0].url}
                            controls
                            controlsList="nodownload"
                            preload="true"
                          ></audio>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-gray-700 text-lg text-center">
                            {node.data.audioBetween2and3twotitle} -{" "}
                            {node.data.audioBetween2and3twoartist}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {node.data.img3 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img3[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween3and4 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween3and4[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween3and4title} -{" "}
                          {node.data.audioBetween3and4artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img4 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img4[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween4and5 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween4and5[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween4and5title} -{" "}
                          {node.data.audioBetween4and5artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img5 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img5[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.audioBetween5and6 && (
                    <>
                      <div className="flex w-full justify-center mt-3">
                        <audio
                          src={node.data.audioBetween5and6[0].url}
                          controls
                          controlsList="nodownload"
                          preload="true"
                        ></audio>
                      </div>
                      <div className="flex">
                        <p className="text-gray-700 text-lg">
                          {node.data.audioBetween5and6title} -{" "}
                          {node.data.audioBetween5and6artist}
                        </p>
                      </div>
                    </>
                  )}
                  {node.data.img6 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img6[0].url}
                        alt=""
                        className="w-2/3"
                      />
                    </div>
                  )}
                  {node.data.img7 && (
                    <div className="flex justify-center w-full">
                      <img
                        src={node.data.img7[0].url}
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

export default year1963
