//This key words
const object ={
    name:"pritam",
    dob:1997,
    age:function(){
        return `${this.name}'s age is ${new Date().getFullYear() - this.dob}`
    }
}

console.log(object.age())

function NormalThis(){
    console.log(this)
}
NormalThis()

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
     
}
obj.getName()  

var username = obj.getName;   // 1
var obj2 = { name:"akshay", username };
obj2.username();

// arrow function this [Global Object]
const object2 ={
    name:"pritam",
    dob:1997,
    age:()=>{
        return `${this.name}'s age is ${new Date().getFullYear() - this.dob}`
    }
}
console.log(object2.age())

// CLASS / Prototype


let arr = [1,2,3,4] 
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr.pop())
console.log(arr)

// Custom prototype

Array.prototype.custompush = function(value){
    const ln = this.length
    this[ln] = value
    return this
}
Array.prototype.custompop = function(){
    const ln = this.length-1
        this.length = ln
        return true
}

arr.custompush(5)
console.log(arr)
console.log(arr.custompop())
console.log(arr.custompop())
console.log(arr)

// CLASS & This Key word
class Student{
    constructor(name,age,cls){
        this.name = name,
        this.age = age
        this.class = cls
    }
    getAge(){
        console.log(`${this.name}'s DOB is ${new Date().getFullYear() - this.age}`)
    }

}

const s = new Student('pablo',7,5)
const s1 = new Student('pritam',27,12)
console.log(s)
console.log(s1)
s.getAge()
s1.getAge()

// CLASS CUSTOM ARRAY METHODS
class Array{
    constructor(){
        this.item=[]
    }
   custompush(val){
       const ln = this.item.length
       this.item[ln] = val
       return this.item
     //return this.item.sort((a,b)=>a-b) [if you want sorted array]
   }
   custompop(){
    const ln = this.item.length-1
     this.item.length = ln
     return true
   }
   print(){
     console.log(this.item) 
   }

}
const a = new Array()
console.log(a.item)
a.custompush(1)
a.custompush(2)
a.custompush(8)
a.custompush(4)
a.custompush(3)
a.print()
a.custompop()
a.custompop()
a.print()