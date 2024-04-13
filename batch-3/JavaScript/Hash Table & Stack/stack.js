class Stack{
    constructor(){
        this.items =[]
    }
    entry(ele){
        let ln = this.items.length
        this.items[ln] = ele
    }
    exit(){
        if(this.items.length < 1){
            console.log('empty stack')
            return;
        }
         let ln = this.items.length-1
         this.items.length = ln
    }
    print(){
        return this.items
    }

}

const stackarr = new Stack()
stackarr.entry(3)
stackarr.entry(5)
stackarr.entry(7)
stackarr.exit()
stackarr.exit()

console.log(stackarr.print())

// with prototype
const arr = [];
Array.prototype.entry = function (item) {
  let ln = this.length;
  this[ln] = item;
};
Array.prototype.exit = function () {
  if (this.length > 1) {
    let ln = this.length - 1;
    this.length = ln;
  } else {
    console.log("empty stack");
  }
};

console.log(arr);
arr.entry(7);
console.log(arr);
arr.entry(6);
console.log(arr);
arr.exit();
arr.exit();

console.log(arr);
