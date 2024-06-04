import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";

export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<SingleProduct />} />
    </Routes>
  );
};
