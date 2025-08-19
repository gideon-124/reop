import React from 'react'

const Cnt = ({CC, text}) => { 

  console.log(`comp${text}`)
  return (
    <div>
      <h1>  {text} ----  {CC}  </h1> 

    </div>
  )
}

export default React.memo(Cnt)
