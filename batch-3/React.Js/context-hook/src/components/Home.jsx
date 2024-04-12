import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { registerContext } from "../context/registerContext";


export default function Home() {
  const text = useContext(TextContext);
  const { user } = useContext(registerContext);


  return (
    <div>
      Home : {text}
      {user && <h3>Welcome to Home page : {user}</h3>}
    </div>
  );
}
