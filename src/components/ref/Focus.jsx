import React, { Component } from 'react'
import Input from './Input'

class Focus extends Component {  
    constructor(){
        super() 
        this.ref=React.createRef() 
    }  

    
    handler=()=>{
        this.ref.current.focusInput()
    }

  render() {
    return (
      <div>
         <Input  ref={this.ref} />
         <button onClick={this.handler}> focusButton </button>
      </div>
    )
  }
}

export default Focus
