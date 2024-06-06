import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "./Loading";
import { FiShoppingCart } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const successs = () => toast.success("Added to Cart !");

  const [singleData, setSingleData] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        let res = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setSingleData(res.data);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const old_price =
    Math.round(singleData?.price + (singleData?.price * 20) / 100) * 83;

  // add data to cart
  const handleAddToCart = (el) => {
    if (el) {
      const cart = JSON.parse(localStorage.getItem("ShopStop-Cart")) || [];
      cart.push(el);
      localStorage.setItem("ShopStop-Cart", JSON.stringify(cart));
      successs();
    }
  };



  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="single-product-container">
      <div className="single-product-main">
        <div className="single-product-images">
          <div className="single-product-list-images">
            <img src={singleData?.image} alt={singleData?.title} />
            <img src={singleData?.image} alt={singleData?.title} />
            <img src={singleData?.image} alt={singleData?.title} />
            <img src={singleData?.image} alt={singleData?.title} />
          </div>
          <div>
            <img
              width={"80%"}
              src={singleData?.image}
              alt={singleData?.title}
            />
          </div>
        </div>
        <div className="single-product-info">
          <NavLink style={{ textDecoration: "none" }} to="/products">
            All Products /{" "}
            <span style={{ color: "grey" }}>{singleData?.category}</span>
          </NavLink>
          <h2>{singleData?.title}</h2>
          <p>{singleData?.description}</p>
          <h3>
            {" "}
            <s style={{ color: "grey" }}>₹ {old_price}</s> ₹{" "}
            {Math.round(singleData?.price) * 83}/-
          </h3>
          <div className="single-product-sizes">
            <div>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <div>
              <button>BUY NOW</button>
              <button onClick={() => handleAddToCart(singleData)}>
                <FiShoppingCart />
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Rating : {singleData?.rating.rate}/5</p>
            <p>Vote: {singleData?.rating.count}</p>
          </div>
          <hr />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              minus.
            </p>
            <h4 style={{ marginTop: "-10px" }}>~ Pritam Saha</h4>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
