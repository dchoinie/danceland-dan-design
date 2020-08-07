import React from "react"
import Layout from "../components/layout"

const LocalBands = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto my-12 px-6 lg:px-0">
        <div className="flex">
          <ul className="flex flex-col items-center w-full text-3xl lg:text-5xl text-red-600 leading-none text-center">
            <li className="mb-6">Dale Thomas &amp; The Bandera Boys</li>
            <li className="my-6">Eddie Randall &amp; The Downbeats</li>
            <li className="my-6">The Rock 'N Flames</li>
            <li className="my-6">Al &amp; The Untouchables</li>
            <li className="my-6">The Escorts</li>
            <li className="my-6">The Legends</li>
            <li className="my-6">The Saints</li>
            <li className="my-6">Al's Untouchables</li>
            <li className="my-6">The Stompers</li>
            <li className="my-6">The Patriots</li>
            <li className="my-6">The Prophets / Linn County</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default LocalBands
