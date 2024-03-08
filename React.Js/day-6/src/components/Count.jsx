import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);


  useEffect(()=>{
    console.log("dom is updated "+count)
  },[count])


    const handleCount = ()=>{
        setCount((prev)=>prev+1)
    }



  return (
    <div>
      {count}
      <button onClick={handleCount}>+</button>
    </div>
  );
};

export default Count;
