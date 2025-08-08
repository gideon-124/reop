import React,{createContext} from "react";   


const UserContext= createContext('')        

const   UserProvider=UserContext.Provider    
const   UserConsumer=UserContext.Consumer       

export {UserConsumer, UserProvider}   





// steps 
// 1. create context 
// 2. provider     to give / provide  the data 
// 3. consumer      to access the data    

// Note:  If we provide any data in the createcontext 
// then no need to need to use provider and wrapping also
// no needed. 