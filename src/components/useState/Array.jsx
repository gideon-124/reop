import React, { useState } from 'react'

const Array = () => {  
    const [arr, setArr] =useState(['A', 'B', 'C'])   



     const handler=()=>{    

        setArr([...arr, 'D'])

     }
  return (
    <div>
        {    

        arr.map((i)=>{
            return( 
                <div> {i} </div>
            )
        })

        }   
        <button onClick={handler}> Add Array</button>
    </div>
  )
}

export default Array
