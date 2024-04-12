import { CustomNav } from "../../components/navbar.js";

const navbar = CustomNav();
document.body.prepend(navbar);

const root = document.getElementById("root");
const prices = document.getElementById("price");
const category = document.getElementById("category");
const p_count = document.getElementById("count");
const search = document.getElementById("searchInput");

const URL = "https://fakestoreapi.com/products";

// ----- Debouce Function ------

function Debounce(func, time) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, time);
  };
}

const limitFetchData = Debounce(fetchData, 1000);
//----------------------------
prices.addEventListener("change", (e) => {
  fetchData(e.target.value, null, null);
});

category.addEventListener("change", (e) => {
  fetchData(null, e.target.value, null);
});

search.addEventListener("input", (e) => {
  limitFetchData(null, null, e.target.value);
});

async function fetchData(query = "", category = "", search = "") {
  console.log(search);

  try {
    const response = await fetch(URL);
    let data = await response.json();

    if (search) {
      data = data.filter((el) =>
        el.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (query === "low") {
      data = data.sort((a, b) => a.price - b.price);
    } else if (query === "high") {
      data = data.sort((a, b) => b.price - a.price);
    } else if (category === "men's clothing") {
      data = data.filter((el) => el.category === category);
    } else if (category === "women's clothing") {
      data = data.filter((el) => el.category === category);
    } else if (category === "jewelery") {
      data = data.filter((el) => el.category === category);
    } else if (category === "electronics") {
      data = data.filter((el) => el.category === category);
    } else {
      ShowData(data);
    }
    ShowData(data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();

function ShowData(arr) {
  root.innerHTML = "";
  p_count.innerText = arr.length;
  arr.map((el) => {
    const main = document.createElement("div");
    main.className = "main";

    const title = document.createElement("h4");
    title.innerText = el.title;

    const category = document.createElement("p");
    category.innerText = el.category;

    const rate_data = document.createElement("div");
    rate_data.className = "rate";

    const rate = document.createElement("p");
    rate.innerText = el.rating.rate + "/5";

    const count = document.createElement("p");
    count.innerText = "vote" + el.rating.count;
    const image = document.createElement("img");
    image.src = el.image;

    const price = document.createElement("p");
    price.style.fontSize = "25px";
    price.innerText = "₹ " + (Math.ceil(el.price * 82) + 100);

    const read = document.createElement("button");
    read.innerText = "Read More";
    read.className = "read";

    read.addEventListener("click", () => {
      localStorage.setItem("fake-store", JSON.stringify(el));
      setTimeout(() => {
        window.location.href = "../details/details.html";
      }, 500);
    });

    rate_data.append(rate, count);
    main.append(image, category, title, rate_data, price, read);
    root.append(main);
  });
}
