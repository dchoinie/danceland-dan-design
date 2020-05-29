import React from "react"
import YearSelector from "../components/yearSelector"
import Texture from "../images/textures/vintage_speckles.png"

const YearSelectors = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Texture})`,
      }}
    >
      <div className="max-w-screen-xl m-auto py-24">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-6xl geist leading-none text-gray-800">
            Search By Year
          </h2>
          <div className="w-1/5 border-t-2 border-dark-orange my-2"></div>
          <p className="text-gray-600 max-w-lg mx-auto text-center">
            Browse through the history of Danceland with artists, dates, prices,
            images and most of all...memories.
          </p>
        </div>
        <div className="grid-cols-2 md:grid-col-3 lg:grid grid-cols-7 gap-6">
          <YearSelector year="1955" to="1955" />
          <YearSelector year="1956" to="1956" />
          <YearSelector year="1957" to="1957" />
          <YearSelector year="1958" to="1958" />
          <YearSelector year="1959" to="1959" />
          <YearSelector year="1960" to="1960" />
          <YearSelector year="1961" to="1961" />
          <YearSelector year="1962" to="1962" />
          <YearSelector year="1963" to="1963" />
          <YearSelector year="1964" to="1964" />
          <YearSelector year="1965" to="1965" />
          <YearSelector year="1966" to="1966" />
          <YearSelector year="1967" to="1967" />
          <YearSelector year="1968" to="1968" />
        </div>
      </div>
    </div>
  )
}

export default YearSelectors
