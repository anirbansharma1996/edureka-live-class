import React, { useContext } from "react";
import { registerContext } from "../context/registerContext";

export default function Logout() {
  const { user, handleLogout } = useContext(registerContext);
   
  return (
    <div>
       Name :  {user} 
       <br />
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}
