import React, { useContext, useEffect } from "react";
import { Home } from "./components/Home";
import { Signup } from "./auth/Signup";
import { Login } from "./auth/Login";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { WriteBlog } from "./page/WriteBlog";
import { User } from "./page/User";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user, checkTokenExpiry } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      checkTokenExpiry();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/write-blog" element={<WriteBlog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
