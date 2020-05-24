import React from "react"
import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelectors from "../components/yearSelectors"
import PostersHome from "../components/postersHome"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Hero />
    <Welcome />
    <YearSelectors />
    <PostersHome />
  </HomeLayout>
)

export default IndexPage
