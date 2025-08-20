// useReducer  

import { useReducer, useState } from "react";

// it is used to manage the multiple state  , 
// alternative for the useState    
// it combines state n complex logic into a single reducer function 
// It returns current state, dispatch func to trigger state updates   


// const [state, dispatch]=useReducer(function, initialState) 

// function  --2parameters 
// 1. state -- inital state
// 2. action --   




import React from 'react'

const CounterRed = () => {  
    const [data, setData]=useState(0) 

    const incremnt=()=>{
         setData(data+1)
    }  

    const decremnt=()=>{ 
        setData(data-1)
    } 

    const reset=()=>{
        setData(0)
    }  

    

  return (
    <div> 
        {data}  

        <button onClick={incremnt}> Incremnt</button> 
        <button onClick={decremnt}> decremnt</button> 
        <button onClick={reset}> Reset</button>
      
    </div>
  )
}

export default CounterRed
