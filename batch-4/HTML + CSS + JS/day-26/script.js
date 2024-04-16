const root = document.getElementById("root");
const BASE_URL = "https://fakestoreapi.com/products";

async function GetData() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    ShowData(data);
  } catch (error) {
    console.log(error.message);
  }
}
GetData();

function ShowData(arr) {
  arr?.forEach((item) => {
    let main = document.createElement("div");
    main.className = "main";

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

    let rating = document.createElement("div");
    rating.className = "rating";
    let rate = document.createElement("p");
    rate.innerText = `Rating : ${item.rating.rate}/5`;
    let count = document.createElement("p");
    count.innerText = `Votes : ${item.rating.count}`;
    rating.append(rate, count);

    let btn_div = document.createElement("div");
    btn_div.className='buttons'
    let cart_btn = document.createElement("button");
    cart_btn.innerText = "Add To Cart";
    let buy_btn = document.createElement("button");
    buy_btn.innerText = "Buy Now";
    btn_div.append(cart_btn, buy_btn);

    main.append(image, category, title, description, price, rating, btn_div);
    root.append(main);
  });
}

// category -> span
// description -> p
// id -> alt
// image -> img
// price -> p
// rating -> p
// title -> h4
