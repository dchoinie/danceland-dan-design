import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import YearTitle from "../components/yearTitle"
import MonthTitle from "../components/monthTitle"
import StickyYear from "../components/stickyYear"
import ToTop from "../components/toTop"
import BackgroundImage from "gatsby-background-image"

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

const year1955 = ({ data }) => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <StickyYear year="1955" />
        <ToTop />
        <div className="max-w-screen-xl mx-auto">
          <YearTitle
            img={data.title1955.childImageSharp.fluid}
            summary="1955 was the year live rock and roll came to Cedar Rapids. The date was October 6th and the band was Bill Haley &amp; His Comets. That would signal the beginning of Danceland being the place for eastern Iowans to witness live rock and roll. Later that month Boyd Bennett &amp; His Rockets, became the second rock and rollers to make an appearance. Also gracing the Danceland stage in 1955 were the innovating orchestra of Sauter-Finegan, polka great “Whoopee” John Wilfahrt &amp; His Orchestra and Yankton South Dakota’s popular WNAX Bohemian Band. Major country acts include Pee Wee King &amp; His Golden West Cowboys and Bob Wills &amp; His Texas Playboys."
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
            <MonthTitle month="January" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="February" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
                    {node.data.artist}
                  </h2>
                  {node.data.price && <p>{node.data.price}</p>}
                  {node.data.orderId === 24 ? (
                    <div className="flex justify-center w-2/3">
                      <img
                        src={node.data.img1[0].url}
                        alt=""
                        className="w-1/4 mr-2"
                      />
                      <p className="w-3/4 self-center ml-2">
                        Jack Crosby Oatts was born in Dolliver, Iowa and earned
                        degrees from Coe College and Drake University. While
                        serving in the Navy during WWII he attended the Navy
                        School of Music and was a member of the Armed Forces
                        Broadcast Band in England. He started his professional
                        music career arranging music for Lawrence Welk. He
                        formed the Jack Oatts Orchestra and worked out of the
                        Des Moines area. Jack was passionate about music
                        education and taught music at area high schools Earlham
                        and Jefferson. He has been recognized as the “Father of
                        Jazz Education” in the state of Iowa. His son, Dick
                        Oatts is a famous jazz saxophonist who played with Flim
                        &amp; the BB’s among others.
                      </p>
                    </div>
                  ) : (
                    <>
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
                                {node.data.audio1title} -{" "}
                                {node.data.audio1artist}
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
                                {node.data.audio2title} -{" "}
                                {node.data.audio2artist}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
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
                  <p className="text-xl text-red-600">
                    {node.data.day && (
                      <>
                        {node.data.month} {node.data.day} / {node.data.weekday}
                      </>
                    )}
                  </p>
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="April" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="May" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="June" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="July" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="August" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="September" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="October" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="November" year="1955" />
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
                  <h2 className="text-3xl lg:text-5xl leading-none text-gray-700 flex text-center">
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
            <MonthTitle month="December" year="1955" />
            {data.december.edges.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="flex flex-col items-center shadow-md rounded-md border border-gray-300 max-w-screen-xl mx-auto my-6 p-6 bg-white"
                >
                  {node.data.artist && (
                    <>
                      <p className="text-xl text-red-600">
                        {node.data.day && (
                          <>
                            {node.data.month} {node.data.day} /{" "}
                            {node.data.weekday}
                          </>
                        )}
                      </p>
                      <h2 className="text-5xl leading-none text-gray-700 flex text-center">
                        {node.data.artist}
                      </h2>
                    </>
                  )}
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
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default year1955
