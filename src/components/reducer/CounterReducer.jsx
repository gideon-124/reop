import React,{useReducer} from 'react'

// Initial state
const initialState= {count:0}    

// action types 
const INCREMENT="INCREMENT" 
const DECREMENT="DECREMENT" 
const RESET="RESET" 


function increase(state, action){    
    switch (action.type) {
        case INCREMENT : 
          return  {count:state.count+1} 
        
        case DECREMENT: 
        return {count:state.count-1}  

        case RESET : 
        return initialState
            
        default:
          return state  
    }

}



const CounterReducer = () => {  
   
    const [state, dispatch]=useReducer(increase, initialState) 
    console.log(state, "state in reducer") 
  return (
    <div> 
        Counter {state.count}    

        <button onClick={()=>dispatch({type : INCREMENT})}> Increment </button> 
        <button onClick={()=>dispatch({type: DECREMENT})}> Decrement </button> 
        <button onClick={()=>dispatch({type: RESET})}> Reset</button>
      
    </div>
  )
}

export default CounterReducer
