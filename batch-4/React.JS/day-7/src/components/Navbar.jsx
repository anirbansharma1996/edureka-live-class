import React from "react";
import {NavLink} from 'react-router-dom'

export default function () {
  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
      <NavLink to="/"><p>Home</p></NavLink>
      <NavLink to="/about"><p>About</p></NavLink>
    </div>
  );
}
