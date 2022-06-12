// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//function accum(s) {
	// your code
//}


//parameters 

// a string which includes letters from a..z and A..Z.

//return 

//a string seperated by dashes, each letter increasing by one as the index increases

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//pseudocode

//need to seperate the str into an arr
//need to make a loop for each index of s[i]
//need capitalize the first letter and join the multiples based on index
//need to join with a "-"


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format


// const accum = s => {
//   let sArr = [];
//   for (let i=0; i > s.length; i++) {
//     sArr.push(format(s[i], i + 1));
//   }
//   return sArr.join("-")
//   const format = (s, num) => {
//     let letter = s.UpperCase()
//     while (letter.length !== num) {
//       letter += s.toLowerCase();
//     };
//     return letter;
//   }
    
// };


//could not figure out a loop so went with a map


// const accum = s => {
//   const sArr = s.split("")
//   return sArr.map((character, index) =>{
//     if (index === 0) {
//       return character.toUpperCase()
//     }
    
//     return character.toUpperCase() + character.repeat(index).toLowerCase();
    
//   }).join("-")
    
// };





//refactored


const accum = s => s.split("").map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join("-");


console.log(accum('abcdefg'))
