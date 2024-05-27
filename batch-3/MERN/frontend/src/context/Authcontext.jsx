import React, { useState, useContext, createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const TokenContext = createContext();

export default function AuthcontextProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("b3-blog-auth-token")
  );

  const decode = token ? jwtDecode(token) : null;

  return (
    <TokenContext.Provider value={{ token, decode }}>
      {children}
    </TokenContext.Provider>
  );
}
