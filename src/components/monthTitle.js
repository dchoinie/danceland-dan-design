import React, { Component } from "react"
import PropTypes from "prop-types"

export default class MonthHeader extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex bg-red-600 w-full justify-center py-2 shadow-md">
        <h2 className="text-white text-3xl lg:text-4xl">
          {this.props.month} {this.props.year}
        </h2>
      </div>
    )
  }
}
