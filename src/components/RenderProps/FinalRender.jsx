import React,{useState} from 'react'

const FinalRender = ({render}) => { 

       let[count, setCount]=useState(0)  
       
          
           const handle=()=>{
               setCount(count+1)
           }
  return (
    <div>
        {render(count, handle)}  
    </div>
  )
}

export default FinalRender  

// Render for both code sharing and prop as func 
