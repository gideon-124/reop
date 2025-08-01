import React,{useState} from 'react'

const Hoverprops = ({count, handle}) => {
  return (
    <div>
        <h3 onMouseOver={handle}>  {count}     </h3>
    </div>
  )
}

export default Hoverprops
