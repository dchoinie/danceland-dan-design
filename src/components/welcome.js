import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    {
      opening: file(relativePath: { eq: "homeImages/opening.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cbasie: file(relativePath: { eq: "homeImages/countbasie.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cberry: file(relativePath: { eq: "homeImages/cberry.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      everly: file(relativePath: { eq: "homeImages/everly.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      guesswho: file(relativePath: { eq: "homeImages/guesswho.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cash: file(relativePath: { eq: "homeImages/cash.jpg" }) {
        childImageSharp {
          fluid {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="flex mb-12">
          <div className="flex w-1/2 bg-maroon rounded shadow-md m-12">
            <Img
              fluid={data.opening.childImageSharp.fluid}
              className="w-full self-center transform translate-x-4 -translate-y-4 rounded"
            />
          </div>
          <div className="flex w-1/2">
            <p className="text-xl self-center text-gray-700 p-12">
              Welcome to the website that is dedicated to preserving the history
              of Danceland Ballroom in Cedar Rapids, Iowa. You can view the
              history from the grand opening in 1926 to its razing in 1968
              (urban renewal). The array of top acts that graced the Danceland
              stage through the years is impressive to say the least.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="flex w-1/2">
            <p className="text-xl self-center text-gray-700 m-12">
              The “Big Band” years saw the orchestras of Duke Ellington, Glenn
              Miller, Count Basie, Benny Goodman, Tommy Dorsey with Frank
              Sinatra, Louis Armstrong, Woody Herman, Gene Krupa, Les Brown with
              Doris Day, Lawrence Welk, Sammy Kaye, Jack Teagarden, Eddy Howard,
              Buddy Rich, Kay Kyser and Stan Kenton all swing by.
            </p>
          </div>
          <div className="flex w-1/2 bg-dark-orange rounded shadow-md m-12">
            <Img
              fluid={data.cbasie.childImageSharp.fluid}
              className="w-full self-center transform -translate-x-4 -translate-y-4 rounded"
            />
          </div>
        </div>
        <div className="flex mb-12">
          <div className="flex w-1/2 bg-light-orange rounded shadow-md m-12">
            <Img
              fluid={data.guesswho.childImageSharp.fluid}
              className="w-full self-center transform translate-x-4 -translate-y-4 rounded"
            />
          </div>
          <div className="flex w-1/2">
            <p className="text-xl text-gray-700 p-12 self-center">
              The rock &amp; roll era started in 1955 with the booking of Bill
              Haley &amp; the Comets. Soon followed by Chuck Berry, Jerry Lee
              Lewis, Carl Perkins, Gene Vincent &amp; The Blue Caps, Eddie
              Cochran, Del Shannon, The Everly Brothers. Neil Sedaka, Bobby
              Darin, 4 Seasons, Chubby Checker, Bobby Rydell, Duane Eddy, The
              Ventures, Wanda Jackson, Gene Pitney, Dion &amp; The Belmonts, Roy
              Orbison, Frankie Avalon, Brenda Lee, Jan &amp; Dean, Ray Stevens,
              Bobby Vee, The Guess Who, Jr. Walker &amp; The All Stars, The
              Turtles, Gary Lewis &amp; The Playboys, The Ronettes, The Beach
              Boys, Mitch Ryder &amp; The Detroit Wheels, The Music Machine, The
              Animals, The Hollies, The Yardbirds and many more.
            </p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="flex w-1/2">
            <p className="text-xl self-center text-gray-700 m-12">
              Not to forget the great country stars that includes Bob Wills
              &amp; His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens,
              Hank Thompson, Johnny Cash, Porter Wagoner, Marty Robbins, Don
              Gibson, Johnny Horton, Faron Young, Jim Reeves, Conway Twitty,
              Jimmy Dean and Roger Miller.
            </p>
          </div>
          <div className="flex w-1/2 bg-yellow rounded shadow-md m-12">
            <Img
              fluid={data.cash.childImageSharp.fluid}
              className="w-full self-center transform -translate-x-4 -translate-y-4 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center mb-12">
          <h2 className="text-6xl geist text-center">
            It’s all here - the national acts, the local talent, the hits, the
            misses – the memories. Check It Out!
          </h2>
          <p className="text-base solway text-center">
            <em>
              Special Thanks to Ann Duggan, Dennis Hertle, Tim Canfield, Dan
              Choiniere, Tate Preston, Kathy Wall
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
