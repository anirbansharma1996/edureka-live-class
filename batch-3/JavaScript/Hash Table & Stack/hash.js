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

