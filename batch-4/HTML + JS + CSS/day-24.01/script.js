let storage = [];
// signup
const s_form = document.getElementById("s-form");
const message = document.getElementById("message");
// signup logic
s_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const s_user_name = document.getElementById("s-username").value;
  const s_email = document.getElementById("s-email").value;
  const s_password = document.getElementById("s-password").value;

  if (s_user_name !== "" && s_email !== "" && s_password !== "") {
    let signup_object = {
      username: s_user_name,
      email: s_email,
      password: s_password,
    };
    storage.push(signup_object);
    message.style.color = "green";
    message.innerText = "signup successfull";
  } else {
    message.innerText = "please fill the form first ... ";
  }
  console.log(storage);
});
// login

const l_form = document.getElementById("l-form");
const l_message = document.getElementById("l-message");

// login logic

l_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const l_email = document.getElementById("l-email").value;
  const l_password = document.getElementById("l-password").value;

  let flag = false;
  let num = 0;
  storage.find((el) => {
    if (el.email === l_email && el.password === l_password) {
      flag = true;
      num = Math.floor(Math.random() * 9999999 + 1);
    }
  });
  flag
    ? (l_message.innerText = `login success with token ${num}`)
    : (l_message.innerText = "invalid");
});

//-------------------------------
let body = document.getElementById("body");
let theme = document.getElementById("theme");
let fl = true;

theme.addEventListener("click", () => {
  if (fl) {
    theme.innerText = "LIGHT";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    theme.innerText = "DARK";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
  fl = !fl;
});
