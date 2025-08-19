import React,{memo} from 'react'

const Title = () => { 
    console.log("Title comp")
  return (
    <div>
      Title
    </div>
  )
}

export default memo(Title)
