const gen = document.getElementById("gender");
const se_gen = document.getElementById("selected-gender");

gen.addEventListener("change", (e) => {
  se_gen.innerText = e.target.value;
});
// ------------------------------------

const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const calc = document.getElementById("calculate");
const root = document.getElementById("root");

calc.addEventListener("click", () => {
  let num_1 = document.createElement("p");
  num_1.innerText = `when ${n1.value} is sum up with `;
  let num_2 = document.createElement("p");
  num_2.innerText = ` ${n2.value} result is  ->`;
  let ans = document.createElement("h3");
  ans.innerText = Number(n1.value) + Number(n2.value);

  root.append(num_1, num_2, ans);
});
//------------------------------------

const pass_one = document.getElementById("pass-1");
const pass_two = document.getElementById("pass-2");
const check = document.getElementById("check");
const ot = document.getElementById("output");

check.addEventListener("click", () => {
  if (pass_one.value === pass_two.value) {
    ot.innerText = "Password Matched";
  } else {
    ot.innerText = "Incorrect Password";
  }
});
//------------------------------

const pass = document.getElementById("pass");
const view = document.getElementById("view");

let count = 1;
view.addEventListener("click", () => {
  count++;
  if (count % 2 === 0) {
    pass.type = "text";
    view.innerText = "hide";
  } else {
    pass.type = "password";
    view.innerText = "show";
  }
});
//--------------------
const start = document.getElementById("start");
const time = document.getElementById("time");
start.addEventListener("click", () => {  
  setInterval(() => {
    let t = new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();
    time.innerText = `Time is : ${hr > 12 ? hr-12+"PM" : hr+"AM"} : ${min} : ${sec}`;
  }, 1000);
});
