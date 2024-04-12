import { CustomNav } from "../../components/navbar.js";

const navbar = CustomNav();
document.body.prepend(navbar);

const cart = document.getElementById("cart");
const cartCount = document.getElementById("cart-item-count");
const cartTotal = document.getElementById("cart-item-total");

const cart_data = JSON.parse(localStorage.getItem("fakestore-cart")) || [];

ShowData(cart_data);

function ShowData(data) {
  cartCount.innerText = data.length;
  let SUM = 0;
  data.map((el, i) => {
    SUM = Math.ceil(SUM + el.price * 82);

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

    const remvBtn = document.createElement("button");
    remvBtn.innerText = "Remove Item";

    remvBtn.addEventListener("click", () => {
      RemoveItem(i);
    });

    rate_data.append(rate, count);
    main.append(image, category, title, rate_data, price, remvBtn);
    cart.append(main);
  });
  cartTotal.innerText = SUM;
}

function RemoveItem(index) {
  cart_data.splice(index, 1);
  localStorage.setItem("fakestore-cart", JSON.stringify(cart_data));
  alert("item removed successfully ... ");
  window.location.reload()
}
