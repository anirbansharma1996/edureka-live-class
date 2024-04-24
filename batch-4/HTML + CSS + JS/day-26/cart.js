const cart = document.getElementById("cart");
const total = document.getElementById("total");

let data = JSON.parse(localStorage.getItem("b4-cart")) || [];
ShowData(data);

function ShowData(arr) {
  let p = arr.map((el) => el.price);
  let sum = Math.round(p.reduce((acc, curr) => acc + curr) * 83);
  total.innerText = `Total : ₹${sum}`;
  cart.innerHTML = "";

  arr?.forEach((item) => {
    let cart_main = document.createElement("div");
    cart_main.className = "cart_main";

    let title = document.createElement("h4");
    title.innerText = item.title;

    let category = document.createElement("span");
    category.innerText = item.category;

    let description = document.createElement("p");
    description.innerText = item.description.slice(0, 100) + "...";

    let price = document.createElement("h2");
    price.innerText = `₹ ${Math.round(item.price) * 83} /-`;

    let image = document.createElement("img");
    image.src = item.image;

    let rm_btn = document.createElement("button");
    rm_btn.innerText = "Remove";
    rm_btn.addEventListener("click", () => {
      RemoveItem(item.id);
    });

    cart_main.append(image, category, title, price, rm_btn);
    cart.append(cart_main);
  });
}

function RemoveItem(id) {
  data = data.filter((el) => el.id !== id);
  localStorage.setItem("b4-cart", JSON.stringify(data));
  ShowData(data);
}
