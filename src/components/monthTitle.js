import React, { Component } from "react"
import PropTypes from "prop-types"

export default class MonthHeader extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex bg-gray-300 w-full justify-center py-2 shadow-md">
        <h2 className="text-gray-700 text-3xl lg:text-5xl uppercase geist">
          {this.props.month} {this.props.year}
        </h2>
      </div>
    )
  }
}
