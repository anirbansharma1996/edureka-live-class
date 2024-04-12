// // For Loop Questions:
// //-----------------------------------------------
// // 1.Write a for loop that prints numbers from 1 to 10.
// let i=1
// while(i<=10){
//     console.log(i)
//     i++
// }
// let i =1
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// // 2.Create a for loop to iterate through a list of fruits and print each fruit.

// const fruits =["apple","orange","lemon"]

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// // 3.Use a for loop to calculate the sum of numbers from 1 to 100.

//   let sum = 0
//   for(let i=1;i<=100;i++){
//     sum = sum+i // sum+=i
// }
// console.log(sum)

// // 4.Write a for loop to print the even numbers between 1 and 20.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "is even");
//   } else {
//     console.log(i, "is odd");
//   }
// }

// // 5.Create a for loop to iterate through a string and print each character.
//   let str = 'edureka learning center'

//   for(let i=0;i<str.length;i++){
//     console.log(str[i])
//   }

// //----------------------------------------------
// // While Loop Questions:
// //----------------------------------------------
// // 1.Implement a while loop that counts from 1 to 5.

// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }

// // 2.Write a while loop to print multiples of 3 up to 30.

// let i = 1

// while(i<=10){
//     console.log(i*3)
//     i++
// }
// // 3.Create a while loop to find the factorial of a given number.

// let i=1
// let factorial = 1
// while(i<=5){
//     factorial=factorial*i 
//      i++
     
// }
// console.log(factorial)
// // 4.Implement a while loop to reverse a given string.
 
// let string = 'abcd' //'dcba'

// let i = string.length-1
// let bag = "" // dcba
// while(i>=0){
//    bag = bag+string[i] 
// //    // ""+"d"="d"
// //    // "d"+"c"="dc"
// //    //"dc"+'b'='dcb'
// //    //'dcb'+'a'='dcba'
//    i--
// }

// console.log(bag)

// // 5.Write a while loop to simulate a basic guessing game where the user has to guess a secret number.

// let i = 1
// let secret = 53

// while(i<=100){
//     if(i===secret){
//         console.log('found',i)
//         break;
//     }
//     i++
// }
// //pattern printing
// let bag = ""
// for(let i=1;i<=5;i++){
//     bag = bag+" []"
//      //   ""+[]=   []
//      //  []+[]=    [][]
//      //[][]+[]=    [][][]
//      //[][][]+[]=  [][][][]
//      //[][][][]+[]=[][][][][]
//     console.log(bag)
// }
// //reverse a string using for loop
// let str = 'local bus'
// let bag = ''
// for(let i = str.length-1;i>=0;i--){
//     bag = bag + str[i]
// }
// console.log(bag)

// //reverse pattern printing 
// let bag = ''
// for(let i =10 ;i>=1;i--){
//     bag = bag + " "+i
//     console.log(bag)
// }
// // nested for loop
// for(let i=1;i<=5;i++){
//     let bag = ""
//     for(let j=1;j<=5;j++){
//         bag=bag+" "+j 
//     }
//     console.log(bag)
// }

// reverse a string 
let str = 'edureka'
let bag = ""
for(let j = str.length-1;j>=0;j--){
    //end > start
    bag = bag + str[j]
  
}
console.log(bag)

//factorial of 10

let fact1 = 1
let i=1

while(i<=5){
    fact1 = fact1 * i
    i++
}
console.log(fact1)

let fact2=1
for(let k = 1;k<=5;k++){
   fact2 = fact2*k
}
console.log(fact2)




// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.





//Reverse a number 
    let reversedNum = 0;
    let num = 123 //12
  
    while (num > 0) {
      let digit = num % 10; // 123%10=3
      reversedNum = reversedNum * 10 + digit; //0*10+3 = 3
      num = Math.floor(num / 10); // 123/10 = 12.3 = 12
    }
  
    console.log(reversedNum);
  

  