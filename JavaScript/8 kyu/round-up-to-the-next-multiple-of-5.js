// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// function roundToNext5(n){
//   // ...
// }


//parameters

//an integer

//returns

//integer rounded to the nearest 5

//examples


// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5

//pseudocode

// need to check if number is divisible by 5 and if it isn't then round then Math.ceil the modulus number and multiply it by 5 


// const roundToNext5 = n => {
  
//   if (n % 5 == 0) {
//     return n;
//   }
//   else {
    
//     return Math.ceil(n / 5) * 5;
//   }


// };





//refactored


// modulus of 5 was redundant and not needed

const roundToNext5 = n =>  Math.ceil(n / 5) * 5;
console.log(roundToNext5(21))
