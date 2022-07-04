// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


// function sumStr(a,b) {
  
// }


//parameters

// two string like numbers

//returns 

//sum of the two string like numbers returned in a string 

//examples

//console.log(sumStr("4", "5")) // "9"
//console.log(sumStr("34", "5")) //"39"

//pseudocode

//need to turrn string to numbers and then add then turn back to string 

// const sumStr = (a,b) => {
//     const aNum = Number(a)
//     const bNum = Number(b)

//     const sum = aNum + bNum;
//     const strSum = sum.toString()
//     return strSum
// };
// console.log(typeof strSum)
// console.log(sumStr("4", "5"))

//refactored 

const sumStr = (a,b) => (Number(a) + Number(b)).toString();


console.log(sumStr("4", "5"))