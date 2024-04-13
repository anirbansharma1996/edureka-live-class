// Hoisting
//-- variable hosting(only var)
a = 10;
console.log(a);
var a;
// -- function hosting 
function Print(){
    console.log('inside print')
}
Print()


//default params

function Sum(a=0,b=0){
    console.log(a+b)
}
Sum(null,6)

let txt = `anirban sharma
           hakimpara`
console.log(txt)

let str = "edureka 'learning' center"
console.log(str)

// rest opt.
function Sum(...params) {
  let s = params.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(s)
}
Sum(1, 2, 9, 6, 9, 9);

// obj de. st.
let object = {name:"pritam",course:"fswd"}
const { name , course } = object
console.log(name,course)

// Async behaviour in js
console.log(1)
setTimeout(()=>{
    console.log(2)
},0)
console.log(3)

 for(var i=1;i<=5;i++){
    setTimeout(()=>{
       console.log(i)
    },2000)
 }

function Parent(){
      Child()
      console.log('from parent')
}
function Child(){
    console.log('from child')
}

Parent()
// call back hell
function Hell() {
  console.log(1);
  return () => {
    console.log(2);
    return () => {
      console.log(3);
      return () => {
        console.log(4);
      };
    };
  };
}
console.log(Hell()()()())

// function curring
function Curry(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        console.log(a + b + c + d);
      };
    };
  };
}
console.log(Curry(1)(2)(3)(4));

// Promise [ pending -> resolve/reject]
const fn1 = new Promise((resolve, reject) => {
  let f = !true;
  console.log('pending...')
  setTimeout(() => {
    f ? resolve("success") : reject("error");
  }, 2000);
});

fn1.then((res) => console.log(res)).catch((err) => console.log(err));
// ASYNC - AWAIT
const fn = () => {
  return new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
      status
        ? resolve("data fetched successfuly")
        : reject("failed to load data");
    }, 2000);
  });
};

async function Check() {
  try {
    const res = await fn();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
Check();
// getting data from an URL using async function and fetch() method
async function FetchData() {
  try {
     const res = await fetch('https://fakestoreapi.com/products')
     const data = await res.json()
     console.log(data)
  } catch (err) {
    console.log(err)
  }
}
FetchData();
// es6 async function
const Fetch = async()=>{
    try {
        const res = await fetch('https://fakestoreapi.com/products/1')
        const data = await res.json()
        console.log(data)
     } catch (err) {
       console.log(err)
     }
}
Fetch()
