// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


// function sortByLength (array) {
//   // Return an array containing the same strings, ordered from shortest to longest
// };

//parameters 

//an array of strings 

//returns 

//the same array of strings but returned in a sorted fashion

//examples

//console.log(sortByLength(["Beg", "Life", "I", "To"])) // ["I", "To", "Beg", "Life"]
//console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))  // ["", "Pizza", "Brains", "Moderately"]
//console.log(sortByLength(["Longer", "Longest", "Short"])) // ["Short", "Longer", "Longest"]


//pseudocode 

// need to look at each element of the array and sort it by string length big to small.

const sortByLength = array => {
  return array.sort((a,b) => a.length - b.length)
}

console.log(sortByLength(["Longer", "Longest", "Short"]))

//refactored 

const sortByLength = array => array.sort((a,b)=> a.length - b.length)
