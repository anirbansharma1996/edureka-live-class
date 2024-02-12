const root = document.getElementById("root");
const URL = "https://fakestoreapi.com/products";

const fetchData = async () => {
  try {
    const response = await fetch(URL);
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

    const category = document.createElement("p");
    category.innerText = el.category;

   const rate_data = document.createElement("div")
   rate_data.className='rate'

    const rate = document.createElement("p");
    rate.innerText = el.rating.rate+"/5";

    const count = document.createElement("p");
    count.innerText = "vote"+el.rating.count;
    const image = document.createElement("img");
    image.src = el.image;

    const price = document.createElement("p");
    price.style.fontSize="25px"
    price.innerText = "₹ "+(Math.ceil(el.price*82)+100);

    const read = document.createElement('button')
    read.innerText="Read More"
    read.className="read"

   read.addEventListener("click",()=>{
      localStorage.setItem("fake-store",JSON.stringify(el))
      setTimeout(()=>{
       window.location.href="details.html"
      },500)
   })

    rate_data.append(rate,count)
    main.append(image,category, title,  rate_data, price,read);
    root.append(main);
  });
}


