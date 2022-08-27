// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


// function stringy(size) {
//   // your code here   
// }

//parameters 

//a string 


//returns

//a string of 1 and 0s

//examples

//console.log(stringy("hello")) // "10101"

//pseudocode

//need to determine the length of size and populate the 1 at even indexs and 0 at odds

// const stringy = size => {
//   let strArr = [];
//   for (i =0; i < size.length; i++){
//     console.log(i)
//     if (i % 2 === 0) {
//       strArr.push("1");
//     }
//     else if (i %2 !== 0){
//       strArr.push("0")
//     }
//   }
//   return strArr.join("");
// }

// console.log(stringy("hello"))

//refactored

const stringy = size => {
  let strArr = [];
  for (i =0; i < size; i++){
    i % 2 === 0 ? strArr.push("1") : strArr.push("0");
  }
  
  return strArr.join("");
};
console.log(stringy(5))
