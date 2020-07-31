import React from "react"
import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"
import Texture from "../images/textures/dust_scratches.png"
import Hero from "../components/hero"
import Welcome from "../components/welcome"
import NewWelcome from "../components/newWelcome"
import YearSelectors from "../components/yearSelectors"
import PostersHome from "../components/postersHome"
import Bandstand from "../components/bandstand"
import About from "../components/about"
import RetroHero from "../components/retroHero"

const IndexPage = () => (
  <div style={{ backgroundImage: `url(${Texture})` }}>
    <SEO title="Home" />
    <HomeLayout>
      <RetroHero />
      <NewWelcome />
      <YearSelectors />
      <About />
      <PostersHome />
      <Bandstand />
    </HomeLayout>
  </div>
)

export default IndexPage
