const root = document.getElementById("root");
const submit = document.getElementById("submit");
let user_array = [];

submit.addEventListener("click", () => {
  const user_name = document.getElementById("user_name").value;
  const user_position = document.getElementById("user_position").value;

  if (user_name === "" || user_position === "") {
    alert("Please enter valid details ");
  } else {
    const user_object = {
      name: user_name,
      position: user_position,
    };
    user_array.push(user_object);
    RenderData()
  }
});

function RenderData(){
    root.innerHTML = "";
    user_array.forEach((el,i) => {
      const container = document.createElement("div");
      container.className = "container";

      const userName = document.createElement("h4");
      userName.innerText = el.name;

      const userPosition = document.createElement("p");
      userPosition.innerText = el.position;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "REMOVE";

      deleteBtn.addEventListener("click",()=>{
         user_array.splice(i,1)
         RenderData()
      })

      container.append(userName, userPosition, deleteBtn);

      root.append(container);
    });
}


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="form">
//         <input id="user_name" type="text" placeholder="user name">
//         <select id="user_position">
//             <option value="" selected disabled>Choose...</option>
//             <option value="SDE-3">SDE 3</option>
//             <option value="SDE-2">SDE 2</option>
//             <option value="SDE-1">SDE 1</option>
//         </select>
//         <button id="submit">Add User</button>
//     </div>
//     <div id="root"></div>



//     <script src="script.js"></script>
// </body>
// </html>