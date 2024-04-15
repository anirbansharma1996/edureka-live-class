let str = 'abcd'
let s = new Set(str)
console.log(s)
//has | size | keys
console.log(s.has('e'))
console.log(s.size)
console.log(s.keys())

let string = 'aavvgffddrteec'

let res = new Set(string)
console.log(res)

// //Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


////Example 1:
// Input: nums = [1,2,3,1]
// Output: true
 let nums = [1,2,3,1] // [1,2,3]
let s1 = new Set(nums)
console.log(nums.length !== s1.size)



let arr = [1,2,3,4]

Array.prototype.add = function(ele){
    let ln = this.length
    this[ln] = ele
}
Array.prototype.remove = function(){
    let ln = this.length-1
    this.length = ln
}
Array.prototype.toPower = function(){
   let res = this.map((el)=>el**2)
   return res
}
Array.prototype.OddEven = function(){
   let res =  this.map((num)=>{
        if(num%2===0){
            return true
        }else{
            return false
        }
    })
    return res
}

arr.add(8)
arr.remove()
console.log(arr.OddEven())
console.log(arr)