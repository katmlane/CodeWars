// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


// function findSum(n) {
//   return 0;
// }


//parameters 

//an integer

//return 

// the sum of the numbers 0 -> n that can be divided by 5 and 3

//examples 


//console.log((findSum(5)) //8 (3 + 5)
//console.log(findSum(10)) //33 (3 + 5 + 6 + 9 + 10)

//pseudocode 

// need to create an array 0 - n 
//need to look at array and filter anything with e % 3 = 0 and e % 5 = 0
//need to reduce the addThreeFive array

// const findSum = n => {
//   // empty array for numbers
//   let numArr =[];
//   //loop to create number arr 
//   for( let i = 1; i <= n; i++) {
//     numArr.push(i)    
//   }
//   // get numbers that are divisable by 3 or 5 
//  let filteredArr = numArr.filter((x) => x % 3 === 0 || x % 5 === 0);
//   //reduce the array for a sum 
//   return filteredArr.reduce((a, b) => a + b, 0)
//   console.log(numArr)
  
// };


//refactored 

const findSum = n => {
  // empty array for numbers
  let numArr =[];
  //loop to create number arr 
  for( let i = 1; i <= n; i++) {
     if (i % 3 === 0 || i % 5 === 0 ) {
       numArr.push(i)    
     }
  }
  
  //reduce the array for a sum 
  return numArr.reduce((a, b) => a + b, 0)
  console.log(numArr)
  
};


console.log(findSum(5))
