import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HiComp from './components/Class'
import Func from './components/Func'
import ClassProps from './components/Props/ClassProps'
import FuncProps from './components/Props/FuncProps' 
import ClassState from './components/State/ClassState'
import FuncState from './components/State/FuncState'
import ClassCond from './components/Conditonal/Class'
import GreetingFunc from './components/Conditonal/Func'
import LIst from './components/LIst'
import FormData from './components/Form/FormData'
import Parent from './components/LifeCyclemethods/Parent'
import Counter from './components/LifeCyclemethods/Parent'
import Frag from './components/Fragments'
import Tabledata from './components/Fragments/index1'
// import './App.css' 


function App() {
  

  return (
    <div> 
     {/* <HiComp/> 
     <Func/>    */}
     {/* <ClassProps name="prasad" number="220"/> 
     <FuncProps  location="hyd"  cost="2500" /> */} 
     {/* <ClassState/> */} 
     {/* <FuncState/> */} 
     {/* <ClassCond/> */} 
     {/* <GreetingFunc/> */} 
     {/* <LIst/> */} 
     {/* <FormData/> */}  
     {/* <Parent/>  */}
     {/* <Counter/> */}  
     {/* <Frag/> */}  
     <Tabledata/>

    </div>
  )
}

export default App
