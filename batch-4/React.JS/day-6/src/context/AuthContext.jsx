import React,{createContext} from 'react'

export const AuthContext = createContext()
 
export default function AuthContextProvider({children}) {
    
    let isAuth = localStorage.getItem("ShopStop-login");
    let isUser = JSON.parse(localStorage.getItem("ShopStop"));


  return (
    <AuthContext.Provider value={{isAuth,isUser}}>{children}</AuthContext.Provider>
  )
}
