import React, { Component } from 'react'
 import HigherOrder from './Hoc'



class Hover extends Component {  

  render() { 

    const {count, handler}= this.props
    return (
      <div>
          <h3 onMouseOver={handler}>  {count}</h3>
      </div>
    )
  }
}

export default HigherOrder(Hover)
