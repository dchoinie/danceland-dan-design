import React from "react"
import HomeHeader from "./homeHeader"
import Footer from "./footer"

const HomeLayout = ({ children }) => {
  return (
    <>
      <HomeHeader />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
