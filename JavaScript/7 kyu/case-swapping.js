
// /https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript


// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"


// String.prototype.toAlternatingCase = function () {
//   // Define your method here :)
// }

//parameters 

// a string 

// return 

// a string that has alternating cases from the input string

//examples 

//console.log(swap("hello world")) // "HELLO WORLD"
//console.log(swap("HELLO WORLD")) // "hello world"
//console.log(swap("hello WORLD")) // "HELLO world"
//console.log(swap("12345")) // "12345"
//console.log(swap("1a2b3c4d5e")) // "1A2B3C4D5E"
//console.log(swap("String.prototype.toAlternatingCase")) // "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//pseudocode

//need to loop through length of string
//need conditional that will return the opposite case or if it is a number return the original number as a string


// could not get this kata to work so I decided to use my work to solve a similar lvl 7 kyu kata

//https://www.codewars.com/kata/5590961e6620c0825000008f/solutions/javascript

const swap = str => {
  let alternateStr ="";
  for (let i = 0;  i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      alternateStr += str[i].toLowerCase();
    }
    else if (str[i] === str[i].toLowerCase()) {
      alternateStr += str[i].toUpperCase();
    }
    else {
      alternateStr += str[i];
    }
  }
  return alternateStr;
}

console.log(swap("String.prototype.toAlternatingCase")) 
