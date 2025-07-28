import React from 'react'
import ListProps from './ListProps'

const LIst = () => {    

  let movies=[
    {   
        id:1,
        hero:"AA", 
        herione:"Bhatia", 
        movie:"Bhadrinath"
    }, 
    {    
        id:2, 
        hero:"PSPK" , 
        herione:"Bhoomika", 
        movie:"Kushi"
    }, 
    {   id:3,
        hero:"NKR" , 
        herione:"Tripathi", 
        movie:"Patas"

    }
  ]
   


   let arrayMap=movies.map((i) => {
     
    return(      

        <div key={i.id}> 
           <ListProps  i={i}  />   
        </div>

        
    )

   })


  return (
    <div>
       {arrayMap}
    </div>
  )
}

export default LIst
