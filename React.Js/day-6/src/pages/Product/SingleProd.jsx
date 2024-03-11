import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProd = () => {
  const [soloData, setSoloData] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await fetch(`https://fakestoreapi.com/products/${id}`);
        const d = await r.json();
        setSoloData((prev) => d);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section>
      <img style={{ width: "200px" }} src={soloData.image} alt="" />
      <h2>{soloData.title}</h2>
      <p>{soloData.category}</p>
      <p>{soloData.description}</p>
      {/* <p>
        {soloData.rating.rate} 
      </p> */}
      <h4>{soloData.price}</h4>
      <button>ADD TO CART</button>
    </section>
  );
};

export default SingleProd;
