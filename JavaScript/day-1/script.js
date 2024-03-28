// variable 
var user_name = "Anirban"
var phone_number = 8976543211

console.log(user_name)
console.log(phone_number)

//Scoping 
//1.Global 
  var a = 3
//.2.Functional / Local 
function MyFunction(){
      let b = 2
      console.log('b inside function',b)
      console.log('a inside function',a)

}
MyFunction()
console.log('a outside function',a)

//3.Block 

{
    let c = 7
    console.log(c)
}
//Lexical scope
function Outter(){
let z = 6
   function Inner(){
     console.log(z)
   }
   Inner()
}
Outter()


// Data types 

//[] - Primitive 

// 1. Number 
console.log( typeof 1)
// 2. String
console.log(typeof "f")
// 3. Boolean
console.log(typeof true)
console.log(typeof false)
// 4. Undefined
console.log(typeof undefined)
// 5. null
console.log(typeof null)
// 6. BigInt
console.log(typeof 1n)
// 7. Symbol
console.log( typeof Symbol("a"))
// 8. NaN
console.log(typeof NaN)
console.log( isNaN("a"))


console.log(typeof typeof true)
console.log(typeof "1")
console.log(typeof +"1")
console.log(1 + +"1")
console.log("1" + 1)
console.log("1" - 1)
console.log(typeof +("a"))


//[] - Non Primitive / Reference data type

// 1. Array
   var a= []
   console.log(typeof [])
// // 2. Object
  var b={}
  console.log(typeof {})
// // 3. Function
 function f(){

 }
 f()
 console.log( typeof f)

// VAR / LET / CONST 

var a = 4
var a ="v"
console.log(a)

let b = 6
    b = "S"
console.log(b)

const c = 9
