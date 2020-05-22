import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Record from "../images/spinner.png"

export default class YearSelector extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false,
    }
    this.handleHover = this.handleHover.bind(this)
  }

  static propTypes = {
    year: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered,
    }))
  }

  render() {
    return (
      <Link
        to={this.props.to}
        className="flex flex-col items-center justify-center transform hover:scale-110 transition duration-500 ease-in-out"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <img
          src={Record}
          alt=""
          className={`${this.state.isHovered ? "rotate" : ""}`}
        />
        <h2 className="absolute text-white text-6xl geist">
          {this.props.year}
        </h2>
      </Link>
    )
  }
}
