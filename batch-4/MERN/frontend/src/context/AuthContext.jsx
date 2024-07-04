import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("BATCH4-AUTH"));
  const user = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem("BATCH4-AUTH");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  const checkTokenExpiry = () => {
    const currTime = Date.now() / 1000;
    if (user?.exp < currTime) {
      handleLogout();
    } else {
      const expin = user?.exp - currTime;
      setTimeout(handleLogout, expin * 1000);
    }
  };


  return (
    <AuthContext.Provider value={{ user, handleLogout, checkTokenExpiry }}>
      {children}
    </AuthContext.Provider>
  );
};
