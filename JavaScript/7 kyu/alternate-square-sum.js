// Complete the function that takes an array of integers as input and finds the sum of squares of the elements at even positions (i.e. 2nd, 4th, etc.) plus the sum of the rest of the elements at odd position.

// For empty arrays, result should be zero (except for Haskell).

// Note
// The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

// Example
// [11, 12, 13, 14, 15]  -->  379
// # 1.  2.  3.  4.  5.  position

// 11 + 12^2 + 13 + 14^2 + 15 = 379
// Explanation:

// Elements at indices 0, 2, 4 are 11, 13, 15 and they are at odd positions as 11 is at position #1, 13 is at position #3 and 15 at #5.

// Elements at indices 1, 3 are 12 and 14 and they are at even position. So we need to add 11, 13, 15 as they are and square of 12 and 14


// function alternateSqSum(arr){
//   // happy coding :D
// }


// For this kata I need to take the user data which should be an array and return an array that is the sum of all the odd indicies along with the square of the positive indicies. 
// In order to complete this I know that I will need to create a loop. If the indicies % 2 === 0 then we can just push the number to the new array. For indicies % 2 !== 0 then we will push the square of that value to the new array. After that we can reduce the new array with the new elements and return the sum. 


// const alternateSqSum = arr => {
  
//   let resArr = [];
//   for (let i =0; i < arr.length; i++) {
//     if ( i % 2 === 0) {
//       resArr.push(arr[i]);
//     }
//     else if ( i % 2 !== 0 ) {
//       resArr.push(Math.pow(arr[i],2));
//     }
//     console.log(resArr);
//   }
//   return resArr.reduce((a,b) => a + b, 0);
  
// }


//refactored

const alternateSqSum = arr => {
  
  let resArr = [];
  for (let i =0; i < arr.length; i++) {
     i % 2 === 0? resArr.push(arr[i]) : resArr.push(Math.pow(arr[i],2))
  }
  return resArr.reduce((a,b) => a + b, 0);
  
}


console.log(alternateSqSum([11, 12, 13, 14, 15]))
