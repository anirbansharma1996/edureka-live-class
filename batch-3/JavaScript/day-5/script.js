<<<<<<< HEAD
// if , else if and else statement
//1.check if a number is even or odd
const number = 4567575;
if (number % 2 === 0) {
  console.log(number +" is even")
} else {
  console.log(number +" is odd")
}
// check if an alphabet is vowel or consonant

const alphabet = "x";

if (
  alphabet === "a" ||
  alphabet === "e" ||
  alphabet === "i" ||
  alphabet === "o" ||
  alphabet === "u"
) {
  console.log(alphabet, " is vowel");
} else {
  console.log(alphabet, " is consonant");
}

const num = "123";
if (num === 123) {
   console.log("login success");
} else {
  console.log("invalid password");
}

//check if a number is equal to 10
// check if a number is divisible by 3
const digit = 909090;
if (digit % 3 === 0) {
  console.log("divisible");
} else {
  console.log("not divisible");
}

// offer - price

const bill = 599;

if (bill >= 1000) {
  console.log("you have to pay", bill - 100);
} else if (bill >= 500 && bill <= 999) {
  console.log("you have to pay", bill - 50);
} else {
  console.log("you have to pay", bill);
}

// check if a number is between the range of 50 - 100


// switch case statement

var day = new Date().getDay();

switch (day) {
  case (day = 1):
    console.log("it's monday");
    break;
  case (day = 2):
    console.log("it's Tue");
    break;
  case (day = 3):
    console.log("it's wed");
    break;
  case (day = 4):
    console.log("it's thru");
    break;
  case (day = 5):
    console.log("it's fri");
    break;
  case (day = 6):
    console.log("it's sat");
    break;
  case (day = 7):
    console.log("it's sun");
    break;
  default:
    console.log("not found");
    break;
}

var condition = "SUCCESS";

switch (condition) {
  case (condition = "REQUEST"):
    console.log("requested...");
    break;
  case (condition = "SUCCESS"):
    console.log("success...");
    break;
  case (condition = "FAIL"):
    console.log("failed...");
    break;
  default:
    console.log("not found");
}

const arr = [1,4,3]
   //index   0 1 2
  // <array name>[<index number>]
if (arr[1]===4) {
    console.log('found')
}
else{
    console.log('not found')
}
=======
//1
console.log(2+2)
//2
window.alert("do you want to logout")
//--- extra ---
let response = window.confirm('do you want to delete this item')
 console.log(response)
let data = window.prompt('enter your name')
 console.log(data)
//3
document.write("hello world")
//4
const tag = document.getElementById("result")
tag.innerHTML="Hello World"





>>>>>>> 7a5dcb7f25b98065a53ad6244b0e61d326635a56
