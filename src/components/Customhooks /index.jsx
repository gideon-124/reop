// defintion 
// These are the functions that let u resuse the component 
// logic (state, sideeffects)  across multiple components   

// Note :  The custom hook should start with use  
// Inside the custom hook i can use build in hooks like useState, useeffect---etc 
// allows u to extract and reuse logic between components without duplicating the code   



// we never use custom hooks for the feature purpose  
// they can return values, state/ function  that other component uses    


import React, { useState } from 'react'

const useToggle = (para) => {  

    const [value, setValue]=useState(para) 

    function toggleValue(val){ 
        if(typeof val!='boolean') { 
            console.log("if")
            setValue(!value) 
        }  else{  
            console.log("else")
            setValue(value)
        }

    } 

    return [value, toggleValue]
  
}

export default useToggle
