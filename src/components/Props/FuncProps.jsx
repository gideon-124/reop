// import React from "react"; 


// const FuncProps=(props)=>{ 
//     console.log(props.location) 
     
//     const {location, cost}=props  
//     // destructure the props 
//     return( 
//         <div> 
//         <h1> Functional props {location} </h1>  
//         <p> {cost} </p>
//         </div> 

//     )
// }
// export default FuncProps   


function FuncProps(props){ 
    console.log(props)    

    // object --- props 

    const {location, cost}=props  

    // destructuring of props

    return (
        <div> 
          <h1> {location} {cost}</h1>
        </div>
    )
} 

export default FuncProps


