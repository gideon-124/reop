import React, { useState } from "react";

const GreetingFunc = () => {
  const [logged, setLogged] = useState(true);

  // short

  return logged && <div> logged </div>;

  // //   element

  //    let element

  //    if(logged){
  //     element= <div> logged </div>
  //    }
  //    else{
  //     element=  <div> not logged </div>
  //    }
  //    return(
  //     <div> {element}</div>
  //    )

  //    ternary op

  //    return(
  //     logged ?  <div> logged </div>  : <div> not logged  </div>
  //    )

  // if else
  // if(logged){
  //     return (
  //         <div>
  //             logged
  //         </div>
  //     )
  // } else{
  //     return(
  //         <div>
  //             not logged
  //         </div>

  //     )
  // }
};

export default GreetingFunc;
