// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

// function countWords(str) {
//   // ...
// }

//console.log(countWords("With! Symbol@ #Around! (Every) %Word$")) //5
//console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")) //19
//console.log(countWords("﻿Hello﻿World ")) //2
//console.log(countWords("Dear   Victoria, I love  to press   space button.")) // 8




//need to split the string into elements and filter out the elements without words in it

const countWords = str => {
  let spltStr = str.trim().split(" ");
  return spltStr.filter(word => word !== "").length;
};

console.log(countWords("Hello﻿World "))


//codeewars solution 


function countWords(str) {
  return str.trim().length === 0 ? 0 : str.replace(/\s(?:\s+)?|\s+/g, ' ').trim().split(' ').length;
}
