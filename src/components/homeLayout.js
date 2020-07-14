import React from "react"
import { Helmet } from "react-helmet"
import HomeHeader from "./retroHeader"
import Footer from "./footer"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
          integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8="
          crossorigin="anonymous"
        />
      </Helmet>
      <HomeHeader />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
