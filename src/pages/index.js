import React from "react"
import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelectors from "../components/yearSelectors"
import PostersHome from "../components/postersHome"
import Bandstand from "../components/bandstand"
import About from "../components/about"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Hero />
    <Welcome />
    <YearSelectors />
    <PostersHome />
    <Bandstand />
    <About />
  </HomeLayout>
)

export default IndexPage
