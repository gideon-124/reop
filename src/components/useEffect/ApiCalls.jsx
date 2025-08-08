import React, { useState, useEffect} from 'react' 
import axios from 'axios'

const ApiCalls = () => {    

    const[obj, setObj]=useState([]) 
    const [id, setId]=useState(1)  
    const [but, setBut]=useState()
 

    
     
     
     const fetchhandler=()=>{ 
        setBut(id)  
     }  

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${but}`)
         .then((res)=> setObj(res.data))
        .catch((err)=>console.log(err))
     },[but] )      
     



    


    console.log(obj, "obj") 
  return (
    <div>  

    <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/> 
    <button onClick={fetchhandler}> fetch Data </button>
     {obj.email}

{/* {obj.map((i)=>{
    return (
        <div>{i.name}</div>
    )
})}  */}
    </div>
  )
}

export default ApiCalls
