import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const dummy ='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'


export default function User() {
  const [cartData, setCartData] = useState([]);
  let user = JSON.parse(localStorage.getItem("ShopStop")) || null;

  const handleLogout = () => {
    toast.warning("We will miss you !!");
    localStorage.setItem("ShopStop-login", false);
    localStorage.removeItem("ShopStop-orders");
    localStorage.removeItem("ShopStop-Cart");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("ShopStop-orders")) || [];
    setCartData(cart);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          width: "90%",
          margin: "auto",
        }}
      >
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          gap:'10px'
        }}>
          <img width={100} style={{borderRadius:"50%"}} src={user?.picture || dummy} alt="" />
          <div>
            <h1>{user?.username}</h1>
            <p>{user?.email}</p>
          </div>
        </div>

        <button
          style={{
            width: "20%",
            padding: "10px",
            margin: "10px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => handleLogout()}
        >
          LOGOUT
        </button>
      </div>

      <Myorders props={cartData} />
      <ToastContainer />
    </div>
  );
}

export function Myorders({ props }) {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ textAlign: "left" }}>My Orders</h2>
      <table cellPadding={"10"} border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props?.map((el, i) => (
            <tr key={el.title}>
              <td>
                <img width={40} src={el.image} alt={el.title} />
              </td>
              <td>{el.title}</td>
              <td>{1}</td>
              <td>₹ {Math.round(el.price * 83)}/-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
