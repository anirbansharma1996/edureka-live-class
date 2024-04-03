let str = 'en dc fb'
let f = str[0].toUpperCase() // E
let bag =""
for(let i=0;i<str.length-1;i++){
    if (str[i]===" ") {
       bag+= str[i+1].toUpperCase()
    } else {
        bag +=str[i+1]
    }
}
// En Dc Fb
console.log(f+bag)