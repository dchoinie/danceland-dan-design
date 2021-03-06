require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const EarlyYearsQuery = `
{
  earlyYears: allAirtable(filter: {table: {eq: "earlyYears"}}, sort: {fields: data___orderId}) {
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

const queries = [
  {
    query: EarlyYearsQuery,
    transformer: ({ data }) => data.earlyYears.nodes,
    indexName: "EarlyYears",
  },
]

module.exports = {
  siteMetadata: {
    title: `Danceland`,
    description: `The History Of A Midwest Ballroom`,
    author: `Dan Choiniere`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Solway`,
          },
          {
            family: `Oswald`,
          },
          {
            family: `Abel`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `posters`,
            mapping: { poster: `fileNode` },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `earlyYears`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1955`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1956`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1957`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1958`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1959`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1960`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1961`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1962`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1963`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1964`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1965`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1966`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1967`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `data1968`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `bandstand`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-58225315-9",
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    },
  ],
}
