import React from "react"; 


class  ClassProps extends React.Component { 
    render(){

        return(
            
            <div> 
                <h1>  ClassName props {this.props.name}   </h1> 
                <p> {this.props.name} {this.props.number}</p>
            </div>

        )
    }
} 

export default ClassProps 