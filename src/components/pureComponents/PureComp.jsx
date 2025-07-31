// purecomp  

// It is a comp which is genrally used for 
// optimzing the performance ad is used for prventing the 
// unnessary rendering and it is used to ensure 
//  the re-renders when there is a cahnge in props or state   



import React, { Component } from 'react'
import Pure from './Pure'
import Normal from './Normal'
import Compmemo from './Compmemo'

class Comp extends Component {  
    
    constructor(){
        super() 

        this.state={
            singer:"KK"
        }
    }

  
   componentDidMount(){
    setInterval(()=>{   

        this.setState({
            singer:"KK"
        })



    }, 3000)
   }


  render() {  

    console.log("componet is renderd ")
    return (
      <div>
        Component    
        {/* <Compmemo props={this.state.sieeeeeenger}/>     */}
        {/* <Pure singer={this.state.singer}/>  */}
        <Normal singer={this.state.singer}/> 
      </div>
    )
  }
}

export default Comp
