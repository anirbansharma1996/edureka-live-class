import React, { useState } from "react";

export default function Cart() {
  const [cartD, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart-b3")) || []
  );
  const [count, setCount] = useState({});

  const handleDec = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
  };
  const handleInc = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const totalBill = cartD.reduce((total, el) => {
    const itemTotal = (count[el.id] || 1) * el.price;
    return total + itemTotal;
  }, 0);

  const handleRemove = (id) => {
    const isPermited = window.confirm("Do you want to remove this item ? ");

    if (isPermited) {
      const updated = cartD.filter((el) => el.id !== id);
      setCartData(updated);
      localStorage.setItem("cart-b3", JSON.stringify(updated));
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        Cart Total : ${Math.ceil(totalBill)}
      </h3>
      {cartD?.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "2% auto",
            width: "80%",
            border: "1px dashed",
            padding: "5px",
          }}
        >
          <img src={el.image} alt="image-product" />
          <h4>{el.title}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button onClick={() => handleDec(el.id)}>-</button>
            <p>{count[el.id] || 1}</p>
            <button onClick={() => handleInc(el.id)}>+</button>
          </div>
          <h4>${Math.ceil(el.price * (count[el.id] || 1))}</h4>
          <button onClick={() => handleRemove(el.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
