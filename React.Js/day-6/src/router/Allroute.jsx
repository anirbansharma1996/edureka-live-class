import { Routes, Route } from "react-router-dom";
import Count from "../components/Count";
import Products from "../pages/Product/Products";
import SingleProd from "../pages/SingleProd";

export default function Allroute() {
  return (
    <Routes>
      <Route path="/count" element={<Count />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<SingleProd />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}
