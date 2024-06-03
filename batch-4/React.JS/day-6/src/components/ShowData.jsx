import React from "react";

export default function ShowData({ props }) {
  const { id, title, price, category, description, image, rating } = props;

  const old_price = Math.round(price + (price * 20) / 100) * 83;

  return (
    <div className="products-card" key={id}>
      <span>{category}</span>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      {/* <p>{description.substring(0,200)}</p> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
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
