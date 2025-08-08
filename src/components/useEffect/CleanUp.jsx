import React, { useState, useEffect, Component } from 'react'

const CleanUp = () => {   

    const [count, setCount]=useState(0)    


    useEffect(()=>{   
        console.log("mount") 
        const interval=setInterval(()=>{ 
            setCount((prev)=>prev+1)

        },2000)  

        return ()=>{ 
         console.log("Component will  unmount") 
        clearInterval(interval)  
        console.log("ss")

        }

    },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default CleanUp


// useEffect(()=>{  

// // functional 
// return()=>{

// }


// })



// clean up in useeffect is a function tgat runs 
// before the component unmounts  or before that effect re-runs  

// it is a function that clears or cancels anything component start 
// (like events, intervals  or api calls) when the component is about to unmount