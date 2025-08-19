import React, { useCallback, useState } from 'react'
import Title from './Title'
import Cnt from './Cnt'
import Bu from './Button'

const ParentCall = () => {  

   const [age, setAge]=useState(34) 
   const [ss, setSS]=useState(27000) 

   const incrementAge=useCallback(()=>{
      setAge(preage=>preage+1)
   },[]) 


   const incrementS=useCallback(()=>{ 
     setSS(prevss=>prevss+15000)

   },[])

 

   

  return (
    <div>
      <Title/> 
      <Cnt CC={age} text="Age"/> 
      <Bu handleC={incrementAge} text="AgeIncrement">AgeIncrement</Bu> 
      <Cnt CC={ss} text="SS"/> 
      <Bu  handleC={incrementS} text="SIncrement"> SIncrement </Bu>
    </div>
  )
}

export default ParentCall
