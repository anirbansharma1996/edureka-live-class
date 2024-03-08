import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../animation/Loading";

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const r = await fetch("https://fakestoreapi.com/products");
        const d = await r.json();
        setIsLoading(false);
        setData((prev) => d);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if(isLoading){
    return <Loading/>
  }




  return (
    <div>
      <ProductCard props={data} />
    </div>
  );
};

export default DataFetch;



