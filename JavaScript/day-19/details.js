const details = document.getElementById("details")
const data = JSON.parse(localStorage.getItem("fake-store"))

const ShowData = (el)=>{
    const img_div = document.createElement("div")
    const info_div = document.createElement("div")

    const title = document.createElement("h4");
    title.innerText = el.title;

    const description = document.createElement("p")
    description.innerText=el.description

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

   img_div.append(image)
   info_div.append(category, title,description,  rate_data, price);

   details.append(img_div,info_div)
   

}
ShowData(data)