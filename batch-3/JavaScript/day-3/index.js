// JavaScript offers a variety of string methods that allow you to manipulate and work with strings effectively. Some of the most common string methods in JavaScript include:

//String.prototype.length: This property returns the length of the string.
var str = "edureka learing center";
var length = str.length; // Returns 13
console.log(length)

//String.prototype.charAt(index): Returns the character at the specified index in the string.
var str = "Hello";
var char = str.charAt(4); // Returns "e"
console.log(char)
//String.prototype.slice(start, end): Extracts a portion of a string and returns it as a new string.

var str = "Hello, World!";
var substr = str.slice(3, 8); // Returns "Hello"
console.log(substr)
//String.prototype.substring(start, end): Similar to slice, it extracts a portion of a string, but it can also handle negative indices.

var str = "Hello, World!";
var substr = str.substring(7, 13); // Returns "World"
console.log(substr)


//String.prototype.substr(start, length): Extracts a specified number of characters from a string, starting at a specified index.

var str = "Hello, World!";
var substr = str.substr(7, 5); // Returns "World"
//String.prototype.concat(string2, string3, ...): Combines two or more strings and returns a new string.

var str1 = "Hello,-";
var str2 = "World!";
var result = str1.concat(str2); // Returns "Hello, World!"
console.log(result)

//String.prototype.split(separator, limit): Splits a string into an array of substrings based on a specified separator.

var str = "apple,banana,cheary";
var fruits = str.split("a"); // Returns ["apple", "banana", "cherry"]
console.log(fruits)

//String.prototype.indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string, or -1 if not found.

var str = "Hello, World!";
var index = str.indexOf("a"); // Returns 7
console.log(index)

//String.prototype.lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string, or -1 if not found.

var str = "Hello, World!";
var index = str.lastIndexOf("l"); // Returns 9

//String.prototype.replace(searchValue, replaceValue): Replaces the first occurrence of a specified value with another value in a string.

var str = "Soham, BBA!";
var newStr = str.replace("BBA","IT"); 
console.log(newStr)
//String.prototype.toUpperCase(): Converts all characters in a string to uppercase.

var str = "Hello, World!";
var upper = str.toUpperCase(); // Returns "HELLO, WORLD!"

//String.prototype.toLowerCase(): Converts all characters in a string to lowercase.

var str = "Hello, World!";
var lower = str.toLowerCase(); // Returns "hello, world!"

