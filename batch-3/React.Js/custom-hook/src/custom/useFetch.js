import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
 const [error,setError] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url);
        setData((prev) => res);
        setIsLoading(false)
        setError("")
      } catch (error) {
        setIsLoading(false)
        console.log(error.message);
        setError("Something went wrong...")
      }
    };
    fetchData();
  }, [url]);

  return {data,isLoading,error};
}
