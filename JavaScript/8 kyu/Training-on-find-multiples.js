// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

// function findMultiples(integer, limit) {
//   //your code here
// }

//parameters 

// two integers one a multiple and the other the number to return multiples to

//return 

// an array of multiples up to endpoint 

//examples

//console.log(findMultiples(5, 25)) //[5, 10, 15, 20, 25]
//console.log(findMultiples(1, 2)) //[1, 2]
//console.log(findMultiples(5, 7)) //[5]
//console.log(findMultiples(4, 27)) //[4, 8, 12, 16, 20, 24]
//console.log(findMultiples(11, 54)) //[11, 22, 33, 44]


//pseudocode

//need to have a loop that continues to push the multiples of the first number until it is equal to but not more than the endpoint


const findMultiples = (integer, limit) => {
  let multiples = [];
  for(let i = integer; i<= limit; i= i+integer){
    multiples.push(i);
  }
  return multiples;
};

console.log(findMultiples(5, 25))
