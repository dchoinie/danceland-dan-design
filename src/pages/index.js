import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelectors from "../components/yearSelectors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Welcome />
    <YearSelectors />
  </Layout>
)

export default IndexPage
