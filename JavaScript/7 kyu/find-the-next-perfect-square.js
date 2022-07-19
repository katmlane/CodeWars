// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return -1;
// }

//parameters 

// an integer

//return 

// the next consective perfect square

// examples

//console.log(findNextSquare(121)) // 144
//console.log(findNextSquare(625)) // 676
//console.log(findNextSquare(319225)) // 320356
//console.log(findNextSquare(15241383936)) // 15241630849
//console.log(findNextSquare(155)) // -1
//console.log(findNextSquare(342786627)) // -1


//pseudocode

//need to sq root the integer given and see if it is a whole number
//if num % 1 !== 0, then return -1
//if num % 1 === 0, then num + 1, then Math.pow(newNum, 2)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt


// const findNextSquare = sq => {
//   if (Math.sqrt(sq) % 1 !== 0){
//     return -1
//   }
//   else if (Math.sqrt(sq) % 1 ===0) {
//     return Math.pow ((Math.sqrt(sq) + 1), 2)
//   }
// };


//refactored 

const findNextSquare = sq => Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow((Math.sqrt(sq) + 1), 2);
console.log(findNextSquare(319225))
