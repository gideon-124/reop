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
import Comp from './components/pureComponents/PureComp'
import Pure from './components/pureComponents/Pure'
import Normal from './components/pureComponents/Normal'
import Game from './components/Form/Game'
import Ref from './components/ref'
import Input from './components/ref/Input'
import Focus from './components/ref/Focus'
import CounterComp from './components/Hoc/Class/Counter'
import Hover from './components/Hoc/Class/Hover'
import Counterfun from './components/Hoc/Func/Counterfun'
import CounterOne from './components/RenderProps/CounterOne'
import Hoverprops from './components/RenderProps/Hoverprops'
import RenderPro from './components/RenderProps/RenderPro'
import FinalRender from './components/RenderProps/FinalRender'


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
     {/* <FormData/ > */}
     {/* <Parent/>  */}
     {/* <Counter/> */}  
     {/* <Frag/> */}  
     {/* <Tabledata/> */} 
     {/* <Comp/> */}    
     {/* <FormData/> */}
     {/* <Game/> */} 
     {/* <Ref/> */}
     {/* <Input/> */}  
     {/* <Focus/> */}   

    {/* <CounterComp/> 
    <Hover/> */}   

     {/* <CounterOne/> 
    <Hoverprops/>    */}  
    <RenderPro movie={()=> 'Dairy'}/>
    {/* <RenderPro movie={(pp)  => pp ?   'Newyork'  : 'London' }/> */}
    {/* <RenderPro  movie={(log)=>  log ? 'Kingdom' : 'Nothing' }/>    */}
    <FinalRender render={(count, handle) =>    
      <CounterOne count={count} handle={handle} />}/>  

      <FinalRender render ={(count, handle)=> 
        <Hoverprops count={count} handle={handle}/>}/>
      
    
    </div>
  )
}

export default App
