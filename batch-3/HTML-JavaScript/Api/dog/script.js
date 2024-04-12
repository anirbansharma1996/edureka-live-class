const root = document.getElementById("root");
const URL = "https://dog.ceo/api/breeds/image/random";

const fetchData = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    showData(data);
    //console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();

const showData = (dog) => {
  root.innerHTML = "";
  const image = document.createElement("img");
  image.src = dog.message;
  image.style.width="200px"
  image.style.height="200px"

  const btn = document.createElement("button");
  btn.innerText = "Get New Image";
  btn.addEventListener("click", () => {
    fetchData();
  });

  root.append(image, btn);
};
