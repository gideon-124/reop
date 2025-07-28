import React, { Component, PureComponent } from 'react'

class Pure extends PureComponent { 
  render() { 
    console.log("pure comp is renderd ")
    return (
      <div>
          
          pureComponent {this.props.singer}
      </div>
    )
  }
}

export default Pure    



// shallow     
// technique for opti checks whetheer change in state and props 
// primitive   ===  
// complex     arrays , objects    
// let arr1=[1,2,3]               obj1={ key1:value; key2:value}
// let arr2=[1,2,3]               obj2={key1:value; key2:value } 
// let arrFin=arr1               objFinal=obj1  
// arr1===arr2 (false)           obj1===obj2 (false) 
// arr1===arrFin (true)          obj1===objFinal(true)



// memory

