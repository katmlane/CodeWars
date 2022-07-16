// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// function alternateCase(s) {
//   return '';
// }


//PARAMETERS  

//a string

//returns

// a string of alternative cases

//examples

//console.log("abc") // "ABC"
//console.log("ABC") // "abc"
//console.log("Hello World") // "hELLO wORLD"


//pseudocode

//have completed a similar kata, going to make it a loop through the string and return the alternative case

const alternateCase = s => {
   let alternateStr ="";
  for (let i = 0;  i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      alternateStr += s[i].toLowerCase();
    }
    else if (s[i] === s[i].toLowerCase()) {
      alternateStr += s[i].toUpperCase();
    }
    else {
      alternateStr += s[i];
    }
  }
  return alternateStr;
};

console.log("abc")
