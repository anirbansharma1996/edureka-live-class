// ES5
function Student(name , age,attendence){
     this.name = name
     this.age = age
     this.attendence = attendence
}

Student.prototype.getDob = function(){
    console.log(new Date().getFullYear()-this.age)
}
Student.prototype.eligible=function(){
    if(this.attendence >= 75){
        console.log(`${this.name} -> Pass`)
    }else{
        console.log(`${this.name} -> fail`)
    }
}

const s1 = new Student('Pritam',27,70)
console.log( s1)
s1.getDob()
s1.eligible()

// ES6 -> [introduction of class keyword & construtor function ]
// How to Implement Object Oriented Programming in JavaScript ?
//--
// The concept of Object Oriented Programming in JavaScript was introduced in ES6. Before ES6 JavaScript did not support the OOPs and it was a completely functional-based programming language everything was done with the help of functions. We can implement the OOPs in ES6 by creating classes and their object instances. Now, after the introduction of ES6, JavaScript become an Object Oriented Programming language as it supports all four basic pillars of OOPs which are inheritance, encapsulation, abstraction, and polymorphism.



class Student1 {
  constructor(name, age, att) {
    (this.name = name), (this.age = age), (this.att = att);
  }
  getDob() {
    console.log(new Date().getFullYear() - this.age);
  }
  getEli() {
    if (this.attendence >= 75) {
      console.log(`${this.name} -> Pass`);
    } else {
      console.log(`${this.name} -> fail`);
    }
  }
}

let s2 = new Student1('Pritam',27, 56)
console.log(s2)
s2.getDob()
s2.getEli()







// [ Encapsulation ] : Imagine you have a car object. Encapsulation allows you to hide the inner workings of the car (like its engine, transmission, etc.) and only expose necessary functionalities like start, stop, accelerate, etc. Users of the car object don't need to know how these functionalities are implemented internally; they just need to know how to use them.

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engineRunning = false;
  }

  startEngine() {
    this.engineRunning = true;
    console.log("Engine started");
  }

  stopEngine() {
    this.engineRunning = false;
    console.log("Engine stopped");
  }
}
// Usage
const mycar = new Car("Toyota", "Corolla");
mycar.startEngine(); // Outputs: "Engine started"


// Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but there are no such access modifiers in JavaScript, there are certain ways by which we can restrict the scope of variables within the Class/Object. 


// Abstraction example
function person(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function () {
		return (`First name is: ${firstname} Last 
			name is: ${lastname}`);
	}

	this.getDetails_access = function () {
		return (`First name is: ${firstname}, Last 
			name is: ${lastname}`);
	}
}
let person1 = new person('Mukul', 'Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());


// [ Inheritance ]: Consider a hierarchy of different types of vehicles. You can have a base class called Vehicle and then derive specific vehicle types like Car, Truck, Motorcycle, etc. from it. Each derived class inherits properties and behaviors from the base class but can also have its own unique properties and behaviors.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `${this.make} has made this ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, color) {
    super(make, model);
    this.color = color;
  }

  details() {
    console.log(`${this.make} has made this ${this.model} of ${this.color} color `);
  }
}

class Bike extends Vehicle{
    constructor(make , model,color ,cc){
        super(make,model)
        this.color = color
        this.cc = cc
    }
    details(){
        console.log(`${this.make} has made ${this.model} of ${this.color} color , which has ${this.cc}cc engine`)
    }
}



// Usage
const myCar = new Car("Toyota", "Corolla", "red");
console.log(myCar.getInfo()); 
myCar.details(); 
const myBike = new Bike('Bajaj','NS-200',"white",200)
myBike.details()

//  [ Polymorphism ] : Think about different shapes like circles, squares, and triangles. Each shape can have a calculateArea() method, but the implementation of this method will be different for each shape. Polymorphism allows you to call the same method name on different objects, and depending on the object type, it executes the appropriate implementation.

class Shape {
  calculateArea() {
    // Base implementation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength ** 2;
  }
}

// Usage
const circle = new Circle(5);
const square = new Square(4);
console.log(circle.calculateArea()); // Outputs: 78.54
console.log(square.calculateArea()); // Outputs: 16

// [ Abstraction ] in object-oriented programming is the concept of hiding the complex implementation details and showing only the essential features of an object. Here's a real-life example of abstraction in JavaScript:

// Imagine you're developing a banking application. Each bank account has various functionalities like deposit, withdraw, and check balance. Abstraction allows you to hide the internal details of these operations and provide a simple interface for users to interact with.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  checkBalance() {
    console.log(`Account balance: ${this.balance}`);
  }
}

// Usage
const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500); // Outputs: Deposited 500. New balance: 1500
myAccount.withdraw(200); // Outputs: Withdrawn 200. New balance: 1300
myAccount.checkBalance(); // Outputs: Account balance: 1300

//In this example, the users of the BankAccount class don't need to know how deposit, withdraw, or check balance operations are implemented internally. They only need to know how to use these functionalities through the provided interface. This abstraction allows for easier maintenance and modification of the codebase, as the internal details can change without affecting the users' interactions.
