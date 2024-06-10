import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function useFetchData(URL) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const f = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(URL);
      if (res.status === 200) {
        setError("");
        setIsLoading(false);
        setData(res.data);
      } else {
        setIsLoading(false);
        setError("404 error !!");
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  
  useEffect(() => {
    f();
  }, [URL]);

  return { data, error, isloading,f };
}
