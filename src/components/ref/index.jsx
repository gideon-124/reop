// ref  are generally used to access 
// the dom nodes directly from the refs 
// used in class components 

// 1. create a ref using react.createRef   
// 2. Attach that ref in the render method
//  ussing ref as reserved keyword 
// 3. call the focus inn the component did mount 


// call back refs 

// 4. steps 
// 1 . create a ref and keep aa null  
// 2. createa methos and that will assign a dom 
// element to ref which we have created  
// 3. Attach that ref to input element 
// 4. do changes in component did mount and use if whether it is null or not 

import React, { Component } from 'react'

class Ref extends Component {    

    constructor(){
    super() 

     this.createdRef=React.createRef()    
    //  call back ref 
     this.currentRef=null   
     this.setCurrentRef=(ele)=>{
        this.currentRef = ele
     }
    }   


    componentDidMount(){  

        if(this.currentRef){
            this.currentRef.focus()
        } 


        console.log(this.createdRef, "Ref")  

        // this.createdRef.current.focus()
    }  


    handler=()=>{
        console.log(this.createdRef.current.value) 
    }


  render() {
    return (
      <div>
        {/* <input type='text' ref={this.createdRef}/>    */}
        <input type='text' ref={this.setCurrentRef}/>  
        <button onClick={this.handler}> Click </button>
      </div>
    )
  }
}

export default Ref
