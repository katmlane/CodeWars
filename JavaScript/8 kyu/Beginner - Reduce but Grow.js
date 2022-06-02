// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// function grow(x){

// }


//parameters

//a non-empty array of integers

//return

// the product of multiplying the numbers in order

//examples

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//[1, 2, 3]  // 6
//[4, 1, 1, 1, 4] // 16
//[2, 2, 2, 2, 2, 2]  //  64

// pseudocode


//should be a simple method of reduce

const grow = x => x.reduce((a,b) => a*b, 1);

console.log(grow([2, 2, 2, 2, 2, 2]))

