// SET 
const d1 = new Set()
d1.add(1)
d1.add(2)
d1.add(3)
d1.add(2)
d1.delete(1)
let m = d1.has(1)
console.log(d1,m)

let arr = [1,2,2,3,4,5,6,7,1,0,0,5]

const r = new Set(arr)
console.log(r) // r.size
let a1 = Array.from(r)
console.log(a1)


// MAP
let s = ["pritam",'usha','pablo']
let a = [26,40,23]

let obj = new Map()

for(let i=0;i<s.length;i++){
    obj.set(s[i] , a[i])
}
console.log(obj)


let alphabets = ['a','b','c','a','c']
let count = 1
let d = new Map()

for(let alphabet of alphabets){
    if(d.has(alphabet)){
        d.set(alphabet ,d.get(alphabet)+1 )
    }
    else{
        d.set(alphabet , count)
    }
}
console.log(d)