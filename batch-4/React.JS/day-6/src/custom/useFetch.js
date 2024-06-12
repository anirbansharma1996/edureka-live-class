import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(URL) {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const f = async () => {
      try {
        setLoading(true)
        const res = await axios(URL);
        setData(res.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    };
    f();
  }, []);

  return { data , loading };
}
