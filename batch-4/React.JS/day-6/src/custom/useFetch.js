import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(URL) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const f = async () => {
      try {
        const res = await axios(URL);
        setData(res.data)
      } catch (error) {
        console.error(error);
      }
    };
    f();
  }, []);

  return { data };
}
