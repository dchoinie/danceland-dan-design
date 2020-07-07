import React from "react"
import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import YearSelectors from "../components/yearSelectors"
import PostersHome from "../components/postersHome"
import Bandstand from "../components/bandstand"
import About from "../components/about"
import RetroHeader from "../components/retroHeader"
import RetroHero from "../components/retroHero"

const IndexPage = () => (
  // <HomeLayout>
  <>
    <SEO title="Home" />
    <RetroHeader />
    {/* <Hero /> */}
    <RetroHero />
    <Welcome />
    <YearSelectors />
    <About />
    <PostersHome />
    <Bandstand />
  </>
  // </HomeLayout>
)

export default IndexPage
