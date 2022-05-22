// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



//
//  Parameters
//

//an array of numbers

//
//  Returns
//

//average of numbers rounded down
//
//  Examples
//

// getAverage([2,2,2,2]) //2

//
//  PseudoCode
//

// need to reduce the numbers in the array and divide by array length\
// need to make sure to round downward


// function getAverage(marks){
//TODO : calculate the downward rounded average of the marks array
//   }

// let getAverage = marks => {
//     let sum = marks.reduce((a,b) => a+b,0);
//     return Math.floor(sum / marks.length)
// }


//refactor
let getAverage = marks => Math.floor(marks.reduce((a,b) => a + b, 0)/marks.length);


console.log(getAverage([2,2,2,2]))
