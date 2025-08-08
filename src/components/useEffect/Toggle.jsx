import React, { useState } from 'react'
import CleanUp from './CleanUp'

const Toggle = () => {    
    
    const [show, setShow]=useState(true)    
 
    //  let color="blue"   

    //  {bg==="primary" ? 'active' : 'primary'}
     
     
    const handler=()=>{   
        setShow((i)=>!i)
     
    }

  return ( 
    <div> 
        <button onClick={handler}>  {show ? 'Hide' : 'Show'}  </button>   


        {show && <CleanUp/>} 
      
    </div>
  )
}

export default Toggle
