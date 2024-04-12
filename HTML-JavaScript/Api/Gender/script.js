const root = document.getElementById("root");
const btn = document.getElementById("button");
const username = document.getElementById("username");

let bag = "";
username.addEventListener("change", (e) => {
  bag = bag + e.target.value;
});

btn.addEventListener("click", () => {
  fetchData(bag);
  bag=""
});

const fetchData = async (nam) => {
  try {
    const r = await fetch(`https://api.genderize.io?name=${nam}`);
    const d = await r.json();
    showData(d);
  } catch (error) {
    console.log(error);
  }
};

const showData = (obj) => {
  root.innerHTML = "";

  const name = document.createElement("p");
  name.innerText = obj.name;

  const gender = document.createElement("h2");
  gender.innerText = obj.gender;

  root.append(name, gender);
};
