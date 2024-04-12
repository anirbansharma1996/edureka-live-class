import { createContext } from "react";

export const TextContext = createContext();

export default function TextContextProvider({ children }) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

  return <TextContext.Provider value={text}>{children}</TextContext.Provider>;
}
