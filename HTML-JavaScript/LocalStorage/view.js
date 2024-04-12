//view.js

const root = document.getElementById("root");
const error = document.getElementById("error");
const userArray = JSON.parse(localStorage.getItem("USER")) || [];

if (userArray.length === 0) {
  error.innerText = "No User Found";
} else {
  function RenderData() {
    root.innerHTML = "";
    userArray.map((element) => {
      const main = document.createElement("div");

      const userName = document.createElement("h4");
      userName.innerText = element.name;
      const userEmail = document.createElement("p");
      userEmail.innerText = element.email;

      main.append(userName, userEmail);
      root.append(main);
    });
  }
  RenderData();
}
