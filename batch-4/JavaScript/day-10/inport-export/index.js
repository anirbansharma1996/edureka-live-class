import { Sum, Substraction, Multiply, Division,NavFn } from "./operation.js";

const navbar = document.getElementById('navbar')
const n = NavFn()
navbar.innerHTML = n



console.log(Sum(6, 8));
console.log(Substraction(6, 8));
console.log(Multiply(6, 8));
console.log(Division(64, 8));
