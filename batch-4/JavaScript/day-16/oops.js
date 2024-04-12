
// In OOP, we create something called a "class." A class is like a blueprint or a plan for making a specific type of toy. So, if we have a "Car" class, it tells us what all cars should have – like wheels, a color, and the ability to move.

// Now, when we want an actual toy, we use the class to create an "object." An object is like a real, specific toy that follows the plan from the class. So, if we make a "Car" object, it might be a red car with four wheels that can zoom around.

// OOP also lets us do cool things like sharing abilities. Let's say we have a "Robot" class and a "Car" class. If we want a special kind of robot car, we can use both classes to create a new object with features of both – it can drive like a car and do tricks like a robot!

class Car {
  constructor(wheel, company, passenger) {
    this.wheel = wheel;
    this.company = company;
    this.passenger = passenger;
  }
  emptyseat() {
    return `Empty Seat ${4 - this.passenger}`;
  }
  details() {
    return `Company name : ${this.company}`;
  }
}

class Spear extends Car {
  totalwheel() {
    return `Total Wheels : ${this.wheel + 1}`;
  }
}

let op = new Spear(4, "mahindra", 3);
console.log(op.details());
console.log(op.totalwheel());

console.log("-------------------------------");

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// some simplified explanations of the principles of Object-Oriented Programming (OOP)
//-----------------------------------------------------------------------------------
// 1.Encapsulation: Think of a treasure box that has a lock. The box keeps
// valuable things safe and hidden from others. In programming, encapsulation is
// like putting data (values) and code (functions) together in a box, and the box
// has a lock to protect them. This helps keep things organized and prevents
// others from accidentally changing or accessing the data or code inside the box without permission.
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
account.withdraw(1000);
console.log(account.getBalance());
// Output: 1300
// In this example, the BankAccount class encapsulates the balance property and provides
// methods (deposit, withdraw, and getBalance) to interact with it. The balance variable
// is encapsulated within the class and cannot be accessed directly from outside.
//----------------------------------------------------------------------------------
// 2.Inheritance: Imagine a family with parents and children. Children often
// inherit certain traits from their parents, like eye color or height. In
// programming, inheritance is similar. We can create a class (like a parent) with
// certain properties and behaviors, and then create another class (like a child)
// that inherits those properties and behaviors. This helps us reuse code and avoid
// repetition.

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
fluffy.eat(); // Output: Fluffy is eating.
fluffy.meow(); // Output: Fluffy says meow!

// In this example, the Animal class serves as the parent class, and the Cat class extends
// it. The Cat class inherits the name property and the eat method from the Animal class.
//------------------------------------------------------------------------------------
// 3.Polymorphism: Polymorphism is like having different forms or
// shapes. For example, think of a toy that can transform into a car or a robot. It
// has different forms but still represents the same toy. In programming,
// polymorphism allows objects of different classes to be treated as if they are
// the same type. This means we can use the same code or function to work with
// different objects, even if they have different properties or behaviors.

class Shape {
  calculateArea() {
    console.log("Calculating area...");
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
square.calculateArea(); // Output: Calculating area of square...

// In this example, the Shape class has a calculateArea method. The Circle and Square
// classes inherit from Shape and override the calculateArea method to provide their own
// implementation. Even though we use the same method name, the specific behavior is
// different for each class.
//------------------------------------------------------------------------------------
// 4.Abstraction: Abstraction is like having a remote control for a toy car.
// The remote control hides the complex inner workings of the car and provides
// simple buttons to control it. In programming, abstraction helps us hide
// unnecessary details and focus on the essential parts. We create classes with
// simple and easy-to-use interfaces, so we don't have to worry about
// understanding all the complex code behind them.

class RemoteControl {
  constructor(device) {
    this.device = device;
  }
  turnOn() {
    this.device.turnOn();
  }
  turnOff() {
    this.device.turnOff();
  }
}
class TV {
  turnOn() {
    console.log("TV turned on.");
  }
  turnOff() {
    console.log("TV turned off.");
  }
}
const tv = new TV();
const remoteControl = new RemoteControl(tv);
remoteControl.turnOn(); // Output: TV turned on.
remoteControl.turnOff(); // Output: TV turned off.

// In this example, the RemoteControl class abstracts the functionality of turning on and
// off a device. It uses the device object (in this case, a TV) to perform the actual
// operations. The RemoteControl class provides a simplified interface that hides the
// internal details of how the device works.
