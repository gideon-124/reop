import axios from 'axios'
import React, {useEffect, useReducer} from 'react'
 

const initialState={
    loading :true ,
    data : null ,  
    error: null
}  

const INIT="INIT" 
const START="START" 
const ERROR='ERROR'

const dataTrigger =(state, action)=>{   

    switch (action.type) {
        case INIT:  
          return {...state, loading:true, error:null} 
        
            
        case START : 

        return {...state, loading :false , data :action.payload } 

        case ERROR : 
        return { ...state, loading:false, error :action.payload }
    
        default:
            return state
    }

}

const ApiReducer = () => {   

   
    const [state, dispatch]=useReducer(dataTrigger, initialState)   
    console.log(state, "state" )          


    useEffect(()=>{    
         
        const fetchData =async()=>{
            dispatch({type :INIT})    
             let url="https://jsonplaceholder.typicode.com/users"  

            try {  

                const response =await axios.get(url)     
                console.log(response)
                dispatch ({type:START, payload :response.data }) 

                
            } catch (error) { 
                dispatch ({type:ERROR , payload :error.message })
                
            }
        }   

        fetchData()    

    },[]) 

  return (
    <div>    

          {state.loading  &&    <h1> Loading ........ </h1> }         


          {state.data   &&   (
            <div>          
                {state.data.map((i)=>{
                    return (
                        <div>{i.username} </div>
                    )
                })  }    
                </div> 
          )  
        }

    </div>
  )
}

export default ApiReducer
