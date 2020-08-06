import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import MobileHeader from "./mobileHeader"
import Footer from "./footer"

const Layout = ({ children }) => {
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
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </>
  )
}

export default Layout
