import React, { useState } from 'react'

const CounterOne = ({count, handle}) => {  
   
    
  return (
    <div> 
        {count}
      <button onClick={handle}> click</button>
    </div>
  )
}

export default CounterOne
