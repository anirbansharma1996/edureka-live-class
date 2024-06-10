import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isLoggedin = localStorage.getItem("ShopStop-login");
  const navigate = useNavigate();

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

  let total = Math.round(
    cartData.map((el) => el.price * 83).reduce((acc, curr) => acc + curr, 0)
  );

  return (
    <div style={{ width: "90%", margin: "auto", marginBottom: "2rem" }}>
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

      <hr />
      <Checkout bill={total} setCartData={setCartData} cartData={cartData} />
    </div>
  );
}

export function Checkout({ bill, setCartData,cartData }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const successs = () =>
    toast.success(`Payment of ₹${bill + 100} is successful !`);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handlePayment = () => {
    const orders = JSON.parse(localStorage.getItem("ShopStop-orders")) || [];
    orders.push(...cartData);
    localStorage.setItem("ShopStop-orders", JSON.stringify(orders));
    localStorage.removeItem("ShopStop-cart");
    setCartData([]);
    successs();
    setIsOpen(false);
  };

  return (
    <div className="checkout">
      <h2>Bill : ₹ {bill || 0}/-</h2>
      <p>Delivery Charges : ₹ 100/-</p>
      <hr />
      {bill && <h2>Total : ₹ {bill + 100}/- </h2>}
      <button
        style={{
          width: "100%",
          padding: "10px",
          border: 0,
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={openModal}
        disabled={bill <= 0}
      >
        Check Out
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>Payment</h3>
          <button
            style={{
              backgroundColor: "inherit",
              border: 0,
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            <IoCloseCircleSharp />
          </button>
        </div>
        <form className="payment-form">
          <label>Card Number</label>
          <input
            type="text"
            maxLength={16}
            required
            placeholder="XXXX XXXX XXXX XXXX"
          />
          <div className="payment-form-bottom">
            <div>
              <label>Exp. Date</label>
              <input type="date" required />
            </div>
            <div>
              <label>CVV</label>
              <input type="password" placeholder="***" required maxLength={3} />
            </div>
          </div>
        </form>
        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            padding: "10px",
            border: 0,
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Pay
        </button>
      </Modal>
      <ToastContainer />
    </div>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
