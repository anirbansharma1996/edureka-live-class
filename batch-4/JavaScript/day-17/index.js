// Custom Array methods 

class Stack {
  constructor() {
    this.items = [];
  }
  custompush(ele) {
    const currentIndex = this.items.length;
    this.items[currentIndex] = ele;
  }
  custompop() {
    if (this.empty()) {
      return "no element for popping...";
    }

    const currentIndex = this.items.length - 1;
    const poppedElement = this.items[currentIndex];
    this.items.length = currentIndex;
    return poppedElement;
  }
  empty() {
    return this.items.length === 0;
  }
  top() {
    if (this.empty()) {
      return "no element at the top ...";
    }
    const currentIndex = this.items.length - 1;
    return this.items[currentIndex];
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
    return "cleared...";
  }
  view() {
    return this.items;
  }
}

const array = new Stack();
array.custompush(7);
array.custompush(3);
array.custompush(9);
array.custompush(5);
console.log(array.view());
array.custompop();
console.log(array.view());
console.log(array.top());
console.log(array.size());
console.log(array.clear());
console.log(array.view());

//Callback Function

function Offer(f_a) {
  if (f_a > 500) {
    console.log("you will pay ", f_a - 150);
  } else {
    console.log("you will pay", f_a);
  }
}

function Calculate(amount, bill) {
  let final_amount = amount - 100;
  bill(final_amount);
}
Calculate(500, Offer);

//Asynchronous Behaviour in JS
console.log("start");

setTimeout(() => {
  console.log("running");
}, 1000);

console.log("stop");
