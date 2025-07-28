import React, { Component } from "react"; 

class ClassState extends Component {  

    constructor(){
        super() 

        this.state={
            msg:"Hi Message"
        }
    }  

     handler(){
            this.setState({ 
                msg:"message send"  
            })
     }


    render(){
        return(
            <div> 
            <h1> {this.state.msg} </h1>  
            <button   onClick={()=>this.handler()}   > click here </button>   
            </div>
        )
    }
} 
export default ClassState