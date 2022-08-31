// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false


// function isPalindrome(line) {
//   return undefined;
// }

//parameters 

// a string or number 

//return 

// a boolean

//examples

//console.log(isPalindrome("anna")) // true
//console.log(isPalindrome("walter")) //false
//console.log(isPalindrome(12321)) // true
//console.log(isPalindrome(123456)) //false

//pseudocode

//need to split the line into an array and and slice where the the array is equal on both sides
//need to compare the first half to the reversed second half \
//if === then true 
//else false

// const isPalindrome = line => {
//   // convert string to an array
//     const lineArr =line.split('');

//     // reverse the array values
//     const reverseLineArr = lineArr.reverse();

//     // convert array to string
//     const reverseLine = reverseLineArr.join('');

//     if(line== reverseLine) {
//        return true
//     }
//     else {
//         return false;
//     }
  
// } 
// console.log(isPalindrome("anna"))

//refactored 
const isPalindrome = line => { 
    const lineStr = line.toString()
    const lineArr =lineStr.split(''); 
    const reverseLineArr = lineArr.reverse(); 
    const reverseLine = reverseLineArr.join(''); 
    return line == reverseLine ? true : false; 
}; 
console.log(isPalindrome("anna"))
