import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProd = () => {
  const { id } = useParams();
  const [soloData, setSoloData] = useState({});
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart-b3")) || []
  );

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

  const handleAddtoCart = (item) => {
    const newItem = [...cart, item];
    setCart(newItem);
    alert("item added to the cart");
    localStorage.setItem("cart-b3", JSON.stringify(newItem));
  };

  return (
    <section>
      <img style={{ width: "200px" }} src={soloData.image} alt="" />
      <h2>{soloData.title}</h2>
      <p>{soloData.category}</p>
      <p>{soloData.description}</p>
      <h4>{soloData.price}</h4>
      <button onClick={() => handleAddtoCart(soloData)}>ADD TO CART</button>
    </section>
  );
};

export default SingleProd;
