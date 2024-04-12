import { CustomNav } from "../../components/navbar.js";

const navbar = CustomNav();
document.body.prepend(navbar);

const details = document.getElementById("details");
const data = JSON.parse(localStorage.getItem("fake-store"));

const ShowData = (el) => {
  const img_div = document.createElement("div");
  const info_div = document.createElement("div");

  const title = document.createElement("h4");
  title.innerText = el.title;

  const description = document.createElement("p");
  description.innerText = el.description;

  const category = document.createElement("p");
  category.innerText = el.category;

  const rate_data = document.createElement("div");
  rate_data.className = "rate";

  const rate = document.createElement("p");
  rate.innerText = el.rating.rate + "/5";

  const count = document.createElement("p");
  count.innerText = "vote " + el.rating.count;

  const image = document.createElement("img");
  image.src = el.image;

  const price = document.createElement("p");
  price.style.fontSize = "25px";
  price.innerText = "₹ " + (Math.ceil(el.price * 82) + 100);
//-----------------------------------------------------------
  const button_div = document.createElement("div");
  button_div.className = "details-btn-div";

  const add_to_cart = document.createElement("button");
  add_to_cart.innerText = "Add To Cart";

  add_to_cart.addEventListener("click", () => {
    AddToCart(data);
  });

  const buy_now = document.createElement("button");
  buy_now.innerText = "Buy Now";

  button_div.append(add_to_cart, buy_now);
//------------------------------------------------------
  img_div.append(image);
  rate_data.append(rate, count);
  info_div.append(category, title, description, rate_data, price, button_div);

  details.append(img_div, info_div);
};
ShowData(data);
//------------------------------------------------------
let cart = JSON.parse(localStorage.getItem("fakestore-cart")) || [];
function AddToCart(el) {
   cart.push(el);
  localStorage.setItem("fakestore-cart", JSON.stringify(cart));
    alert("Added to your cart");
}
