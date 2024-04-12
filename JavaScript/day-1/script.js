// 1.primitive datatype
// ------------------------
// 1.string => "...."
var a = "anirban";
//console.log(typeof a)
// 2.number => 1,2,3,5.......n
var b = 3;
//console.log(typeof b)
// 3.boolean => true / false
var c = true;
//console.log(typeof c)
// 4.BigInt => 1237896138761237841754n
var d = 12334556677889997766n;
//console.log(typeof d)
// 5.undefined => variable Y value N
let e = undefined;
let f;
//console.log(typeof e,f)
// 6.null => variable N value N
let g = null;
//console.log(typeof g)
// 7.Symbol => Symbol("hello")
let h = Symbol("hi");
//console.log(typeof h)

// 2.non primitive / reference datatype
//1.Object => {}
//type of object = object
const object = {};
const object2 = new Object();
console.log(object, object2);
console.log(typeof object, typeof object2);

//2.Array  => []
//type of array = special type of object
const array = [];
const array2 = new Array();
console.log(array, array2);
console.log(typeof array, typeof array2);

//3.Function => ()
//type of funtion = function

const myFunc = function Soham() {};
const myFunc2 = () => {};

console.log(myFunc, myFunc2);
console.log(typeof myFunc, typeof myFunc2);
