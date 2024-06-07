import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isLoggedin = localStorage.getItem("ShopStop-login");
  const navigate = useNavigate()
   

  if (isLoggedin == "false") {
    navigate("/login");
  }


  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("ShopStop-Cart")) || [];
    setCartData(cart);
  }, [refresh]);

  const handleRemoveFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem("ShopStop-Cart"));
    cart.splice(index, 1);
    localStorage.setItem("ShopStop-Cart", JSON.stringify(cart));
    setRefresh(!refresh);
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <p style={{ textAlign: "left" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Home
        </Link>{" "}
        /
        <Link to={"/products"} style={{ textDecoration: "none" }}>
          {" "}
          Products
        </Link>{" "}
        / Cart
      </p>
      <table cellPadding={"10"} border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Rermove</th>
          </tr>
        </thead>
        <tbody>
          {cartData?.map((el, i) => (
            <tr key={el.title}>
              <td>
                <img width={40} src={el.image} alt={el.title} />
              </td>
              <td>{el.title}</td>
              <td>{1}</td>
              <td>₹ {Math.round(el.price * 83)}/-</td>
              <td>
                <FaTrash onClick={() => handleRemoveFromCart(i)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
