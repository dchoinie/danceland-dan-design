import React from "react"
import Layout from "../components/layout"

const Managers = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-12 px-6 lg:px-0">
        <div className="flex">
          <ul className="flex flex-col items-center w-full text-3xl lg:text-5xl text-red-600 leading-none">
            <li className="mb-6">Frank A. Brookhiser 1926-1939</li>
            <li className="my-6">W.H. Wenkstern 1939-1956</li>
            <li className="mt-6">Darlowe Oleson / Bernie Storck 1956-1968</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Managers
