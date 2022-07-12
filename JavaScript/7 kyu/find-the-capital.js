// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// var capitals = function (word) {
// 	// Write your code here
// };

//parameters 

//a  single string as an argument

//returns

//an array of the indexes of the capital letters

//examples
//console.log(capitals('CodEWaRs'))  // [0,3,4,6]

//pseudocode

//need to search through the the string and check for isUpperCase
//if letter isUpperCase then need to push the indexOf that character to an array
// indexOf is not the method I wanted instead i should just be using the variable i itself


const capitals = word => {
  let capitalIndexArr = [];
  //loop to look at each char of the word
  for (let i = 0; i < word.length; i++) {
    //conditional to check if the char of the index is uppercase
    if (word[i] === word[i].toUpperCase()){
      //pushes the index of the char to an array
      capitalIndexArr.push(i);
    }
  }
  return capitalIndexArr;
}
  
  


  console.log(capitals('CodEWaRs')) 
