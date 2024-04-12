import { createContext, useState } from "react";

export const registerContext = createContext();

export default function RegisterContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("name-b3") || "");


  const handleLogout = () => {
    const b = window.confirm("Do you want to logout ? ");
    if (b) {
      localStorage.removeItem("name-b3");
      setTimeout(() => {
        window.location.href="/register";
      }, 1000);
    }
  };

  return (
    <registerContext.Provider value={{ user, handleLogout }}>
      {children}
    </registerContext.Provider>
  );
}
