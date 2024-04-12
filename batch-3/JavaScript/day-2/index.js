//Operators
// 1. mathematical
// 2. logical
// 3. equality

//1.MATHEMATICAL OPT.
// + , - , * , / , %
// console.log(6+3)
// console.log(6-3)
// console.log(6*3)
// console.log(6/3)
// console.log(6%3)
// var num = 1
// console.log(num--) 
// console.log(--num)
//+=
// let digit = 6 
//     //digit = digit + 1
//      digit+=1
   // 
 //console.log(digit)

const text1 = 'edureka'
const text2 = ' learning'
const text3 = ' center'

const res = text1.concat(text2).concat(text3)
//console.log("using concat() method =>",res)


const res2 = text1+text2+text3
//console.log("using + opt. =>",res2)

//Greater Than | Less Than
// > , < , >= /  , <=
// console.log(3>1)
// console.log(4<3)
// console.log(4>=4)
// console.log(3<=5)







// console.log(2 + +"2")
// console.log("2"-"2")
//"2" => +""
// console.log(typeof +"2")

// 3. equality
// == , ===
// == value Y data type N
//=== value Y data type Y

//logical operator

// and ,or ,not
// && , || ,!

// //and operator
// console.log("----------- AND --------");
// console.log(true && true, 1 && 1);
// console.log(true && false, 0 && 1);
// console.log(false && true, 1 && 0);
// console.log(false && false, 0 && 0);
// // OR operator
// console.log("----------- OR ------------");
// console.log(true || true, 1 || 1);
// console.log(true || false, 0 || 1);
// console.log(false || true, 1 || 0);
// console.log(false || false, 0 || 0);
// //NOT operator
// console.log("----------- NOT ----------");
// console.log(!true);
// console.log(!false);

// // Q.
// console.log("------- Q -------");
// console.log((!true && true) || true);
// // false || true
// console.log("--------------------------")
// console.log(2 == "2");//true
// console.log(2 != "2");//false

// console.log(2 === "2");//false
// console.log(2 !== "2");//true

// console.log("--------------")
// console.log((1!=="1") || (true && 0 ))
//             //true || false



// scoping 
// global ,
// local/functional ,
// block

// var a = 2

// function Sum(){
//     let a = 2
// }
// if(true){
//    let a = 2
// }
// for(let i=0;i<5;i++){
//     console.log(i)
// }

var str = 'edureka'
// "" , '' , ``
console.log("edureka ${2+2}"+" hello")
console.log(`edureka ${2+2} hello`)