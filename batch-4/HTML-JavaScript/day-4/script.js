const root = document.getElementById("root");
const submit = document.getElementById("submit-btn");
const user_array = [];

submit.addEventListener("click", () => {
  //console.log('ok')
  const user_name = document.getElementById("user_name").value;
  const user_email = document.getElementById("user_email").value;
  const user_mobile = document.getElementById("user_mobile").value;
  const user_address = document.getElementById("user_address").value;
  const user_image = document.getElementById("user_image").value;
  //console.log(user_name,user_email,user_mobile)

  if (
    user_name === "" ||
    user_email === "" ||
    user_mobile === "" ||
    user_address === ""
  ) {
    alert("Please fill the form first");
  } else {
    let user_object = {
      name: user_name,
      email: user_email,
      mobile: user_mobile,
      address: user_address,
      image: user_image,
    };
    //console.log(user_object)

    user_array.push(user_object);

    //console.log(user_array)
    root.innerHTML = "";
    for (let i = 0; i < user_array.length; i++) {
      const container = document.createElement("div");

      const userName = document.createElement("p");
      userName.innerText = "NAME : " + user_array[i].name;

      const userEmail = document.createElement("p");
      userEmail.innerText = "EMAIL : " + user_array[i].email;

      const userMobile = document.createElement("p");
      userMobile.innerText = "MOBILE : " + user_array[i].mobile;

      const userAddress = document.createElement("p");
      userAddress.innerText = "ADDRESS : " + user_array[i].address;

      const userImage = document.createElement("img");
      userImage.src = user_array[i].image;

      const hr = document.createElement("hr");
      container.append(
        userImage,
        userName,
        userEmail,
        userMobile,
        userAddress,
        hr
      );

      root.append(container);
    }
  }
});

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//     <div>
//       <input id="user_name" type="text" />
//       <input id="user_email" type="email" />
//       <input id="user_mobile" type="tel" />
//       <button id="submit-btn">Add</button>
//     </div>
//     <div id="root"></div>

//     <script src="script.js"></script>
//   </body>
// </html>
