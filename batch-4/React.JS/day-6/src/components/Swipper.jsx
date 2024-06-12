import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import useFetch from "../custom/useFetch.js";
import { useNavigate } from "react-router-dom";

export default function Swipper() {
  const loading_image =
    "https://i.pinimg.com/originals/8d/89/ca/8d89ca607c0ff0f87bd5ed16a6f82ff5.gif";
  const men = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const women = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="swiper">
        <h1 style={{ textAlign: "center" }}>Men's Latest</h1>
        {men.loading && <img width={"500px"} src={loading_image} alt="" />}
        <div className="swiper-wrapper">
          {!men.loading &&
            men.data?.map((el) => (
              <div className="swiper-slide" key={el.id}>
                <Carousel props={el} />
              </div>
            ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="swiper">
        <h1 style={{ textAlign: "center" }}>Women's Latest</h1>
        {women.loading && <img width={"500px"} src={loading_image} alt="" />}
        <div className="swiper-wrapper">
          {!women.loading &&
            women.data?.map((el) => (
              <div className="swiper-slide" key={el.id}>
                <Carousel props={el} />
              </div>
            ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}

export function Carousel({ props }) {
  const navigate = useNavigate();
  const { id, title, price, category, image, rating } = props;
  return (
    <>
      <div className="carousel-main" key={id}>
        <div className="carousel-image">
          <span>{category}</span>
          <img
            className="main-products-image"
            width={100}
            src={image}
            alt={title}
          />
        </div>
        <div
          className="carousel-info"
          onClick={() => {
            navigate(`/product?productId=${id}`);
          }}
        >
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
          <h2>₹{Math.round(price) * 83}</h2>
        </div>
      </div>
    </>
  );
}
