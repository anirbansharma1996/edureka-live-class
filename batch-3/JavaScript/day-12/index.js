const num = [1, 2, 3, 4];

console.log(num.indexOf(4))
console.log(num.includes(1))
console.log(num.find((el)=>el >= 3))
// HOF
// foreach  map reduce filter
 num.forEach((el)=>console.log(el*3) )
const res =num.map((el)=>el*3)
console.log(res)
console.log(num)

const filteredData = num.filter((el)=> el > 3)
console.log(filteredData)

const sum = num.reduce((acc,value)=> acc * value , 1)
console.log(sum)

console.log(num.every((el)=>el>3))
console.log(num.some((el)=>el>3))
console.log(num.fill("A",1,4))

//ascii
const num2 = [3,1,5,8,0,32,55]
console.log(num2.sort((a,b)=>a-b))
console.log(num2.sort((a,b)=>b-a))
const alp = ['a','f',"A",'b','z','g']
console.log(alp.sort())

/// FUNCTIONS

function Sum(a,b) {
  console.log(a+b);
}

Sum(10,12);

function Offer(bill){
    if(bill>=1000){
        console.log('10% off')
    }
    else if(bill <= 999 && bill >=500 ){
        console.log("5% off")
    }
    else{
        console.log('No offer for you')
    }
}
Offer(100)
//------------------------
 function myFunc(){}
myFunc()
const myFunc1 = ()=>{}
myFunc1()
//IIFE
(function(){
    console.log("hello")
})()
//--------------------------
function Sum(a,b){
   return function(){
      return a+b
    }
}
console.log(Sum(3,5)())
//hosting
Sum(3,7)
function Sum(a,b){
    console.log(a+b)
}
const Mult =(a,b)=>{
    console.log(a*b)
}
Mult(3,5)
//Explain passed by value and passed by reference.
var a = 5
var user = {name:"Anirban"}

