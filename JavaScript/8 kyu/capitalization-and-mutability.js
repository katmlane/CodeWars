// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }


//parameters

//a string from 1-10 characters

//return

//string returned with a capital letter

//examples

//console.log(capitalizeWord("word")) // "Word"
//console.log(capitalizeWord('i')) // "I"
//console.log(capitalizeWord('glasswear')) // 'Glasswear'


//pseudocode

//going to use a loop for the index of the string and also the .toUpperCase() function

// const capitalizeWord = word => {
    
//   let splWord = [];
//   for (i=0; i < word.length ; i++) {
//     if ( i === 0) {
//       splWord.push(word[i].toUpperCase())
//     }
//     else {
//       splWord.push(word[i])
//     }
//   }  
//   return splWord.join("");
// };

// console.log(capitalizeWord("word"))

//refactored

const capitalizeWord = word => {
    let splWord = [];
    for (i=0; i < word.length ; i++) {
       i === 0 ? splWord.push(word[i].toUpperCase()) :splWord.push(word[i]);
      }
    return splWord.join("");
  };
  
  console.log(capitalizeWord("word"))