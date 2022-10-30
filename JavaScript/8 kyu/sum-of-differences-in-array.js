// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//function sumOfDifferences(arr) {
//}

//console.log(sumOfDifferences([1, 2, 10])) // 9
//console.log(sumOfDifferences([-3, -2, -1])) // 2


//the user will input an array of numbers, we are to return the sum of the differences between consecutive pairs. 
//the best way to do this is the loop through the array's elements 
// need a new array to hold the differences between the sorted array greated to least
// resArr. push (arr[i] - arr[i + 1])
// return resArr.reduce

// const sumOfDifferences = arr => {
//   //result array
//   let resArr =[];
//   //loop through elements, in order to stop i from becoming the last index we make the parameters to go to the arr.length -1
//   for (i = 0; i < arr.length - 1; i++) {
//     //push each difference to the resArr
//     resArr.push(Math.abs(arr[i] - arr[i + 1]));
//   }
//   //returning the sum of the resArr elements
//   return resArr.reduce((a,b) => a + b, 0);
// }

// console.log(sumOfDifferences([-3, -2, -1]))

//I realized that I need to make sure the array was sorted in descending order and also create a condition to check if empty array or only one element. 

const sumOfDifferences = arr => {
  let resArr =[];
  const sortArr = arr.sort((a,b) => a - b);
  if (!arr || arr.length == 1) {
    return 0
  }
  else {
    for (i = 0; i < arr.length - 1; i++) {
    resArr.push(Math.abs(arr[i] - arr[i + 1]));
    }
  }   
  return resArr.reduce((a,b) => a + b, 0);
};


// console.log(sumOfDifferences( [-11,11,-3]))
