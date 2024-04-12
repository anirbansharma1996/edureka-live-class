const root = document.getElementById("root");
const btn = document.getElementById("change");

btn.addEventListener("click", () => {
  root.style.backgroundColor = "green";
  name_div.style.color = "white";
});

let arr = ["a", "b", "c"];


arr.forEach((el) => {
  const nam = document.createElement("h3");
  nam.innerText = el

  root.append(nam)
});
