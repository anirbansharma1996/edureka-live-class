import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
const BASE_URL = "https://fakestoreapi.com/products";
import { Loading } from "./Loading";
import { GrPowerReset } from "react-icons/gr";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchdata = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await axios(BASE_URL);
      if (response?.status == 200) {
        setFilterData(response.data);
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
  useEffect(() => {
    fetchdata();
  }, []);

  const handleSort = (check) => {
    let temp = [...products];
    if (check == "h-l") {
      let high = temp?.sort((a, b) => b.price - a.price);
      setFilterData(high);
    } else if (check == "l-h") {
      let low = temp?.sort((a, b) => a.price - b.price);
      setFilterData(low);
    }
  };

  const handleCategory = (arg) => {
    let temp = products.filter((el) => el.category === arg);
    setFilterData(temp);
  };
  //DEBOUNCE
  const debounce = (func, delay) => {
    let id;
    return (...args) => {
      clearTimeout(id);
      id = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearchInput = debounce((query) => {
    let temp = filterData.filter((el) =>
      el.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilterData(temp)
  },600);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="products">
      <div className="products-filter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Product Count : {filterData.length}
          <span>
            <GrPowerReset
              onClick={() => fetchdata()}
              style={{ cursor: "pointer" }}
            />
          </span>
        </div>
        <hr />
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
        <button onClick={() => handleCategory("men's clothing")}>
          Men's Collection
        </button>
        <button onClick={() => handleCategory("women's clothing")}>
          Women's Collection
        </button>
        <button onClick={() => handleCategory("jewelery")}>Jewelery</button>
        <button onClick={() => handleCategory("electronics")}>
          Electronics
        </button>
      </div>
      <div className="products-main">
        {filterData?.map((el) => (
          <ShowData key={el.id} props={el} />
        ))}
      </div>
    </div>
  );
}
