// 1. Fibonacci series
function Fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let n3;

  for (let i = 0; i <= n; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
}
Fibonacci(8);

// 2. Prime Number
function Prime(n) {
  if (n <= 1) {
    console.log(false);
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

Prime(6);

// 3. Odd/Even Number
function CheckEvenOdd(n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
CheckEvenOdd(6);

// 4. Armstrong Number
function Armstrong(n) {
  const numDigits = n.toString().length;
  let temp = n;
  let sum = 0;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  if (sum === n) {
    console.log(`${n} is an Armstrong number.`);
  } else {
    console.log(`${n} is not an Armstrong number.`);
  }
}

Armstrong(153);

// 5. Reverse Number
function ReverseNumber(n) {
  let revNum = 0;
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    revNum = revNum * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  console.log(revNum);
}
ReverseNumber(123);

// 6. Frequency Check
function Frequency(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    if (object[str[i]] === undefined) {
      object[str[i]] = 1;
    } else {
      object[str[i]]++;
    }
  }
  console.log(object);
}
Frequency("anirban");

// 7. Unique Elememts in an Array / string

function UniqueElememts(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    if (object[str[i]] === undefined) {
      object[str[i]] = 1;
    } else {
      object[str[i]]++;
    }
  }
  for (let key in object) {
    if (object[key] === 1) {
      console.log(key);
    }
  }
}
UniqueElememts("anirban");

// 8. remove duplicate from Array / string

function RemoveDuplicate(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    if (!object[str[i]]) {
      object[str[i]] = true;
      console.log(str[i]);
    }
  }
}
RemoveDuplicate("aabbccc");
