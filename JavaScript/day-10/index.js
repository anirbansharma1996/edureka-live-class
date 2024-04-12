const arr = [1,2,3,4,5]
console.log('arr =>',arr)

const arr2 = new Array(1,2,3,4)
console.log('arr2 =>',arr2)

const names= ['soham','shreya']

for(let i=0;i<names.length;i++){

    for(let j=0;j<names[i].length;j++){

       if(names[i][j]==="a"){
        console.log(" -> is found")
       }
       else{
        console.log(" -> not found")
       }
    }
}
console.log(names.length)
console.log(names.toString())
console.log(names.join("|"))
console.log(names.pop())
console.log(names.pop())
console.log(names.push("shreya"))
console.log(names.push("soham"))
console.log(names)
console.log(names.shift())
console.log(names)
console.log(names.unshift("soham"))
console.log(names)
let names1= names.concat("anirban")
console.log(names1)
console.log(delete names[1])
console.log(names)

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(0, 4)
console.log(fruits1)
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1,4)
console.log(citrus)


