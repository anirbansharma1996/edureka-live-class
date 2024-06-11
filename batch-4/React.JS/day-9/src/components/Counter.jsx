import React, { useRef, useState } from "react";

export default function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    countRef.current++;
    console.log(countRef.current)
  };
  const handleTrigger = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>
        useState : {count} <br /> useRef : {countRef.current}
      </h1>
      <button onClick={handleIncrement}>useRef</button>{" "}
      <button onClick={handleTrigger}>useState</button>
    </div>
  );
}
