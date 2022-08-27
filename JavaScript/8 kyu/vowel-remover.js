// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// function shortcut (string) {
//   return '';
// }


//parameters 

// a string with vowels

//return 

//string with vowels removed

//examples


//console.log(shortcut("hello")) //"hll"
//console.log(shortcut("how are you today?")) //"hw r y tdy?"
//console.log(shortcut("complain")) //"cmpln"
//console.log(shortcut("never")) //"nvr"

//parameters

//need to split the string into an array 
//need to loop through each element and check if a vowel
//could use filter for this
//need to rejoin the string from the array

const shortcut = string => {
    let strArr = string.split("");
    let newArr = [];
    for (i=0; i < strArr.length ; i++) {
      if (strArr[i] !== "a" && strArr[i] !== "e" && strArr[i] !== "i" && strArr[i] !== "o" && strArr[i] !== "u") {
      newArr.push(strArr[i])
      }
    }
    return newArr.join("") 
    
  };
  
  console.log(shortcut("hello"))