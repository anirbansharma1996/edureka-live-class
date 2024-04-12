import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import Meals from "../components/Meals";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="*" element={<Products />} />
    </Routes>
  );
}
