// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// const sequenceSum = (begin, end, step) => {
//   // May the Force be with you
// };

//parameters

//start number, end number, interval

//return 

// the sum of the array created

//examples

//console.log(sequenceSum(2, 6, 2)) //12
//console.log(sequenceSum(1, 5, 1)) //15
//console.log(sequenceSum(1, 5, 3)) //5


//pseudocode

// need to create and array using the first two parameters, and increment with the third integer
//need to reduce the array

const sequenceSum = (begin, end, step) => {
  let numArr = [];
  for (let i = begin; i <= end; i += step) {
    numArr.push(i);    
  }
  console.log(numArr)
   return numArr.reduce((a,b) => a + b, 0)
};

console.log(sequenceSum(2, 6, 2))
