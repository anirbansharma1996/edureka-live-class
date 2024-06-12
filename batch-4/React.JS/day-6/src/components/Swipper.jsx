import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import useFetch from "../custom/useFetch.js";

export default function Swipper() {
  const { data } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
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
    <div className="swiper">
        <div className="swiper-wrapper">
          {/* Slides */}
          {data?.map((el) => (
            <div className="swiper-slide" key={el.id}>
              hello
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
  
  );
}
