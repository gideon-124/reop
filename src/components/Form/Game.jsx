import React,{useState} from 'react';


function Game() {  


  const [name, setName]=useState("") 
  const [runs, setRuns]=useState() 
  const[wickets, setWickets]=useState() 
  const [playerType, setPlayertype]=useState([])       
  
  const [game, setGame]=useState([])



 
  


const handlecheckbox=(type)=>{      
  // setPlayertype((prop)=> prop.includes(type) ? prop.filter((i)=>i!==type)  :
  //  [...prop, type] 
  //  ) / 

   console.log(type)
  setPlayertype((pre)=>pre.includes(type) ?  
  pre.filter((i)=>i!==type)   
   : 
   [...pre, type])  

   

}



  let handleSubmit=(e)=>{ 
    e.preventDefault()    

     const  data={
       name:name, 
       runs:runs, 
       wickets:wickets ,
       playerType:playerType
     } 
            console.log(data) 

      
     setGame((p)=>[...p, data])   

      

    //  console.log(game)  


     setName('') 
     setPlayertype('') 
     setRuns('') 
     setWickets('')
  }

// console.log(game)

  return <div>   
    
  
   <label>Name</label>
  <input type="text" value={name} 
  onChange={(e)=>setName(e.target.value)}/>  
  <br/> 

  <label>Runs</label>
  <input type="number"  value={runs} 
  onChange={(e)=>setRuns(e.target.value)}/>   
  <br/>
  <label>wickets</label>
  <input type="number" value={wickets} 
   onChange={(e)=>setWickets(e.target.value)}/>    
  <br/>

  <label>playertype</label>
  <input type="checkbox" 
  checked={playerType.includes("Batsmen")}    
  onChange={()=>handlecheckbox("Batsmen")}/>  Batsmen  


  <input type="checkbox" 
   checked={playerType.includes("Bowler")} 
   onChange={()=>handlecheckbox("Bowler")}/>  Bowler 


  <input type="checkbox" 
   checked={playerType.includes("Allrounder")} 
   onChange={()=>handlecheckbox("Allrounder")}/>  Allrounder
  <input type="checkbox"
   checked={playerType.includes("wicketkeeper")} 
   onChange={()=>handlecheckbox("wicketkeeper")}/>  wicketkeeper


 
 <button onClick={handleSubmit}> Submit</button>    




  </div>;
}
export default Game