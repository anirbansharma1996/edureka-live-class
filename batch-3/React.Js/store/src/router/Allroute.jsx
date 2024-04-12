import { Routes, Route } from "react-router-dom";
import Products from "../pages/Product/Products";
import SingleProd from "../pages/Product/SingleProd";
import Home from "../pages/Home";
import Cart from "../pages/cart/Cart";

export default function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<SingleProd />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}
