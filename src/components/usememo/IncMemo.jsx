import React,{useMemo, useState} from 'react'

const IncMemo = () => {  
     
    const[data, setData]=useState(0) 
    const [show, setShow]=useState(false)  

     

    const demo=(para)=>{
        for( let i =0; i<1000000000 ; i++){}    
        return para*3
    }   
     

    const thrice= useMemo(()=>demo(data), [data])

  return (
    <div> 
        <div>Data  {data}</div> 
        <div> Thrice {thrice}</div>
     <button onClick={()=>setData(data+1)}> Incremnt </button>    
     <button onClick={()=>setShow(!show)}> Toggle {show.toString()} </button>   
    </div>
  )
}

export default IncMemo
