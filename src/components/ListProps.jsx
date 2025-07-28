import React from 'react'

const ListProps = ({i}) => {   
    console.log(i)
  return (
    <div>
         {i.herione} {i.hero}  {i.movie} 
    </div>
  )
}

export default ListProps
