import React, { Component } from 'react' 
import HigherOrder from './Hoc'

class CounterComp extends Component {  

  render() { 
    const {count, handler}= this.props
    return (
      <div>  
        {count} 
        <button onClick={handler}> Click  </button>   
      </div>
    )
  }
}

export default HigherOrder(CounterComp)
