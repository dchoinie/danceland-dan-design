import React, { Component } from "react"
import PropTypes from "prop-types"

export class StickyYear extends Component {
  static propTypes = {
    year: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="fixed" style={{ bottom: 10, right: 10 }}>
        <h6 className="text-xl oswald">{this.props.year}</h6>
      </div>
    )
  }
}

export default StickyYear
