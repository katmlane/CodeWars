// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

// function findOdd(A) {
//happy coding!
//   return 0;
// }

/// need to look at each element and compare it to the others and filter out how many times it occurs

// need to take that number and % 2 = 1 which will give all odd occurances

//return number that is % 2 = 1

// const findOdd = A => {

//   let sortedArr = A.sort((a,b) => a-b);

//   for (let i = 0; sortedArr[i] === sortedArr[i+1]; i++){

//   }

//   return sortedArr
//   // if (sortedArr[0] === sortedArr[1]) {

//   // }

// }

//figured out I needed nested for loops and I was almost there!
// https://sebhastian.com/nested-loops-javascript/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

console.log(findOdd(A));

const findOdd = (A) => {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    //console.log(i);
    for (let j = 0; j < arr.length; j++) {
      //console.log(j);
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
};
