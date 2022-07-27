// As the title suggests, this is the hard-core version of another neat kata.

// The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
// If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

// Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.

// function sequenceSum(begin, end, step){
//   //your code here
// }


//parameters

//start number, end number, interval

//return 

// the sum of the array created from the smaller number to the larger number at a certain interval

//examples

//console.log(sequenceSum(2, 6, 2)) //12
//console.log(sequenceSum(1, 5, 1)) //15
//console.log(sequenceSum(1, 5, 3)) //5
//console.log(sequenceSum(-1, -5, -3)) //-5
//console.log(sequenceSum(16, 15, 3)) //0
//console.log(sequenceSum(-24, -2, 22)) //-26
//console.log(sequenceSum(780, 68515438, 5)) //469436517521190







// const sequenceSum = (begin, end, step) => {
//   let numArr = [];
//   if (step <= 0) {
//     for (let i = begin; i >= end; i -= step) {
//     numArr.push(i);    
//     }
//   }
//   else if (begin < end) {
//     for (let i = begin; i <= end; i += step) {
//     numArr.push(i);    
//     }
//     console.log("begin smaller")
//   }
//   else if(end < begin && step > 0){
//     return 0;
//     console.log("end smaller")
//   }
//   console.log(numArr)
//    return numArr.reduce((a,b) => a + b, 0)
// };



const sequenceSum = (begin, end, step) => {
  let sum = 0;
  if (begin === end) {
    sum = begin;
  }
  if ((begin < end && step > 0) || (begin > end && step < 0)) {
    var n = Math.floor((end - begin) / step) + 1;
    sum = n * ((2 * begin) + (n - 1) * step) / 2;
  } 
  return sum;
}

console.log(sequenceSum(780, 68515438, 5));
