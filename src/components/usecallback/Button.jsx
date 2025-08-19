import React from 'react'

const Bu = ({handleC, text}) => { 
    console.log("ButtonClick")
  return (
    <div>
        <button onClick={handleC}> {text}</button>
    </div>
  )
}

export default React.memo(Bu)
