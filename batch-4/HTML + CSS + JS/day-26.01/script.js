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
  console.log(arr);
  arr.forEach((el) => {
    const child = document.createElement("div");
    child.className = "child";

    let image = document.createElement("img");
    image.src = el.image;
    image.alt = el.title;
    let title = document.createElement("h3");
    title.innerText = el.title;
  
    let desc = document.createElement("details");
    let s = document.createElement('summary')
    s.innerText = "More"
    let d = document.createElement("p");
    d.innerText = el.description;
    desc.appendChild(s)
    desc.appendChild(d);
 

    let category = document.createElement("p");
    category.innerText = el.category;

    let p_div = document.createElement('div')
    p_div.className='price_div'

     
    let old_p = document.createElement("s")
    let INR = Math.round(el.price)*83
    let disc = INR / 10 
    let O_P = Math.round(el.price)*83 + disc
    old_p.innerText= `₹ ${O_P}`
     
    let price = document.createElement("h2");
    price.innerText = `₹ ${Math.round(el.price)*83}/-`


    p_div.append(old_p,price)

    let rating = document.createElement('div')
    rating.className='rating_div'

    let rate = document.createElement("h4");
    rate.innerText = `Rating : ${el.rating.rate}/5`;
    let count = document.createElement("h4");
    count.innerText = `Reviews : ${el.rating.count}`;
     
    rating.append(rate,count)


    child.append(image, category, title, desc, rating,p_div);
    root.append(child);
  });
}
