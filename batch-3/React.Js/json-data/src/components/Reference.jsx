import React, { useRef } from "react";

export default function Reference() {
  const inputItemOne = useRef(null);
  const inputItemTwo = useRef(null);
  const topSection = useRef(null)

  const handleFocus = () => {
      inputItemOne.current.focus() 
      
  };
  const handleGotoTop =()=>{
     topSection.current.scrollIntoView({behavior:"smooth"})
    
  }


  return (
    <div>
      <h1 ref={topSection}>Reference navbar</h1>
      <input type="text" placeholder="1" ref={inputItemOne} />
      <input type="text" placeholder="2" ref={inputItemTwo} />
      <button onClick={handleFocus}>CLICK</button>
      <div style={{height:"300px"}}></div>
      <button onClick={handleGotoTop}>Go To Top</button>
    </div>
  );
}
