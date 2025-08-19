import React,{useState} from 'react'

const Incmem = () => {  

    const[data, setData]=useState(0) 
    const [show, setShow]=useState(false)  


     const demo=(p)=>{ 

        for (let i=0 ; i<1000000000; i++)  {}    
        
        return p*3
     } 

     const thrice= demo(data)

  return (
    <div>     
        without memo 
      <div> Data : {data}</div>   

       <div> Thrice: {thrice}</div> 
      <button onClick={()=>setData(data+1)}> Increment </button> 
      <button onClick={()=>setShow(!show)}> Toggle {show.toString()} </button>
    </div>
  )
}

export default Incmem
