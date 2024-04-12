//1. How can you check if a string is empty?

function isEmptyString(str) {
  return str.trim().length === 0;
}

//2. Write a program to replace all occurrences of a character in a string with another character.

function replaceAll(str, charToReplace, replacementChar) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charToReplace) {
      result += replacementChar;
    } else {
      result += str[i];
    }
  }
  return result;
}

//3. How would you determine if two strings are anagrams of each other?

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};
// low 
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

//4. Write a function to remove all special characters from a string.

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

//5. How do you convert a string to a number in JavaScript?

function stringToNumber(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num = num * 10 + (str.charCodeAt(i) - 48); // converting char to number
  }
  return num;
}

//6. Write a program to find the index of the first occurrence of a character in a string.

function indexOfFirstOccurrence(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

//7. How can you split a string into an array of substrings based on a delimiter?

function splitString(str, delimiter) {
  const result = [];
  let currentSubstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      result.push(currentSubstr);
      currentSubstr = "";
    } else {
      currentSubstr += str[i];
    }
  }
  if (currentSubstr !== "") {
    result.push(currentSubstr);
  }
  return result;
}

//8. Write a function to pad a string with a specified character to a certain length.

function padString(str, length, char) {
  let paddedStr = str;
  while (paddedStr.length < length) {
    paddedStr += char;
  }
  return paddedStr;
}

//9. How can you check if a string contains only digits?

function containsOnlyDigits(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      return false;
    }
  }
  return true;
}

//10. Write a program to sort the characters of a string alphabetically.

function sortString(str) {
  let sortedStr = "";
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === i + 97 || str.charCodeAt(j) === i + 65) {
        sortedStr += str[j];
      }
    }
  }
  return sortedStr;
}