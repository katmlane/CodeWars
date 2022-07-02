// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


// function solution(nums){

// }

//parameters

//an array of numbers 

//return

//sorted array of numbers

//examples

//console.log(solution([1, 2, 10, 50, 5])) //[1,2,5,10,50]

//PSEUDOCODE

//need to use sort and make sure that an eempty or "null" will return []


// const solution = nums => [...new Float64Array(nums).sort()];




//  if (nums && nums !== []) {
//     return nums.sort((a,b) => {
//         if (a < b) {
//             return -1;
//         }
//         if ( a > b) {
//             return 1;
//         }
//         return 0

//     });
//  }
//  else {
//     return []
//  }

// }



let solution = nums => nums.sort((a, b) => a - b);

console.log([1, 2, 10, 50, 5])