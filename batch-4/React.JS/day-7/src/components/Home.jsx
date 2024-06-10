import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

export default function Home() {
  const { text, count, handleCount } = useContext(TextContext);
  return (
    <div>
      <h1>HOME &nbsp; {count}</h1>
      <button onClick={handleCount}>HOME COUNT</button>
      <p>{text}</p>
    </div>
  );
}
