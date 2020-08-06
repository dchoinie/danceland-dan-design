import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"

export const query1960 = graphql`
  {
    title1960: file(relativePath: { eq: "yearTitles/1960.jpg" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1960" }, data: { month: { eq: "January" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "February" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "March" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "April" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "May" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "June" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "July" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "August" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
        table: { eq: "data1960" }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "October" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "November" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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
      filter: { table: { eq: "data1960" }, data: { month: { eq: "December" } } }
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
            img13 {
              url
            }
            img14 {
              url
            }
            img15 {
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

const year1960 = ({ data }) => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <StickyYear year="1960" />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1960.childImageSharp.fluid}
            summary="National acts that played at Danceland in 1960 include - Johnny Cash, Bobby Vee, Frankie Ford, Bobby Rydell, Carl Mann, The Four Preps, Jimmy Clanton, Johnny Burnette, Brian Hyland, Wanda Jackson, Conway Twitty, The Fendermen, Gene Vincent, Danny &amp; The Juniors, Jack Scott, Johnny Tillotson, Freddy Cannon, Buddy Knox, Johnny Preston, Dicky Doo &amp; The Don’ts, The Fireballs, Bobby Helms, Johnny &amp; The Hurricanes, The Skyliners, Carl Dobkins, Jr., Donnie Brooks, Johnny Ferguson, The Hollywood Argyles, Ray Smith, The Champs, Harold Dorman, The Crests, Rod Lauren, Gary Stites, Johnny Restivo, Nick DeMatteo, Dick Caruso, Danny Valentino, Johnny McKay, Larry Ellis, Skip &amp; Flip, Johnny Ferguson, Gary Miles, The Big Beats, Jim Reeves, Big Tiny Little, “Whoopee” John Wilfahrt &amp; His Orchestra, Don Glasser &amp; His Orchestra, Buddy Morrow, Sammy Stevens &amp; His Orchestra, Smokey Stover, Russ Carlyle &amp; His Orchestra, Ralph Zarnow &amp; His Orchestra"
          />
          <MonthTitle month="January" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="February" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="March" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="April" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="May" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="June" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="July" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="August" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="September" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="October" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="November" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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
          <MonthTitle month="December" year="1960" />
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
                {node.data.img13 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img13[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img14 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img14[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {node.data.img15 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img15[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )}
                {/* {node.data.img16 && (
                  <div className="flex justify-center w-full">
                    <img
                      src={node.data.img16[0].url}
                      alt=""
                      className="w-2/3"
                    />
                  </div>
                )} */}
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

export default year1960
