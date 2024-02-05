// Number 
const maximum = Math.max(2,8,1)
console.log(maximum)
console.log(Math.min(2,8,1))
console.log(Math.round(2.5687))
console.log(Math.abs(-5))
console.log(Math.floor(2.3))
console.log(Math.ceil(2.367))
console.log(Math.pow(3,3))

const random = Math.random()*9999 + 100
const rounded = Math.round(random)
console.log(rounded)

//if ( condition ? ) { }
//else if ( condition ? ) { }
//else { }

//ternery opt.

// <condition> ? <output : if condition is true> : <output : if condition is false>
// <condition-1> ? <output : if condition-1 is true> : <condition-2>  ? <output : if condition-2 is true> : <output : if no condition matches>
const bool = "abcde";

bool === "abcd" ? console.log("true") : console.log("false");

const email = "abc@gmail.com";
const password = 12345;

email === "abc@gmail.com" && password === 1234
  ? console.log("login")
  : console.log("invalid");

const age = 19;

age >= 18
  ? console.log("adult")
  : age >= 10 && age < 18
  ? console.log("kid")
  : console.log("baby");

// loops
// while loop ,

let i = 1; // initital value 1
while (i <= 5) {// condition 2
  console.log(i); // output 3
  i++; // increment 4
}

//do while loop ,
let j = 1; // initital value 1
do {
  console.log(j); //output 2
  j++; //increments 3
} while (j <= 5); // condition 4

//for loop

for (let k = 1; k <= 5; k++) {
  console.log(k);
}
// for(initial value ; condition ; increment){
//console.log()
//}

const str = "edureka";

for (let l = 0; l < str.length; l++) {
  if (str[l] === "r") {
    console.log("r found at index", l);
    break;
  }
}
