import React from 'react' 
import useToggle from '.'

const Toggletext = () => { 
    const[value, toggleValue]=useToggle(false) 
    console.log(value, "value from toggle text comp")
  return (
    <div>  
        <button onClick={toggleValue}> Toggle</button> 
       
       { 
        value ? <div> Toggle Text</div> :null 
       }
    </div>
  )
}

export default Toggletext
