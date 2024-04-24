const root = document.getElementById("root");
const single = document.getElementById("single");
const BASE_URL = "https://fakestoreapi.com/products";
const sort = document.getElementById("sort-by-price");
const filter_cat_1 = document.getElementById("category-1");
const filter_cat_2 = document.getElementById("category-2");
const filter_cat_3 = document.getElementById("category-3");
const filter_cat_4 = document.getElementById("category-4");
const reset = document.getElementById("reset-btn");
// const mobile_sidebar_toggle = document.getElementById("mobile-sidebar-toggle");
// const mobile_sidebar_inside = document.getElementById("mobile-sidebar-inside");

// let flag = true;
// mobile_sidebar_toggle.addEventListener("click", () => {
//   if (flag === true) {
//     mobile_sidebar_inside.style.display = "none";
//   } else {
//     mobile_sidebar_inside.style.display = "block";
//   }
//   flag = !flag;
// });

//
let data;
let  isLoading = false
async function GetData() {
  try {
    isLoading = true
    const response = await fetch(BASE_URL);
    data = await response.json();
    isLoading=false
    ShowData(data);
  } catch (error) {
    isLoading=false
    console.log(error.message);
  }
   
 
  
  
}
GetData();

if(isLoading === true){
  single.style.display="none"
  root.innerHTML = `<h1>Loading...</h1>`
}


function ShowData(arr) {
  root.innerHTML = "";
  single.style.display="none"
  document.getElementById(
    "product-count"
  ).innerText = `Product Count : ${arr.length}`;

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
    btn_div.className = "buttons";
    let cart_btn = document.createElement("button");
    cart_btn.innerText = "Add To Cart";
    cart_btn.addEventListener('click',()=>{
      AddToCart(item)
    })


    let more_btn = document.createElement("button");
    more_btn.innerText = "More";
    more_btn.addEventListener("click", () => {
      GetSingleData(item.id);
    });

    btn_div.append(cart_btn, more_btn);

    main.append(image, category, title,  price, btn_div);
    root.append(main);
  });
}

//CART
  let cart = JSON.parse(localStorage.getItem("b4-cart")) || [] 
  function AddToCart(data){
    
     cart.push(data)
     localStorage.setItem('b4-cart',JSON.stringify(cart))
     alert('added to cart')
  }


// SORTING
sort.addEventListener("change", (e) => {
  if (e.target.value === "l-h") {
    data = data.sort((a, b) => a.price - b.price);
    ShowData(data);
  } else {
    data = data.sort((a, b) => b.price - a.price);
    ShowData(data);
  }
});
// FILTER
filter_cat_1.addEventListener("click", (e) => {
  let f_data = data.filter(
    (el) => el.category === e.target.innerText.toLowerCase()
  );
  ShowData(f_data);
});
filter_cat_2.addEventListener("click", (e) => {
  let f_data = data.filter(
    (el) => el.category === e.target.innerText.toLowerCase()
  );
  ShowData(f_data);
});
filter_cat_3.addEventListener("click", (e) => {
  let f_data = data.filter(
    (el) => el.category === e.target.innerText.toLowerCase()
  );

  ShowData(f_data);
});
filter_cat_4.addEventListener("click", (e) => {
  let f_data = data.filter(
    (el) => el.category === e.target.innerText.toLowerCase()
  );

  ShowData(f_data);
});
//RESET
reset.addEventListener("click", () => {
  ShowData(data);
  root.style.display="block";
});

// SINGLE DATA
function GetSingleData(id) {
  async function fetchSingleData() {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      ShowSingleData(data)
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchSingleData()
}

function ShowSingleData(item){
  root.style.display="none";
  single.style.display="block"
  //----------------------
  single.innerHTML=""
  let img_div = document.createElement('div')
  let info_div = document.createElement('div')

    let title = document.createElement("h4");
    title.innerText = item.title;

    let category = document.createElement("span");
    category.innerText = item.category;

    let description = document.createElement("p");
    description.innerText = item.description

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

    

    img_div.append(image)
    info_div.append(category, title, description, price, rating)
    single.append(img_div,info_div)

}


