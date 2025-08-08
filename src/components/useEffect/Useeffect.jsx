import React, { useState } from 'react'
import { useEffect } from 'react'
const Useeffect = () => {
    let [count, setCount] = useState(0)
 
    useEffect(() => {
        console.log('Use Effect Hook')
        console.log("COunt")
    }, [count])
    return (
        <div>
            {count}
            <button onClick={() => {
                setCount(count + 1)
            }}>Click</button>
 
        </div>
    )
}
 
export default Useeffect
 
//Note:-
 
//Use Effect is used only for side effects.which means featching data,
// updating data,on changing the dom and also it is only used in
//functional component
//if you use empty dependencies means use effect will call only once.
//which means it is similar to component did mount in class comp.---[]
//if you changing a  state dependencies means on changing the particular
//dependencies use effect will call.
//if u use effect means it will every time.