// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   // ...
// }

//parameters

//a string of numbers

//returns 

// max and min number in string followed by a space

//examples


//console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))  //"42 -9"
//console.log(highAndLow("1 2 3"))  //"3 1"

// pseudocode

//Need to take string and split into an array
//use Math.min and Math.max to find the max and min of the array
//use ${} to return min and max seperated by a space

// const highAndLow = numbers => {
//   // numbers array
//   const strArr = numbers.split(" ");
//   console.log(strArr);
  
//   //need to turn elements into numbers, found this out because the Math.min and max returned NaN
//   const numArr = [];
//   //method to turn each str into a number
//   strArr.forEach((x) => {
//     return numArr.push(Number(x))
//   })
//   console.log(numArr)
//   //min and max variables
  
//   //in order to use the Math.min and max with the arr I needed to ... (deconstruct the array first)
//   const min = Math.min(...numArr);
//   const max = Math.max(...numArr);
//   console.log(max);
//   console.log(min);
//   return `${max} ${min}`
// }






//refactored 

const highAndLow = numbers => {
  //turn into an array of strings
  const numStr = numbers.split(" ");
  console.log(numStr)
  //turn the str into num
  const numArr = numStr.map((x) => {
    return Number(x);
  })
  // return result as string
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
  

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
