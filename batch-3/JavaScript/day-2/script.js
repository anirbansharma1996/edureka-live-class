// String
var str = "edurekA";
heightest_index = length - 1
length = heighest_index + 1
 console.log(str[0])
 console.log(str.length)
console.log(str.charAt(5))
console.log(str.indexOf('d'))
console.log(str.concat(" ","jalpaiguri"))
console.log(str + " "+"jalpaiguri")
console.log(str.includes("d"))
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.replace("rek","REK"))
console.log(str.repeat(2))
console.log(str.replace("ka"," ").repeat(3).includes("d"))
console.log(str.split(""))
console.log(str.slice(0,3)+"...")
console.log(str.slice(3))
const result = str.trim()
console.log(result.length)
console.log(str.substring(1,3))
console.log(str.charCodeAt(6))

var num = 100;
console.log(num.toString())
console.log(num.toString(2))

// Number
var n = 16.89378687;
console.log(Math.abs(n))
console.log(Math.ceil(n))
console.log(Math.floor(n))
console.log(Math.round(n))
console.log(Math.max(12,4,5,99))
console.log(Math.min(12,4,5,99))
console.log(Math.sqrt(n))
console.log(Math.PI)
console.log(Math.pow(2,53))
console.log(n.toFixed(2))
console.log(Math.floor(Math.random()*9999)+1000)
//------------------------------
// function CrackPassword(passkey){
//    let flag = true
//    let count = 0
//    while(flag){
//       let random = Math.floor(Math.random()*9999)+1000
//       console.log(random)
//       count ++
//       if(random===passkey){
//         flag=false
//         console.log('your passkey is',passkey,'after',count,'combinations')
//       }
//    }
// }
// CrackPassword(3551)

// Array
const arr = [6, 7, 8, 9, 0];
//const arr1 = new Array()
// data stored in array in index value pair
console.table(arr[0])
console.log(arr.at(1))
 arr.push(3)
 console.log(arr)
 arr.pop()
 arr.pop()
 arr.pop()
 arr.push(5)
 console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(9)
console.log(arr)
// Array stack structure = LIFO
// Array Queue structure = FIFO
arr.push(77);
console.log("push =>", arr);
arr.pop()
console.log("pop =>", arr);
arr.unshift(88);
console.log("unshift =>", arr);
arr.shift()
console.log("shift =>",arr)

console.log(arr.fill(1))
console.log(arr.join("~~"))
let arr2 = ["a","b","c"]
console.log(arr.concat(arr2))
// spread opt.
console.log([...arr,...arr2])

console.log(arr.reverse())
console.log(arr.includes())

// HOF
// foreach

arr.forEach((el) => {
  console.log(el * 3);
});

// map
let r2 = arr.map((el) => {
  return el * 2;
});
console.log(r2);

// filter
let r3 = arr.filter((el) => {
  return el < 7;
});
console.log(r3)
// reduce
let r4 = arr.reduce((el, current) => {
  return el + current;
}, 0);
console.log(r4)

// Object
// object stores data in KEY VALUE pair
// let obj1 = new Object()
// obj.key = value 
// obj[key] = value
let obj = {
  name: "anirban",
  age: 27,
  pin: 735101,
};

console.log(obj.pin);
let key = "age"
console.log(obj[key])
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
Object.freeze(obj)
let obj2 = {job:"web dev"}
console.log(Object.assign(obj,obj2))

// Function
// funtion keyword

function Sum(a=0,b=0){
  console.log(a+b)
}
Sum(5,9)



// arrow function 

 const Div = (a)=>{
  console.log(a/10)
 }
 Div(10)

 const Divfn = function(b){
  console.log(b/10)
 }
 Divfn(11)


// IIFE
(function(){
  console.log('iife')
})()

// Generator function

function* Generator(){
  for(let i=1;i<=5;i++){
    yield i
  }
}
const response = Generator()
console.log(response.next().value)
console.log(response.next().value)
console.log(response.next().value)
console.log(response.next().value)
console.log(response.next().value)


// function Count(){
//   for(let i =1 ;i<=5;i++){
//     console.log(i)
//   }
// }
// Count()