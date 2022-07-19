// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// //function getMiddle(s)
// {
//   //Code goes here!
// }


//parameters 

// a string

//return

// the middle characters of the string, if the string length is even then need to return 2 middle characters 

// examples

//console.log(getMiddle("test")) // "es"
//console.log(getMiddle("testing")) // "t"
//console.log(getMiddle("middle")) // "dd"
//console.log(getMiddle("A")) // "A

//pseudocode 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

// need to check the string length and see if it is an even or odd number 
// if odd, then return str.slice(str.length/2, str.length/2 +1)
// if even, then return str.slice(( (str.length/ 2 - 1)), str.length/2 )


// const getMiddle = s => {
//   // if string length is odd
//   if( s.length % 2 !== 0 ) {
//     console.log("odd")
//     return s.slice(s.length/2, s.length/2 +1)
//   }
//   //if string length is even
//   else if ( s.length % 2 === 0) {
//     console.log("even")
//     return s.slice((s.length/ 2 - 1), (s.length/2 + 1))
//   }
// }


//refactored 

const getMiddle = s => s.length % 2 !== 0 ? s.slice(s.length/2, s.length/2 +1) : s.slice((s.length/ 2 - 1), (s.length/2 + 1));



console.log(getMiddle("testing"))
