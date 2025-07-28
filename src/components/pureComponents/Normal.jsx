import React, { Component } from 'react'

class Normal extends Component {
  render() { 
    console.log("normal comp is renderd ")
    return (
      <div>
         NormalComp {this.props.singer}
      </div>
    )
  }
}

export default Normal
