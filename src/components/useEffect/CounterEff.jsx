import React,{useState, useEffect} from "react";

const CounterEff = () => {
  let [count, setCount] = useState(0);  



  useEffect(() => {
    console.log("Use Effect Hook");
  },[count]); 


  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click
      </button>
    </div>
  );
};

export default CounterEff;
