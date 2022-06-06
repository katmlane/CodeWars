// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// function divisibleBy(numbers, divisor){

// }


//
//  Parameters
//

// an array of integers and an integer


//
//  Returns
//

//an array of numbers that are divisible by the second number 

//
//  Examples
//

    // divisibleBy([1,2,3,4,5,6], 2)  //[2,4,6]
    // divisibleBy([1,2,3,4,5,6], 3)  //[3,6}
    // divisibleBy([0,1,2,3,4,5,6], 4)   //[0,4]
    // divisibleBy([0], 4) //[0]);
    // divisibleBy([1,3,5], 2)   //[]

//
//  PseudoCode
//


//need to create a return Array
//need to loop through each array and see if x is divisible by the second integer imput

//used a filter which was even easier than a forEach or map imo
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// const divisibleBy = (numbers, divisor) => {

//     return numbers.filter(num => num % divisor === 0);

// }


//refactored



const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);

console.log(divisibleBy([0], 4) )