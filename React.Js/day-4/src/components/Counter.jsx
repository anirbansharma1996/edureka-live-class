import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleDecCount = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <button disabled={count === 1 ? true : false} onClick={handleDecCount}>
        -
      </button>
      <h3>Count is : {count}</h3>
      <button disabled={count === 10 ? true : false} onClick={handleIncCount}>
        +
      </button>
    </div>
  );
}
