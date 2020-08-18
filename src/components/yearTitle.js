import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default class yearHeader extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex flex-col lg:flex-row lg:p-6 mb-6 lg:mb-0 bg-white">
        <div className="flex w-full lg:w-1/2 lg:pr-4">
          <Img fluid={this.props.img} className="w-full" />
        </div>
        <div className="flex w-full lg:w-1/2 lg:pl-4">
          <p className="self-center text-gray-700 text-xl">
            {this.props.summary}
          </p>
        </div>
      </div>
    )
  }
}
