import React from 'react'

const Compmemo = ({props}) => {  
    console.log("memo is rendered ")
  return (
    <div>
        Memo component {props}
    </div>
  )
}

export default React.memo(Compmemo)   


