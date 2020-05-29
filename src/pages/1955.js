import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import Texture from "../images/textures/vintage_speckles.png"

export const query1955 = graphql`
  {
    title1955: file(relativePath: { eq: "yearTitles/1955.png" }) {
      childImageSharp {
        fluid {
          srcSet
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    january: allAirtable(
      filter: { table: { eq: "data1955" }, data: { month: { eq: "January" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "February" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "March" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "April" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "May" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "June" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "July" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "August" } } }
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
        table: { eq: "data1955" }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "October" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "November" } } }
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
      filter: { table: { eq: "data1955" }, data: { month: { eq: "December" } } }
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
  }
`

const year1955 = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1955.childImageSharp.fluid}
            summary="1955 was the year live rock and roll came to Cedar Rapids. The date was October 6th and the band was Bill Haley &amp; His Comets. That would signal the beginning of Danceland being the place for eastern Iowans to witness live rock and roll. Later that month Boyd Bennett &amp; His Rockets, became the second rock and rollers to make an appearance. Also gracing the Danceland stage in 1955 were the innovating orchestra of Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra and Yankton South Dakota’s popular WNAX Bohemian Band. Major country acts include Pee Wee King &amp; His Golden West Cowboys and Bob Wills &amp; His Texas Playboys."
          />
          <MonthTitle month="January" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="February" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="March" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="April" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="May" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="June" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="July" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="August" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="September" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="October" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="November" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
                  </div>
                )}
              </div>
            )
          })}
          <MonthTitle month="December" year="1955" />
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
                  <div className="flex justify-center flex-wrap w-full">
                    <img src={node.data.img1[0].url} alt="" className="w-2/3" />
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

export default year1955