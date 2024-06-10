import React, { useState, createContext } from "react";
import axios from "axios";

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  const BASE_URL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  //FETCH
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
  //SORT
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
  //FILTER
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
    setFilterData(temp);
  }, 600);

  return (
    <ApiContext.Provider
      value={{
        products,
        filterData,
        isLoading,
        error,
        fetchdata,
        handleSort,
        handleCategory,
        handleSearchInput,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
