import React from 'react'
import { UserConsumer } from './Usecontext'

const CompF = () => {
  return (    
     <UserConsumer> 
        {
            (name)=>{
                return    (
                    <div> {name}</div>
                )
            }
        }
     </UserConsumer>
  )
}

export default CompF
