// //if

// //age => 18 = 'adult'  , 12 => age <= 18 = kid , 12<= age = 'child'

const age = 14;
if (age >= 18) {
  console.log("adult");
} else if (age >= 12 && age < 18) {
  console.log("kid");
} else {
  console.log("child");
}

// // ternnery opt.

// // condition ? true : false;
// // condition ? true ? condition ? true : false;

age >= 18
  ? console.log("adult")
  : age >= 12 && age < 18
  ? console.log("kid")
  : console.log("child");

// // switch case
// //e.g:1
var a = 1;

switch (a) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  default:
    console.log("invalid input");
}

// //e.g : 2
const state = "failed";

switch (state) {
  case "loading":
    console.log("data is loading...");
    break;
  case "success":
    console.log("successfuly data loaded...");
    break;
  case "failed":
    console.log("unable to fetch data ...");
    break;
  default:
    console.log("server error ... 503");
    break;
}

//LOOPS

// for loop [string / array / number]

//for( <initialization> ; <condition> ; <increment/decrement >){
// code
//}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop [string / array / number]

//<initialization>
//while(<condition>){
// code
//<increment/decrement>
//}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do ... while [string / array / number]

//<initialization>
// do{
//code
//<increment/decrement>

//}while(<condition>)

let i = 1;
do {
  console.log(i);
  i++;
} while (i < 0);

// for ... in  [array ]

let arr = [1, 3, 5];
for (el of arr) {
  console.log(el);
}

// for ... of [object]
let student = { name: "pritam", age: 26, gender: "male" };

for(let key in student){
  console.log(student[key])

}