const root = document.getElementById("root");
const URL = "https://catfact.ninja/fact";

const fetchdata = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    Showdata(data);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
fetchdata();

const Showdata = (cat) => {
  root.innerHTML = "";
  const type = document.createElement("h1");
  type.innerText = cat.fact;

  const otherFact = document.createElement("button");
  otherFact.innerText = "Read More ! ";

  otherFact.addEventListener("click", () => {
    fetchdata();
  });

  root.append(type, otherFact);
};
