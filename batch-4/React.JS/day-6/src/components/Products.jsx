import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
const BASE_URL = "https://fakestoreapi.com/products";
import { Loading } from "./Loading";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await axios(BASE_URL);
        if (response?.status == 200) {
          setProducts(response.data);
          setError("");
          setIsLoading(false);
        } else {
          setError("Try again later...");
        }
      } catch (error) {
        setIsLoading(false);
        setError("Something went wrong...");
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="products-main">
      {products?.map((el) => (
        <ShowData key={el.id} props={el} />
      ))}
    </div>
  );
}
