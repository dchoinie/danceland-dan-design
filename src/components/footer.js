import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  return (
    <div className="" style={{ background: "rgba(26, 26, 26, 1)" }}>
      <div className="flex justify-between max-w-screen-xl mx-auto py-12 text-lg">
        <div className="flex">
          <ul className="flex flex-col">
            <li className="text-white">Navigate</li>
            <li className="text-gray-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/">Bio</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/earlyYears">Early Years</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/posters">Posters</Link>
            </li>
            <li className="text-gray-500">
              <Link to="danceland-bandstand">Danceland Bandstand</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/managers">Manager</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/local-bands">Local Bands</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-gray-500">
          <p className="text-white">Search By Year</p>
          <div className="flex w-full justify-between">
            <ul className="flex flex-col">
              <li>
                <Link to="/1955">1955</Link>
              </li>
              <li>
                <Link to="/1956">1956</Link>
              </li>
              <li>
                <Link to="/1957">1957</Link>
              </li>
              <li>
                <Link to="/1958">1958</Link>
              </li>
              <li>
                <Link to="/1959">1959</Link>
              </li>
              <li>
                <Link to="/1960">1960</Link>
              </li>
              <li>
                <Link to="/1961">1961</Link>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <Link to="/1962">1962</Link>
              </li>
              <li>
                <Link to="/1963">1963</Link>
              </li>
              <li>
                <Link to="/1964">1964</Link>
              </li>
              <li>
                <Link to="/1965">1965</Link>
              </li>
              <li>
                <Link to="/1966">1966</Link>
              </li>
              <li>
                <Link to="/1967">1967</Link>
              </li>
              <li>
                <Link to="/1968">1968</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <ul className="flex flex-col">
            <li className="text-white">Legal</li>
            <li className="text-gray-500">Privacy Policy</li>
            <li className="text-gray-500">Terms &amp; Conditions</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center text-gray-500 max-w-screen-xl mx-auto border-t border-gray-500 py-4">
        <p>© {new Date().getFullYear()} Steve Wilson</p>
      </div>
    </div>
  )
}

export default Footer
