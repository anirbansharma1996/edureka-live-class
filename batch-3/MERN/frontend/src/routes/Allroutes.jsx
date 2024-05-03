import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../pages/blog/Blogs";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Blogs />} />
    </Routes>
  );
}
