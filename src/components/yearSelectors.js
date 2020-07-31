import React from "react"
import YearSelector from "../components/yearSelector"
import Texture from "../images/textures/vintage_speckles.png"

const YearSelectors = () => {
  return (
    <div className="bg-transparent">
      <div className="max-w-screen-xl m-auto py-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-6xl leading-none text-gray-800">
            Search By Year
          </h2>
          <div className="w-1/5 border-t-2 border-red-600 my-2"></div>
          <p className="text-gray-700 max-w-lg mx-auto text-center text-2xl">
            Browse through the history of Danceland with artists, dates, prices,
            images and most of all...memories.
          </p>
        </div>
        <div className="flex justify-center">
          <YearSelector year="1955" to="1955" />
          <YearSelector year="1956" to="1956" />
          <YearSelector year="1957" to="1957" />
        </div>
        <div className="flex justify-center">
          <YearSelector year="1958" to="1958" />
          <YearSelector year="1959" to="1959" />
          <YearSelector year="1960" to="1960" />
          <YearSelector year="1961" to="1961" />
        </div>
        <div className="flex justify-center">
          <YearSelector year="1962" to="1962" />
          <YearSelector year="1963" to="1963" />
          <YearSelector year="1964" to="1964" />
          <YearSelector year="1965" to="1965" />
        </div>
        <div className="flex justify-center">
          <YearSelector year="1966" to="1966" />
          <YearSelector year="1967" to="1967" />
          <YearSelector year="1968" to="1968" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <hr className="style-eight my-6" />
      </div>
    </div>
  )
}

export default YearSelectors
