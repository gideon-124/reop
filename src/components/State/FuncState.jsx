import React, { useState } from 'react'

const FuncState = () => {     


   const [array, setArray]=useState("name")   

   const changeData=()=>{
    setArray("setName")
   }

  return (
    <div> 
      <h1> {array} </h1>  
      <button onClick={changeData}> Click </button>
      
    </div>
  )
}

export default FuncState  

// hooks    -useState  
// use State   
// state, setState 


