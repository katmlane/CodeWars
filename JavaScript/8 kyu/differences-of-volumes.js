// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// function findDifference(a, b) {
//     //loading...
//   }

//parameters

// 2 array of integers above 0

//returns

// an integer that is the difference of the 2 volumes

//examples

//console.log(findDifference([3, 2, 5], [1, 4, 4])) //14
//console.log(findDifference([9, 7, 2], [5, 2, 2]) //106
//console.log(findDifference([11, 2, 5], [1, 10, 8]) //30
//console.log(findDifference([4, 4, 7], [3, 9, 3]) //31
//console.log(findDifference([15, 20, 25], [10, 30, 25]) //0

//pseudocode

// need to calculate volume and determine difference

// const findDifference = (a, b) => {
//     let aVolume =a.reduce((a,b) => a *b, 1);
//     let bVolume =b.reduce((a,b) => a *b, 1);
//     return Math.abs(aVolume - bVolume)
// }


// console.log(findDifference([9, 7, 2], [5, 2, 2]))


//refactored 

const findDifference = (a, b) => Math.abs((a.reduce((a,b) => a * b, 1)) - (b.reduce((a,b) => a * b, 1)));


console.log(findDifference([9, 7, 2], [5, 2, 2]))