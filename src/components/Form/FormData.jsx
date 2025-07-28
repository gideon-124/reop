import React, {useState} from 'react'

const FormData = () => {   
  

    const [name, setName]=useState('') 
    const [number, setNumber]=useState('')  
    const [email, setEmail]=useState('') 
    const [pass, setPass]=useState('') 
    const [drop, setDrop]=useState('')  


    

     const handleSubmit=(e)=>{
        e.preventDefault() 

        const data={   
            
            FullName:name, 
            Email:email, 
            phoneNumber:number, 
            password:pass, 
            DropDown:drop
        }  
        console.log(data) 

    
     }  

    //  handleSubmit is an handler 

  return (
    <div>
      
      <form onSubmit={handleSubmit}> 
        <label> Name </label> <br></br>
        <input type='text' placeholder='enter your name' 
        value={name} onChange={(e)=> setName(e.target.value)}/>  
        <br></br>



        <label> Email </label> <br></br>
        <input type='email' placeholder='enter email' 
        value={email}  onChange={(e)=>setEmail(e.target.value)}/>     <br></br>

        <label> Phone number </label> <br></br>
        <input type='number' placeholder='enter your number' 
        value={number} onChange={(e)=>setNumber(e.target.value)}/>  <br></br>


        <label> Password </label> <br></br>
        <input type='password' placeholder='enter password'
         value={pass} onChange={(e)=>setPass(e.target.value)}/>   <br></br>


        <select value={drop} onChange={(e)=>setDrop(e.target.value)}> 
        <option value=""> Select option </option>  
        <option value="1"> 1 </option> 
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        </select>  
        <br></br> 

        <button type='submit'> Submit</button>
      </form>

    </div>
  )
}

export default FormData
