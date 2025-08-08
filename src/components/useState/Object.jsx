import React, { useState } from 'react'
 
const Object = () => {
 
      const [data, setData]=useState(  {  name:"", age: ""}  )      
 
     
 
  return (
    <div>    
 
 
        <input  value={data.name}   onChange={(e)=>setData({...data,  name: e.target.value})}/>  
        <input  value={data.age}  type="number" onChange={(e)=>setData({ ...data, age: e.target.value})}/>
       
        <div> Name: {data.name}</div>
        <div> age:{data.age}</div>  
 
 
    </div>
  )
}
 
export default Object