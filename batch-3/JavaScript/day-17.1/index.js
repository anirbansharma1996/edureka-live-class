class Stack {
  constructor() {
    this.items = [];
  }
  custompush(ele) {
    const currentIndex = this.items.length;
    this.items[currentIndex] = ele;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  custompop() {
    if (this.isEmpty()) {
      return;
    }
    const currentIndex = this.items.length - 1;
    const poppedEle = this.items[currentIndex];
    this.items.length = currentIndex;
    return poppedEle;
  }
  top(){
    const currentIndex = this.items.length-1
    return this.items[currentIndex]
  }
  size(){
    return this.items.length
  }
  view() {
    return this.items;
  }
 
}

// const array = new Stack();
// array.custompush(4);
// array.custompush(8);
// array.custompush(3);
// array.custompush(7);

// array.custompop();
// console.log(array.view());
// console.log(array.size())
// console.log(array.top())

function Inner(num){
  console.log(num,'from inner/callback function')
}

function Outter(n1,n2,func){
    let sum = n1+n2
    func(sum)
}
//Outter(5,5,Inner)

function All(text){
    console.log(text)
}

function First(){
    All("calling from First")
}

function Second(){
    All("calling from Second")
}

// Second()
// First()



// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
// console.log(
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds()
// )
// }