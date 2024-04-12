//<button id="btn">Login</button>
const button = document.getElementById("btn")

button.addEventListener("click",()=>{
   console.log("Clicked")
})
//<input type="text" id="username">
const username = document.getElementById("username")
username.addEventListener("input",()=>(
    console.log(username.value)

))

// <div id="root"></div>
const root = document.getElementById("root")

root.addEventListener("mouseover",()=>(
    root.innerText="OVER"

))
root.addEventListener("mouseout",()=>(
    root.innerText=""
))

//css
// #root{
//     height: 40px;
//     width: 50px;
//     background-color: blue;
//     color: white;
// }
//-----------------------------
//<button id="btn1">ADD</button>
const button1 = document.getElementById("btn1");
// <input type="text" id="todo">
const todo = document.getElementById("todo");

let bag;
todo.addEventListener("input", () => (bag = todo.value));

let array = [];
button1.addEventListener("click", () => array.push(bag))
console.log(array);

// <input type="text" id="email">

const email = document.getElementById("email")

email.addEventListener("keyup",(event)=>
   event.key === " " ? console.log("pause") : console.log("other key")

)


//--------- HTML -------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <button id="btn">Login</button>
//     <input type="text" id="username">
//     <div id="root"></div>


//     <input type="text" id="todo">
//     <button id="btn1">ADD</button>
       
//     <input type="text" id="email">

//     <script src="script.js"></script>
// </body>
// </html>