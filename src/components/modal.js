import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div style={this.style()}>
      {/* {this.props.scores} */}
      </div>
    )
  }

  style() {
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgb(255, 204, 204)',
      zIndex: 1
    }
  }
}
