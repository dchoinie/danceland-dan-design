import React, { Component } from "react"
import PropTypes from "prop-types"

export default class MonthHeader extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="flex bg-black w-full justify-center py-2">
        <h2 className="text-white text-3xl lg:text-5xl uppercase geist">
          {this.props.month}, {this.props.year}
        </h2>
      </div>
    )
  }
}
