// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// function noOdds( values ){
//   // Return all non-odd values
// }

//parameters

//an array of integers

//return 

//array of positive numbers in the original order

//examples

//console.log(noOdds( [0,1] )) // [0]
//console.log(noOdds( [0,1,2,3])) // [0,2]


//pseudocode

//need to use filter to get rid of negatives 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const noOdds = values => values.filter(e=> e % 2 ===0);
console.log(noOdds( [0,1,2,3,4,5,6]))
