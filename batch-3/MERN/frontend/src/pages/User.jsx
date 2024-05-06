import React, { useContext } from "react";
import { TokenContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function User() {
  const { decode } = useContext(TokenContext);
  const navigate = useNavigate()

   if(!decode){
    window.location.href = "/login";
   }

  const handleLogout = () => {
    localStorage.removeItem("b3-blog-auth-token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Welcome {decode.name}</h1>
      <p>
        Registered Email : <b>{decode.email}</b>
      </p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={()=>(navigate("/write-blog"))}>Write Blog</button>
    </div>
  );
}
