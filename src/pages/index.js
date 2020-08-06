import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MobileHero from "../components/mobileHero"
import Welcome from "../components/welcome"
import YearSelectors from "../components/yearSelectors"
import Posters from "../components/posters"
import Bandstand from "../components/bandstand"
import About from "../components/about"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Hero />
      <MobileHero />
      <Welcome />
      <YearSelectors />
      <About />
      <Posters />
      <Bandstand />
    </Layout>
  </>
)

export default IndexPage
