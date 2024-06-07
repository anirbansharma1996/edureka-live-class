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

  const handleSort = (check) => {
    let temp = [...products];
    if (check == "h-l") {
      let high = temp?.sort((a, b) => b.price - a.price);
      setProducts(high);
    } else if (check == "l-h") {
      let low = temp?.sort((a, b) => a.price - b.price);
      setProducts(low);
    }
  };
  const handleSearchInput = (query) => {
    if (query == "") {
      setProducts(products);
    } else {
      let s_item = products.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(s_item);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="products">
      <div className="products-filter">
        <label>Search</label>
        <input
          onChange={(e) => handleSearchInput(e.target.value)}
          type="text"
        />
        <hr />
        Sort By Price
        <button onClick={() => handleSort("h-l")}>Price High to Low</button>
        <button onClick={() => handleSort("l-h")}>Price Low to High</button>
        <hr />
        Filter by Category
        <button>Men's Collection</button>
        <button>Women's Collection</button>
        <button>Jewellery</button>
        <button>Electronics</button>
      </div>
      <div className="products-main">
        {products?.map((el) => (
          <ShowData key={el.id} props={el} />
        ))}
      </div>
    </div>
  );
}
