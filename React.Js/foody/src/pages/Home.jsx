import { useState, useEffect } from "react";
import { BASE_URL } from "../connection/baseurl.js";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Home() {
 
  const [category, setCategory] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/categories.php`);
        setCategory(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
  
      <Category props={category} />
    </section>
  );
}


export function Category({ props }) {
  return (
    <div className="category">
      {props.map((el) => (
        <div className="card" key={el.idCategory}>
          <img
            src={el.strCategoryThumb}
            className="card-img-top"
            alt={el.strCategory}
          />
          <div className="card-body">
            <h5 className="card-title">{el.strCategory}</h5>
            <p className="card-text">
              {el.strCategoryDescription.slice(0, 110)}...
            </p>
            <NavLink to={`/menu/${el.strCategory}`}>
              <button className="btn btn-warning w-100">Find More</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
