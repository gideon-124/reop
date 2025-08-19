import React, { useContext } from 'react'  
// import { userConsumer as UC } from './UserContext'   
import { userContext as UC } from './UserContext'


const Comp3 = () => {   

  const name= useContext(UC) 
  return ( 
   <h1> Comp3 {name}</h1>
  )
}

export default Comp3
