//1.Write a JavaScript program to concatenate two strings.

const str1 = "Hello";
const str2 = "World";
let concatenated = "";
for (let i = 0; i < str1.length; i++) {
    concatenated += str1[i];
}
for (let i = 0; i < str2.length; i++) {
    concatenated += str2[i];
}
console.log(concatenated); // Output: HelloWorld

//2.Find the length of a string:

const str3 = "JavaScript";
let length = 0;
for (let char of str3) {
    length++;
}
console.log(length); // Output: 10

//3.Convert a string to uppercase:

const str4 = "javascript";
let uppercaseStr = "";
for (let char of str4) {
    uppercaseStr += char.toUpperCase();
}
console.log(uppercaseStr); // Output: JAVASCRIPT

//4.Check if a string contains a specific substring:

const str5 = "JavaScript is awesome";
const substring = "awesome";
let containsSubstring = false;
for (let i = 0; i <= str5.length - substring.length; i++) {
    let found = true;
    for (let j = 0; j < substring.length; j++) {
        if (str5[i + j] !== substring[j]) {
            found = false;
            break;
        }
    }
    if (found) {
        containsSubstring = true;
        break;
    }
}
console.log(containsSubstring); // Output: true

// 5.Reverse a string:

const str6 = "hello";
let reversed = "";
for (let i = str6.length - 1; i >= 0; i--) {
    reversed += str6[i];
}
console.log(reversed); // Output: olleh

// 6.Count the number of vowels in a string:

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const str7 = "JavaScript";
console.log(countVowels(str7)); // Output: 3

// 7.Remove all white spaces from a string:

const str8 = "   JavaScript   is   fun   ";
let trimmed = "";
for (let char of str8) {
    if (char !== " ") {
        trimmed += char;
    }
}
console.log(trimmed); // Output: JavaScriptisfun

// 8.Check if a string is a palindrome:

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const str9 = "radar";
console.log(isPalindrome(str9)); // Output: true

//9.Extract the domain name from a URL:

function extractDomain(url) {
    let domain = "";
    let start = 0;
    for (let i = 0; i < url.length; i++) {
        if (url[i] === '/' && url[i + 1] === '/') {
            start = i + 2;
            break;
        }
    }
    for (let i = start; i < url.length; i++) {
        if (url[i] === '/' || url[i] === ':') {
            break;
        }
        domain += url[i];
    }
    return domain;
}
const url = "https://www.example.com/path/to/page";
console.log(extractDomain(url));

//10.Write a function to capitalize the first letter of each word in a sentence.
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

