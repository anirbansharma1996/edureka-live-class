//OBJECTs
// key_name : value
const student = {
  first: 1,
  second: 2,
  third: 3,
};
console.log(student.first)

const val = "first";
console.log(student[val])
//----------------------
//1.
const obj1 = {};
//2.
const obj2 = new Object();
//3.
class Students {
  constructor() {}
}
const obj3 = new Students();
//4.
const obj4 = Object.create(student);

console.log(typeof obj1)
console.log(typeof obj2)
console.log(typeof obj3)
console.log(typeof obj4)

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};


// object methods
// console.log(Object.defineProperty(person, "firstName", { value: "Soham" }));
// console.log(Object.defineProperty(person, "lastName", { enumerable: false }));

const age = { year: 1900 };
const newPerson = Object.assign(person, age);
console.log(newPerson);


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.freeze(person);
person.year = 2000;
console.log(person);

const data = Object.is(2, 2);
console.log(data);
console.log('---------------')
console.log(person)
console.log(person.hasOwnProperty('year'))
console.log('---------------')
// const age = { year: 1999 };
// const newPerson = Object.assign(person, age);
// console.log(newPerson);
// console.log(person.hasOwnProperty('year'))


for(let key in person){
    // console.log(key)
    console.log(person[key])
}