class Hash{
    constructor(){
        this.table={}
    }
    add(k,v){
        this.table[k] = v
    }
    get(k){
        if(this.isPresent(k)){
            return this.table[k]
        }
        else{
            return 'not found'
        }
    }
    isPresent(k){
       return k in this.table 
    }
    remove(k){
        if(this.isPresent(k)){
            delete this.table[k]
            return true
        }
        return false
    }
    print(){
        return this.table
    }
}

const table = new Hash()
table.add("name",'shreya')
table.add("age",21)

console.log(table.get('age')) 
console.log(table.print())

//  
let arr = ['a','b','c']
let r = new Map()
arr.forEach((el)=>{
     console.log(r.get(el))
})
// get , set , delete
let arr1 = ['a','b','c',"a",'b']
let r1 = new Map()
arr1.forEach((el)=>{
     if(r1.get(el) === undefined){
        r1.set(el, (r1.get(el)||0)+1)
     }else{
        r1.set(el, (r1.get(el)+1))
     }
})
console.log(r1)