import React,{createContext} from "react";  

const userContext=createContext('') 

const userProvider=userContext.Provider 
// const userConsumer=userContext.Consumer  

export {userProvider, userContext} 