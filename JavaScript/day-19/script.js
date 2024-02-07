const root = document.getElementById("root");
const URL = "https://fakestoreapi.com/products";

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    //console.log(await response.json())
    const data = await response.json();
    ShowData(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();

function ShowData(arr) {
  arr.map((el, id) => {
    const main = document.createElement("div");
    main.className = "main";

    const title = document.createElement("h4");
    title.innerText = el.title;

    const description = document.createElement("p");
    description.innerText = el.description.slice(0,60)+"...";

    const category = document.createElement("p");
    category.innerText = "Category : "+el.category;

    const rate = document.createElement("p");
    rate.innerText = el.rating.rate+"/5";

    const count = document.createElement("p");
    count.innerText = el.rating.count;

    const price = document.createElement("p");
    price.innerText = el.price;

    const image = document.createElement("img");
    image.src = el.image;

    main.append(image, title, description, category, rate, count, price);
    root.append(main);
  });
}


