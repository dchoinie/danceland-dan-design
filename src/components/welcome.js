import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Texture from "../images/textures/vintage_speckles.png"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    {
      opening: file(relativePath: { eq: "homeImages/opening.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cbasie: file(relativePath: { eq: "homeImages/countbasie.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cberry: file(relativePath: { eq: "homeImages/cberry.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      everly: file(relativePath: { eq: "homeImages/everly.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      guesswho: file(relativePath: { eq: "homeImages/guesswho.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      cash: file(relativePath: { eq: "homeImages/cash.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      rockCollage: file(relativePath: { eq: "collages/Collage4.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            srcSet
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      countryCollage: file(relativePath: { eq: "collages/Collage5.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
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
        <div className="flex">
          <div className="flex w-1/2 mr-4 p-12">
            <figure className="flex flex-col w-full text-xs">
              <div className="bg-main-green rounded shadow-md">
                <Img
                  fluid={data.opening.childImageSharp.fluid}
                  className="w-full self-center transform translate-x-4 -translate-y-4 rounded"
                />
              </div>
              <figcaption className="flex flex-col items-center text-gray-600">
                <p>Danceland Grand Opening</p>
                <p>August 31st, 1926</p>
              </figcaption>
            </figure>
          </div>
          <div className="flex w-1/2">
            <div className="text-xl self-center text-gray-700 p-12">
              <p>
                Welcome to the website that is dedicated to preserving the
                history of Danceland Ballroom in Cedar Rapids, Iowa. You can
                view the history from the grand opening in 1926 to its razing in
                1968 (urban renewal). The array of top acts that graced the
                Danceland stage through the years is impressive to say the
                least.
              </p>
              <div className="flex border-t-2 border-main-green w-1/2 my-4"></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2">
            <div className="text-xl self-center text-gray-700 p-12">
              <p>
                The “Big Band” years saw the orchestras of Duke Ellington, Glenn
                Miller, Count Basie, Benny Goodman, Tommy Dorsey with Frank
                Sinatra, Louis Armstrong, Woody Herman, Gene Krupa, Les Brown
                with Doris Day, Lawrence Welk, Sammy Kaye, Jack Teagarden, Eddy
                Howard, Buddy Rich, Kay Kyser and Stan Kenton all swing by.
              </p>
              <div className="flex border-t-2 border-main-brown w-1/2 my-4"></div>
            </div>
          </div>
          <div className="flex w-1/2 ml-4 p-12">
            <figure className="flex flex-col w-full text-xs">
              <div className="bg-main-brown rounded shadow-md">
                <Img
                  fluid={data.cbasie.childImageSharp.fluid}
                  className="w-full self-center transform -translate-x-4 -translate-y-4 rounded"
                />
              </div>
              <figcaption className="flex flex-col items-center text-gray-600">
                <p>Count Basie &amp; His Orchestra</p>
                <p>April 9th, 1945</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2 self-center mr-4 p-12">
            <figure className="flex w-full flex-col text-xs">
              <div className="bg-main-orange rounded shadow-md">
                <Img
                  fluid={data.rockCollage.childImageSharp.fluid}
                  className="w-full self-center transform translate-x-4 -translate-y-4 rounded"
                />
              </div>
              <figcaption className="flex flex-col w-2/3 mx-auto text-center items-center text-gray-600">
                <p>
                  The Animals, Four Seasons, Everly Brothers, Jerry Lee Lewis,
                  Roy Orbison, Beach Boys
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="flex w-1/2">
            <div className="text-xl text-gray-700 p-12 self-center">
              <p>
                The rock &amp; roll era started in 1955 with the booking of Bill
                Haley &amp; the Comets. Soon followed by Chuck Berry, Jerry Lee
                Lewis, Carl Perkins, Gene Vincent &amp; The Blue Caps, Eddie
                Cochran, Del Shannon, The Everly Brothers. Neil Sedaka, Bobby
                Darin, 4 Seasons, Chubby Checker, Bobby Rydell, Duane Eddy, The
                Ventures, Wanda Jackson, Gene Pitney, Dion &amp; The Belmonts,
                Roy Orbison, Frankie Avalon, Brenda Lee, Jan &amp; Dean, Ray
                Stevens, Bobby Vee, The Guess Who, Jr. Walker &amp; The All
                Stars, The Turtles, Gary Lewis &amp; The Playboys, The Ronettes,
                The Beach Boys, Mitch Ryder &amp; The Detroit Wheels, The Music
                Machine, The Animals, The Hollies, The Yardbirds and many more.
              </p>
              <div className="flex border-t-2 border-main-orange w-1/2 my-4"></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2">
            <div className="text-xl self-center text-gray-700 p-12">
              <p>
                Not to forget the great country stars that includes Bob Wills
                &amp; His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens,
                Hank Thompson, Johnny Cash, Porter Wagoner, Marty Robbins, Don
                Gibson, Johnny Horton, Faron Young, Jim Reeves, Conway Twitty,
                Jimmy Dean and Roger Miller.
              </p>
              <div className="flex border-t-2 border-main-yellow w-1/2 my-4"></div>
            </div>
          </div>
          <div className="flex w-1/2 ml-4 p-12">
            <figure className="flex flex-col w-full text-xs">
              <div className="bg-main-yellow rounded shadow-md">
                <Img
                  fluid={data.countryCollage.childImageSharp.fluid}
                  className="w-full self-center transform -translate-x-4 -translate-y-4 rounded"
                />
              </div>
              <figcaption className="flex flex-col w-2/3 mx-auto text-center items-center text-gray-600">
                <p>
                  Marty Robbins, Jimmy Dean, Johnny Cash, Jim Reeves, Buck
                  Owens, Kitty Wells
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <h2 className="text-6xl geist text-center text-gray-800">
            It’s all here - the national acts, the local talent, the hits, the
            misses – the memories. Check It Out!
          </h2>
          <p className="text-base solway text-center text-gray-600">
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
