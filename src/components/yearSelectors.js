import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import YearSelector from "../components/yearSelector"

const YearSelectors = () => {
  const data = useStaticQuery(graphql`
    {
      year1955: file(relativePath: { eq: "mobileYears/1955.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1956: file(relativePath: { eq: "mobileYears/1956.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1957: file(relativePath: { eq: "mobileYears/1957.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1958: file(relativePath: { eq: "mobileYears/1958.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1959: file(relativePath: { eq: "mobileYears/1959.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1960: file(relativePath: { eq: "mobileYears/1960.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1961: file(relativePath: { eq: "mobileYears/1961.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1962: file(relativePath: { eq: "mobileYears/1962.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1963: file(relativePath: { eq: "mobileYears/1963.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1964: file(relativePath: { eq: "mobileYears/1964.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1965: file(relativePath: { eq: "mobileYears/1965.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1966: file(relativePath: { eq: "mobileYears/1966.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1967: file(relativePath: { eq: "mobileYears/1967.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
      year1968: file(relativePath: { eq: "mobileYears/1968.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="px-6 lg:px-0 bg-transparent">
      <div className="max-w-screen-xl m-auto py-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl lg:text-6xl leading-none text-gray-800">
            Search By Year
          </h2>
          <div className="w-1/5 border-t-2 border-red-600 my-2"></div>
          <p className="text-gray-700 max-w-lg mx-auto text-center text-xl lg:text-2xl">
            Browse through the history of Danceland with artists, dates, prices,
            images and most of all...memories.
          </p>
        </div>
        <div className="flex flex-col lg:hidden">
          <Link to="/1955">
            <Img
              fluid={data.year1955.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1956">
            <Img
              fluid={data.year1956.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1957">
            <Img
              fluid={data.year1957.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1958">
            <Img
              fluid={data.year1958.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1959">
            <Img
              fluid={data.year1959.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1960">
            <Img
              fluid={data.year1960.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1961">
            <Img
              fluid={data.year1961.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1962">
            <Img
              fluid={data.year1962.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1963">
            <Img
              fluid={data.year1963.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1964">
            <Img
              fluid={data.year1964.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1965">
            <Img
              fluid={data.year1965.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1966">
            <Img
              fluid={data.year1966.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1967">
            <Img
              fluid={data.year1967.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
          <Link to="/1968">
            <Img
              fluid={data.year1968.childImageSharp.fluid}
              className="w-full"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <YearSelector year="1955" to="1955" />
            <YearSelector year="1956" to="1956" />
            <YearSelector year="1957" to="1957" />
          </div>
          <div className="flex justify-center">
            <YearSelector year="1958" to="1958" />
            <YearSelector year="1959" to="1959" />
            <YearSelector year="1960" to="1960" />
            <YearSelector year="1961" to="1961" />
          </div>
          <div className="flex justify-center">
            <YearSelector year="1962" to="1962" />
            <YearSelector year="1963" to="1963" />
            <YearSelector year="1964" to="1964" />
            <YearSelector year="1965" to="1965" />
          </div>
          <div className="flex justify-center">
            <YearSelector year="1966" to="1966" />
            <YearSelector year="1967" to="1967" />
            <YearSelector year="1968" to="1968" />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <hr className="style-eight my-6" />
      </div>
    </div>
  )
}

export default YearSelectors
