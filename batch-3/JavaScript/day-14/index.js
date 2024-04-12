// //prime number

function CheckPrime(num){
  let isPrime = true

   if(num===1){
       isPrime = true
   }else{
     for(let i=2;i<=num-1;i++){
        if(num%i===0){
          isPrime = false  
        }
     }
   }
   if(isPrime===true){
    console.log(num, " is Prime")
   }
   else{
    console.log(num, " is not Prime")

   }


}
CheckPrime(1)


function Intersection(arr1,arr2){
    let arr =[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                arr.push(arr1[i])
                break;
            }
        }
    }
    console.log(arr)

}
Intersection([1,2,3],[2,3,4])


function SecondSmallest(arr){
    console.time("taken")
    arr.sort((a,b)=>a-b)
    console.log(arr[1])
    console.timeEnd("taken")

}
SecondSmallest([2,9,4,6,1])

let arr = [50,60]
let sum =0 
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i]
}
console.log(sum/arr.length)
