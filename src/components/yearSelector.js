import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import SpinnerImg from "../components/spinnerImg"

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
        style={{ width: "200px" }}
      >
        <SpinnerImg
          spinnerClass={`${this.state.isHovered ? "rotate" : ""} w-full`}
        />
        <h2
          className={`absolute text-5xl ${
            this.state.isHovered ? "text-white" : "text-gray-400"
          }`}
        >
          {this.props.year}
        </h2>
      </Link>
    )
  }
}
