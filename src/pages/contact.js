import React from "react"
import Layout from "../components/layout"
import { FaAngleRight } from "react-icons/fa"

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex w-full my-12">
          <div className="flex flex-col w-1/2 lg:mr-6">
            <h2 className="text-5xl leading-none tracking-tight mb-2">
              Thanks for visiting the Danceland website!
            </h2>
            <p className="mb-2 text-lg">
              My mission is to accurately document the history of this legendary
              venue.
            </p>
            <p className="text-lg">
              Any additions, corrections or comments are welcome. Feel free to
              contact us.
            </p>
          </div>
          <div className="flex w-1/2 lg:ml-6">
            <form
              method="POST"
              data-netlify="true"
              name="contact"
              className="flex flex-col w-full"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="firstName" className="hidden"></label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="p-4 border border-gray-300 shadow-md text-lg rounded-md mb-2"
                required
              />
              <label htmlFor="lastName" className="hidden"></label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="p-4 border border-gray-300 shadow-md text-lg rounded-md mb-2"
                required
              />
              <label htmlFor="email" className="hidden"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="p-4 border border-gray-300 shadow-md text-lg rounded-md mb-2"
                required
              />
              <label htmlFor="message" className="hidden"></label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="p-4 border border-gray-300 shadow-md text-lg rounded-md mb-2"
              ></textarea>
              <label htmlFor="fileUpload" className="hidden"></label>
              <input
                type="file"
                name="fileUpload"
                id="fileUpload"
                className="p-4 border border-gray-300 shadow-md text-lg rounded-md mb-2"
                multiple
              />
              <button
                type="submit"
                className="flex self-start bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xl"
              >
                Submit <FaAngleRight className="self-center ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
