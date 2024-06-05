import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import User from "../components/User";

export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<SingleProduct />} />
    </Routes>
  );
};
