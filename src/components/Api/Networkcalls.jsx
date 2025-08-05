import React, { useState } from 'react' 
import axios from 'axios'

const Networkcalls = () => {     

    const [users, setUsers]=useState([])   

    const[name, setName]=useState('') 
    const [userName, setUserName]=useState('')  





    let url="https://jsonplaceholder.typicode.com/users"  
    
    

   // Post api call using Axios
    const HandlerPostData=()=>{
         const obj={
            name:name, 
            userName:userName
         }  
         console.log(obj, "obj")

        axios.post (url,obj).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

    }
    // Get api call using Axios
     const HandlerGetData=()=>{
        axios.get(url).then(res=>{
            console.log(res.data)  
            setUsers(res.data) 
        })
        .catch(err=>{
            console.log(err)
        })

     }

  return (
    <div>     

        <input value={name} onChange={(e)=>setName(e.target.value)}/>  
        <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>   


        <button onClick={HandlerPostData}> Send data to Api </button>
    <button onClick={HandlerGetData}> click here for data </button>    

     {/*data on UI  */}
   {
    users.map((i)=>{ 
        return ( 
            <h5> {i.name}</h5>
        )

    })}
    </div>
  )
}

export default Networkcalls    



// https request 
// 1. Post   -- create      
// 2. get    -- get data   
// 3. put    -- update    
// 4. delete -- delete      
 