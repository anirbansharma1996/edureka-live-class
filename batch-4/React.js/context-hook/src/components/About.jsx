import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";
import { registerContext } from "../context/registerContext";

export default function About() {
  const text = useContext(TextContext);
  const { user } = useContext(registerContext);

  return (
    <div>
      About : {text}
      {user && <h3>Welcome to About page : {user}</h3>}
    </div>
  );
}
