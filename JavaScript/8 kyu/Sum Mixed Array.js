// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x){

// }


//parameters

//given an array of strings and numbers


//returns

// need to return the sum of the array as if the strings were numbers

//examples

//sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])  //41
//sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7] // 42
//(sumMix([9, 3, '7', '3']) //22

//pseudocode

//need to make all strings into numbers Number(arr)
//use reduce to sum all numbers 


//https://stackoverflow.com/questions/64333523/getting-the-sum-of-an-array-with-different-datatypes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// let sumMix = x => {
//   return x.reduce((a,b) => Number(a) + Number(b), 0)
// }




//refactored 

let sumMix = x => x.reduce((a,b) => Number(a) + Number(b), 0)

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

//Could also loop through each of the elements 
// found that the easier and more ledgible if I convert the numbers when I am reducing the array.
