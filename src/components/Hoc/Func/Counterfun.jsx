import React, { useState } from 'react'

const Counterfun = () => { 
    const[count, setCount]=useState(0)   


    const handler=()=>{    

        setCount(count+1)   
    }
  return (
    <div> 
        {count}
        <button  onClick={handler}> click</button>
    </div>
  )
}

export default Counterfun
