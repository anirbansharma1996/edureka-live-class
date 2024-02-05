const open_modal = document.getElementById("open");
const modal = document.getElementById("modal-container");
const close_modal = document.getElementById("close");
const add_button = document.getElementById("add");
const root = document.getElementById("root");
const name_arr = [];

open_modal.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.style.flexDirection = "column";
});

add_button.addEventListener("click", () => {
  const user_name = document.getElementById("name").value;

  const user_obj = { name: user_name };
  name_arr.push(user_obj);

  root.innerHTML=""
  for(let i=0;i<name_arr.length;i++){
    const userName = document.createElement("p")
    userName.innerText=name_arr[i].name

    root.append(userName)
  }
  modal.style.display = "none";
});

close_modal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    modal.style.display = "none";
  }
});


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <button id="open">OPEN MODAL</button>

//     <div id="modal-container">
//       <input id="name" type="text" />
//       <br />
//       <button id="add">ADD</button>
//       <br/>
//       <button id="close">CLOSE MODAL</button>
//       <hr />
//     </div>
//    <div id="root"></div>
//     <script src="script.js"></script>
//   </body>
// </html>
