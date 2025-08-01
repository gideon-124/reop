import React from 'react'

const RenderPro = ({movie}) => {
  return (
    <div> 
       {/* {movie(false)}    */} 
       {/* {movie(true)} */} 
       {movie()}
    </div>
  )
}

export default RenderPro       


// renderprops 
// it is technique used for code sharing b/w components  
// and using prop whose value is a func   

// Render pro comp is used for prop as func explanation 
