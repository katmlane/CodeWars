// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



// function isPangram(string){
//   //...
// }

//parameters

//string

//return 

//boolean 
//true if pangram
//false if not

//examples

//console.log(isPangram("The quick brown fox jumps over the lazy dog"))  //true
//console.log(isPangram("Hello"))  //false


//pseudocode
//need to turn string into an array of single letters
//need to check every element and compare to alphabet


//no idea how to tackle this so I went to the mdn to find how i could accomplish this without a large loop

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//if array is empty it will return true so I need to ensure there is a conditional for this

// const isPangram = string => {
//   //alphabet to compare
//   const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   //make the string into an array of single letters
//   const stringArr = string.toLowerCase().split(" ").join("").split("");
//   console.log(stringArr)
  
//   //using every to compare alpha to stringArr
//     const pangram = alpha.every(element => stringArr.includes(element));
//     console.log(pangram);
//     return pangram
 
  
  
// }

//console.log(isPangram(""))


//refactor

const isPangram = string => {
  //alphabet to compare
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //make the string into an array of single letters
  const stringArr = string.toLowerCase().split(" ").join("").split("");
  console.log(stringArr)
  
  //using every to compare alpha to stringArr
    return alpha.every(element => stringArr.includes(element));
     
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))


//Code was soln that I wanted to look into

// function isPangram(str) {
//     var s = str.toLowerCase();
//     var letters = "zqxjkvbpygfwmucldrhsnioate";
//     for (var i = 0; i < 26; i++)
//         if (s.indexOf(letters.charAt(i)) == -1)
//             return false;
//     return true;
// }
