// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz



// function contamination(text, char){
//   // Code here ;)
// }


//need to create a loop that replaces the letter user input to replace each character of the string input. The return will be a string  the same length as the user input but returned with the selected character 

//console.log(contamination("abc","z")) // zzz 
//console.log(contamination("","z")) // ""
//console.log(contamination("abc","")) // ""
//console.log(contamination("_3ebzgh4","&")) // "&&&&&&&&" 
//console.log(contamination("//case"," ")) // "      " 


const contamination = (text, char) => {
  let resArr =[];
  let spltArr = text.split("");
for (let i =0; i < spltArr.length; i++) {
  if (spltArr[i] == " ") {
    resArr.push(" ");      
      }
  else if (spltArr[i]) {
    resArr.push(`${char}`)
  }
  
}
return resArr.join("");
};

console.log(contamination("//case"," "))


//codewars soln. 

var contamination = (text, char) => [...text].map(e => e = char).join('')
