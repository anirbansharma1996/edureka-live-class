const Sum1 = ()=>{
    console.log('()=>{}')
}
const Sum2 = function(){
    console.log("function(){}")
}

function Sum3(){
    console.log('function Sum3(){}')
}

Sum1()
Sum2()
Sum3()

function Find(arr,t){
   let flag = false

   for(let i=0;i<arr.length;i++){
    if(arr[i]===t){
        flag = true
    }
   }
  if(flag===true){
    console.log('found')
  }
  else{
    console.log('Not Found')
  }

}
Find([1,3,4,8],4)

function Anagram(str1, str2) {
  let one = str1.split("").sort().join("");
  let two = str2.split("").sort().join("");

  if(one===two){
    console.log('is anagram')
  }
  else{
    console.log('not anagram')
  }

}
Anagram("abcb", "bbac");

// frequency check
// EDUREKA
function Frequency(str){

     let object = {}
     for(let i=0;i<str.length;i++){
        if(object[str[i]]===undefined){
            //console.log(str[i],object[str[i]],"step-1")
            object[str[i]]=1
            //console.log(str[i],object[str[i]],'step-2')
        }else{
            object[str[i]]++
            //console.log(str[i],object[str[i]],'step-3')
        }
     }

 console.log(object)

}
Frequency("edureka")

// contains duplicate
function RemoveDuplicate(str){
    const result = new Set(str)
    console.log(result)

}
RemoveDuplicate('aaabbc')

function RemoveDuplicate(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    }
  }
  //console.log(obj)
  let bag = "";
  for (let key in obj) {
    bag = bag + key;
  }
  console.log(bag);
}
RemoveDuplicate("aaabbcdd");



//Given a string, write a function to capitalize the first letter of each word. !

function LetterCount(str){
let bag =""
    bag = bag + str[0].toUpperCase()
    // e => E
    for(let i=0;i<str.length-1;i++){
        if(str[i]===" "){
            bag = bag + str[i+1].toUpperCase()
        }
        else{
            bag += str[i+1] //du ea
        }
       
    }
   console.log(bag)
   //Edu Lea
}
LetterCount("edu lea")