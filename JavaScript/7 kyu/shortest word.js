// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s){
// }

//parameters 

//a string of words 

//returns

//a string of the shortest length


//examples

//console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //  3
//console.log(findShort("turns out random test cases are easier than writing out basic ones"))  //  3
//console.log(findShort("Let's travel abroad shall we"))   //  2


//pseudocode

//I need to split(" ") the string into an array 
//I need to return the min word.length of the array
//going to use sort to find the length of s[0]


// const findShort = s => {
//   // this turns my string into an array
//   const sArr = s.split(" ");
//   //this sorts my array by word length
//   const sortedArr = sArr.sort((a,b) => a.length - b.length);
//   // this selects my shortest word
//   const shortest = sortedArr[0];
//   //this is the length of the shortest word returned
//   return shortest.length;
  
  
// }



// refactored


// const findShort = s => {
//  const sorted = s.split(" ").sort((a,b)=> a.length - b.length);
//  return sorted[0].length
// }

//curiosity ... turns out this is as far as I could get this

const findShort = s =>  s.split(" ").sort((a,b)=> a.length - b.length)[0].length;

console.log(findShort("turns out random test cases are easier than writing out basic ones")) 
