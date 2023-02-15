
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.





//
//  Parameters
//

// An array of numbers. Can be empty

//
//  Returns
//

//the average of the array
//array can be empty and should return 0

//
//  Examples
//

// find_average([1,2,3,4]) // 2.5
// 


//
//  PseudoCode
//

// need to add each number in list 
// the divide by the length of the list
// have an exception for if the array is empty





// function find_average(array) {
//     // your code here
//     return 0;
//   }

// let find_average = array => {
//     if (array.length === 0 ) {
//         console.log("I'm empty")
//         return 0
//     } else if (array.length > 0){
//         let sum = array.reduce((a,b) => a + b, 0)
//         return sum/array.length
//     }

// }

// console.log(find_average([1,2,3,4]))


// refactor 

let find_average = array => !array.length ? 0 : array.reduce((a,b) => a + b, 0)/ array.length;

function find_average () {
  //if array length is 0 then return 0, else reduce array and divide by length
return !array.length ? 0 : array.reduce((a,b) => a + b, 0)/ array.length
}

console.log(find_average([]))
