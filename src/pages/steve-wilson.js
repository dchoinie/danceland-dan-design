import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SteveWilson = () => {
  const data = useStaticQuery(graphql`
    {
      steve: file(relativePath: { eq: "steve.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            src
            srcSet
            srcSetWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center mb-6 w-1/3 mx-auto">
            <Img fluid={data.steve.childImageSharp.fluid} className="w-full" />
          </div>
          <div className="flex flex-col w-full text-lg">
            <p className="mb-6">
              Steve Wilson was born and raised in Cedar Rapids, Iowa. He was a
              founding member of the band The Bushmen and spent many nights
              hanging out at Danceland Ballroom. Between concerts and spending
              his weekly allowance on the latest records at Hiltbrunner’s music
              store, he developed a lifetime love for music and a solid
              knowledge of rock and roll.
            </p>
            <p className="mb-6">
              He spent most of his adult life in the music business. Starting in
              1976 with record distributor Pickwick International in Minneapolis
              where he served a sales rep handling the record departments for
              the Dayton’s Department store chain.
            </p>
            <p className="mb-6">
              He started at K-tel International in 1985 and became Vice
              President of A &amp; R. While there he compiled and produced
              hundreds of releases for the retail and TV markets. Notable
              packages include “Southern Fried Rock”, “Son of Super Bad”, “Goofy
              Greats”, “TV Stars Sing”, “Peaceful Easy Feeling”, “Those
              Wonderful Instrumentals”, “Biker Rock”, “50’s Sock Hop”, “Get Up
              And Disco”, “Battle Of The Bands” and “Today’s Hit Country” (#24
              on the Billboard Country Album chart). He oversaw the reissue of
              the Marshall Tucker Band’s first eight albums and produced their
              compilation discs “The Best of The Marshall Tucker Band: The
              Capricorn Years” and “Country Tucker”. He supplied the track
              listing for the Platinum selling “101 Greatest Country Hits”
              infomercial starring Eddie Rabbitt.
            </p>
            <p className="mb-6">
              At K-tel he reactivated the Era label and produced or reissued
              releases by Jan &amp; Dean, John Kay &amp; Steppenwolf, Bobby Vee
              &amp; The Shadows, Fever Tree, Gogi Grant, Mink Deville, Dorsey
              Burnette and Gypsy. He also produced the critically acclaimed 4 CD
              box set “The Brill Building Sound”.
            </p>
            <p className="mb-6">
              In 1996 Wilson left K-tel to join a similar company called Simitar
              Entertainment. There he created the best-selling compilations
              “Disco Divas”, “Music To Shag By”, “Blues Next”, “Outlaw Country”,
              “Original Players Of Love”, and produced “Best of’s” by The
              Castaways, The Fendermen and Gary Toms Empire. He also produced
              the highly lauded “Big Hits of Mid-America: The Soma Records
              Story”.
            </p>
            <p className="mb-6">
              In 1999 Wilson accepted an offer to be Director of the jazz/blues
              label Cannonball Records. During his tenure there he signed or
              oversaw releases by Mick Taylor (ex-Rolling Stone), James Harman,
              Alberta Adams, Charles Walker among others. In 2001 Cannonball
              releases were nominated for five W.C. Handy Awards.
            </p>
            <p className="mb-6">
              2001 Wilson returned to K-tel were he still works overseeing the
              K-tel music catalog and assisting in licensing music to movies, TV
              shows and commercials.
            </p>
            <p className="mb-6">
              Steve Wilson was inducted into the Iowa Music Association’s Rock
              ‘n’ Roll Hall of Fame in 2006.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SteveWilson
