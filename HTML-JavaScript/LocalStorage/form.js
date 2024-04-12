const output = document.getElementById("output");
const submit = document.getElementById("submit");

let user_array = JSON.parse(localStorage.getItem("USER")) || [];

submit.addEventListener("click", () => {
  const user_name = document.getElementById("user_name").value;
  const user_email = document.getElementById("user_email").value;
  const user_password = document.getElementById("user_password").value;

  if (user_name === "" || user_email === "" || user_password === "") {
    output.innerText = "Empty Filed";
    output.style.color = "red";
  } else {
    const user_object = {
      name: user_name,
      email: user_email,
      password: user_password,
    };
    user_array.push(user_object);
    localStorage.setItem("USER", JSON.stringify(user_array));
    setTimeout(() => {
      output.innerText = "Successfully Stored";
      output.style.color = "green";
    }, 1500);
  }
});
