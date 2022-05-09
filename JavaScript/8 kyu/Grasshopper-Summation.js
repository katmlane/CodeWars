// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// var summation = function (num) {
//     // Code here
//   }

// need to set a counter and add all nums until the counter equals number given

let summation = num => {
    let sum = 0
    for (let i = 0; num >= i; i++) {
         sum += i
         console.log(sum)
    }

    return sum

    
}


console.log(summation(8))