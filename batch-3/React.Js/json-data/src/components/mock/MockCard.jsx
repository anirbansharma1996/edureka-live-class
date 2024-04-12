import React from "react";

export default function MockCard({ props }) {
  const { id, images, brand, model, os, release_date } = props;
  return (
    <div key={id}>
      <img width={"10%"} src={images} alt={id} />
      <h3>{model}</h3>
      <p>{brand}</p>
      <p>{os}</p>
      <p>{release_date}</p>
      <button>Add to Cart</button>
    </div>
  );
}
