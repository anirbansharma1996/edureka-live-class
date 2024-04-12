// String 
var str = 'edurekA'
heightest_index = length - 1
length = heighest_index + 1
 console.log(str[0])
 console.log(str.length)
console.log(str.charAt(5))
console.log(str.indexOf('d'))
console.log(str.concat(" ","jalpaiguri"))
console.log(str + " "+"jalpaiguri")
console.log(str.includes("d"))
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.replace("rek","REK"))
console.log(str.repeat(2))
console.log(str.replace("ka"," ").repeat(3).includes("d"))
console.log(str.split(""))
console.log(str.slice(0,3)+"...")
console.log(str.slice(3))
const result = str.trim()
console.log(result.length)
console.log(str.substring(1,3))
console.log(str.charCodeAt(6))

var num = 100
console.log(num.toString())
console.log(num.toString(2))

// Number
var n = 16.89378687
console.log(Math.abs(n))
console.log(Math.ceil(n))
console.log(Math.floor(n))
console.log(Math.round(n))
console.log(Math.max(12,4,5,99))
console.log(Math.min(12,4,5,99))
console.log(Math.sqrt(n))
console.log(Math.PI)
console.log(Math.pow(2,53))
console.log(n.toFixed(2))
console.log(Math.floor(Math.random()*9999)+1000)
//------------------------------
// function CrackPassword(passkey){
//    let flag = true
//    let count = 0
//    while(flag){
//       let random = Math.floor(Math.random()*9999)+1000
//       console.log(random)
//       count ++
//       if(random===passkey){
//         flag=false
//         console.log('your passkey is',passkey,'after',count,'combinations')
//       }
//    }
// }
// CrackPassword(3551)