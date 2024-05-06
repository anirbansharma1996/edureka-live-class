import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../pages/blog/Blogs";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import User from "../pages/User";
import Postblog from "../pages/blog/Postblog";
import Userblog from "../pages/blog/Userblog";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/user" element={<User />} />
      <Route path="/write-blog" element={<Postblog />} />
      <Route path="/user/:id" element={<Userblog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Blogs />} />
    </Routes>
  );
}
