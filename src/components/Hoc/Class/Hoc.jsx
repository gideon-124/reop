// hoc  -- higher order componenents 
// hoc it takes one comp as an argument and returns  a new comp   

 import React, { Component } from "react";  


 const HigherOrder=(WrappedComp)=>{ 
    
    
    class HigherOrder extends React.Component {    
        
        constructor(props) {
      super(props)
    
      this.state = { 
        count:0
         
      }
    }
    
    handler=()=>{
        this.setState({
            count:this.state.count + 1 
        })
    }
   




        render(){
            return (
                <WrappedComp     count= {this.state.count} handler={this.handler}/>
            )
        }

    } 


    return HigherOrder



 }  

 export default HigherOrder   


