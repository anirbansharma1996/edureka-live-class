// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

// 0 1 1 2 3 5 8 13 ....

let n1 = 0; // 1 1 2 3 5
let n2 = 1; // 1 2 3 5 8

for (let i = 1; i <= 5; i++) {
  // console.log(n1) // 0 1 1 2 3
  let temp = n1 + n2;
  //       = 3 + 5 = 8
  n1 = n2; // 1 1 2 3 5
  n2 = temp; // 1 2 3 5 8
}

//Reverse a number
let digit = 123; // 12 1 0
let reverseNum = 0; // 3 32
//123
//12
//1
//0
while (digit > 0) {
  let endDigit = digit % 10;
  // = 123 % 10 = 3
  // = 12 % 10 = 2
  // = 1 % 10 = 1
  reverseNum = reverseNum * 10 + endDigit;
  //  = 0 * 10 + 3 = 0 + 3 = 3
  //  = 3 * 10 + 2 = 30 + 2 = 32
  // =  32 * 10 + 1 = 320 + 1 = 321
  digit = Math.floor(digit / 10);
  // = 123/10 = 12.3 = 12
  // = 12/10 = 1.2 = 1
  // = 1 / 10 = 0.1 = 0
}
//console.log(reverseNum)

//Reverse Pattern Printing

for (let i = 1; i <= 3; i++) {
  let bag = "";
  for (let j = i; j <= 3; j++) {
    //     1; 1<=5
    //     2; 2<=5
    //     3; 3<=5
    bag = bag + " *";
    // "" + * = "*"
    // "*" + * = "**"
    // "**" + * = "***"
  }
  console.log(bag);
}
