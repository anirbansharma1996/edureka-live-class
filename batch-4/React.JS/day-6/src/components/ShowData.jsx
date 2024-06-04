import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShowData({ props }) {
  const navigate = useNavigate();
  const { id, title, price, category, image, rating } = props;

  const old_price = Math.round(price + (price * 20) / 100) * 83;

  return (
    <div
      className="products-card"
      key={id}
      onClick={() => navigate(`/product?productId=${id}`)}
    >
      <span>{category}</span>
      <img className="main-products-image" src={image} alt={title} />
      <h4>{title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Rating : {rating.rate}/5</p>
        <p>Vote: {rating.count}</p>
      </div>
      <h2>
        <s style={{ color: "grey" }}>₹ {old_price}</s> ₹{" "}
        {Math.round(price) * 83}
      </h2>
    </div>
  );
}
