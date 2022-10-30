// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


// function addLength(str) {
// //start-here
// }

//examples

// console.log(addLength('apple ban'))   // ["apple 5", "ban 3"]

// console.log(addLength('you will win'))   // ["you 3", "will 4", "win 3"]


//for this the user will input a string with at least one element. The words will always be seperated by a space. The return should be an array with each string element with the str.length seperated by a space. Each new string element should be contained in an array 


// const addLength = str => {
//   let strArr = str.split(" ");
//   return strArr.map((str) => `${str} ${str.length}`);
// }



//refactored 

const addLength = str => str.split(" ").map((str) => `${str} ${str.length}`);


console.log(addLength('apple ban'))
