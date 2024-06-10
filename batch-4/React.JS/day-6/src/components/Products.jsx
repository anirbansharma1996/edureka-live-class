import React, { useEffect, useContext } from "react";
import ShowData from "./ShowData";
import { Loading } from "./Loading";
import { GrPowerReset } from "react-icons/gr";
import { ApiContext } from "../context/ApiContext";

export default function Products() {
  const {
    filterData,
    isLoading,
    error,
    fetchdata,
    handleSort,
    handleCategory,
    handleSearchInput,
  } = useContext(ApiContext);

  useEffect(() => {
    fetchdata();
  }, []);

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
