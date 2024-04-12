import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ props }) => {
  const { id, image, category, title, rating, price } = props;
  return (
    <section className="child" key={id}>
      <img src={image} alt="" />
      <p>{category}</p>
      <h4>{title.slice(0, 20)}</h4>
      <p>
        Rating: {rating.rate}/5 | Vote : {rating.count}
      </p>
      <p>${Math.ceil(price)}</p>
      <NavLink to={`/product/${id}`}>
        <button>Know More</button>
      </NavLink>
    </section>
  );
};

export default ProductCard;
