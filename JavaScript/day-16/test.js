const date = new Date().getFullYear();

class Students {
  constructor(name, birthyear, address) {
    (this.name = name), (this.byear = birthyear), (this.address = address);
  }
  age() {
    return `${this.name} is ${date - this.byear} years old`;
  }
}

class City extends Students {
  cityAddress() {
    return `${this.name} is from ${this.address}`;
  }
}

const student1 = new Students("Soham", 1999, "jalpaiguri");
const student2 = new City("Shreya", 2003, "jalpaiguri");
//   console.log(student1.age())
//   console.log(student2.cityAddress())




//Encapsulation
class BankAccount {
  constructor(initialBalance) {
    let balance = initialBalance;
    this.deposit = function (amount) {
      return (balance += amount);
    };
    this.withdraw = function (amount) {
      if (amount <= balance) {
        return (balance = balance - amount);
      } else {
        console.log("Insufficient funds...");
      }
    };
    this.getBalance = function () {
      return balance;
    };
  }
}
const account = new BankAccount(1000);
account.deposit(100);
account.withdraw(1100);
console.log(account.getBalance());

//Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const fluffy = new Cat("Fluffy");
fluffy.eat();
fluffy.meow();

class Shape {
  calculateArea() {
  
//Polymorphism  console.log("Calculating area...");
  }
}
class Circle extends Shape {
  calculateArea() {
    console.log("Calculating area of circle...");
  }
}
class Square extends Shape {
  calculateArea() {
    console.log("Calculating area of square...");
  }
}
const shape = new Shape();
const circle = new Circle();
const square = new Square();
circle.calculateArea(); // Output: Calculating area of circle...
square.calculateArea();

//Abstraction
class AC {
  constructor(controller) {
    this.controller = controller;
  }
  increment() {
    this.controller.inc();
  }
  decrement() {
    this.controller.dec();
  }
  temparature(){
    this.controller.curr()
  }
}

class Remote {
  constructor(temp) {
    this.temp = temp;
  }
  inc() {
    console.log(this.temp + 1);
  }
  dec() {
    console.log(this.temp - 1);
  }
  curr(){
    console.log(this.temp)
  }
}

const remote = new Remote(22)
const ac = new AC(remote)

ac.increment()
ac.decrement()
ac.temparature()
