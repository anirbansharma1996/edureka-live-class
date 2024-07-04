import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const User = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>{user.username}</h1>
      <h4>{user.useremail}</h4>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};
