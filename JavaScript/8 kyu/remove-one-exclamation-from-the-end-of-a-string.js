// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


// function remove (string) {
//     //coding and coding....
//     return '';
//   }


// const remove = string => {
//   sArr = string.split("");
//   if (sArr[-1] == "!") {
//     sArr.pop();
//   }
//   return sArr.join("")
// }
// console.log(remove("Hi!"))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

//learned about a new method for strings, I rely too heavily on array manipulation sometimes


const remove = string => string.endsWith("!") ? string.slice(0,-1) : string;

console.log(remove("Hi!"))