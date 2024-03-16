import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../../animation/Loading";

const DataFetch = () => {
  const [data, setData] = useState([]);
  // we need to take an filter data [] array inititaly
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [psort, setPsort] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const r = await fetch("https://fakestoreapi.com/products");
        const d = await r.json();
        setIsLoading(false);
        setData((prev) => d);
        // store the filter data value here
        setFilteredData((prev) => d);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [psort]);

  if (isLoading) {
    return <Loading />;
  }

  const handleSort = (e) => {
    let sortedData = [...data];
    if (e.target.value === "l-h") {
      sortedData.sort((a, b) => a.price - b.price);
      return setFilteredData(sortedData);
    } else if (e.target.value === "h-l") {
      sortedData.sort((a, b) => b.price - a.price);
      return setFilteredData(sortedData);
    } else {
      return setPsort(!psort);
    }
  };
  // main filtering function
  const handleFilter = (e) => {
    let category = e.target.value;

    if (
      category === "men's clothing" ||
      category === "jewelery" ||
      category === "electronics" ||
      category === "women's clothing"
    ) {
      let filtered = data.filter((el) => el.category === category);
      setFilteredData(filtered);
    } else {
      setPsort(!psort);
    }
  };
// SEARCH FUNCTIONALITY USING DEBOUNCE
  const debounce = (func, delay) => {
    let time;
    return (...args) => {
      clearTimeout(time);
      time = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearchData = debounce((text) => {
    let s_data = filteredData.filter((el) =>
      el.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(s_data);
  }, 600);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    handleSearchData(e.target.value);
  };

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "3%",
        }}
      >
        <div>
          SORT BY PRICE &nbsp;
          <select onChange={handleSort}>
            <option value="">Reset...</option>
            <option value="l-h">low to high</option>
            <option value="h-l">high to low</option>
          </select>
        </div>
        <div>
          FILTER BY CATEGORY &nbsp;
          <select onChange={handleFilter}>
            <option value="">Reset...</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
        <div>
          SEARCH PRODUCT &nbsp;
          <input type="text" onChange={handleSearch} value={search} />
          <button onClick={() => setPsort(!psort)}>X</button>
        </div>
      </div>

      <h5 style={{ textAlign: "center", marginBottom: "3%" }}>
        {filteredData?.length} Products Found
      </h5>
      <div className="parent">
        {/* instead of looping through the data array we are looping through the filteredData */}
        {filteredData?.map((el) => (
          <ProductCard props={el} />
        ))}
      </div>
    </section>
  );
};

export default DataFetch;
