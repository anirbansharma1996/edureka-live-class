import React, { createContext, useState } from "react";

export const TextContext = createContext();

export default function TextContextProvider({ children }) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque esse veritatis dolorum, ";
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <TextContext.Provider value={{ text, count, handleCount }}>
      {children}
    </TextContext.Provider>
  );
}
