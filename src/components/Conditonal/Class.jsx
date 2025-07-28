import React, { Component } from "react"; 


class ClassCond extends Component{   



    constructor(){
        super() 

        this.state={
            loged:true
        }
    }  




    handlechange(){
        console.log("bbsdjghffh")
    }

    


    




    render(){   
               
      
        // element   

        let element     

        if(this.state.loged){
            element =<div> welcome </div>
        } else{
            element= <div> back </div>
        }
         
        return(
            <div> 
                {element}
            </div>
        )

        // short circuit 

        // return this.state.loged &&  <div> 1 </div>

        //   ternary operator 

        //  return(
        //     this.state.loged ? <div> 1 </div> : <div> 2 </div>
        //  )


        // if else 

        // if(this.state.loged){
        //     return(
        //         <div> 
        //             <h1> welcome</h1>
        //         </div>
        //     )
        // } else{
        //     return(
        //         <div> 
        //             <h1> Go back</h1>
        //         </div>
        //     )
        // }  





        
    }
}  



export default ClassCond   



// conditonal in reacts 
// if else  
// ternary operator
// short circuit operator 
// element 
