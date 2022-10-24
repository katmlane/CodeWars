// Given an array of numbers, check if any of the number s are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// function isVow(a){

// }

// vowelASCII = [97, 101, 105, 111, 117];

// need to loop through user input array and search for the vowel codes. If they are present replace with string letter
//examples
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,// Given an array of numbers, check if any of the number s are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// function isVow(a){

// }

// vowelASCII = [97, 101, 105, 111, 117];

// need to loop through user input array and search for the vowel codes. If they are present replace with string letter
//examples
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])) // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103])) //["e",121,110,113,113,103,121,121,"e",107,103]


const  isVow = a => {
  const vowelASCII = [97, 101, 105, 111, 117];
  const vowelStr = ["a" , "e", "i", "o", "u"];
  let resArr = [];
  //loop through user array and check for key values to replace, if not then push number
  for (i = 0; i < a.length; i++){
    if (a[i] === 97) {
      resArr.push("a");
    }
    else if (a[i] === 101) {120,106])) // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103])) //["e",121,110,113,113,103,121,121,"e",107,103]


const  isVow = a => {
  const vowelASCII = [97, 101, 105, 111, 117];
  const vowelStr = ["a" , "e", "i", "o", "u"];
  let resArr = [];
  //loop through user array and check for key values to replace, if not then push number
  for (i = 0; i < a.length; i++){
    if (a[i] === 97) {
      resArr.push("a");
    }
    else if (a[i] === 101) {
      resArr.push("e");
    }
    else if (a[i] === 105) {
      resArr.push("i");
    } 
    else if (a[i] === 111) {
      resArr.push("o");
    } 
    else if (a[i] === 117) {
      resArr.push("u");
    }
    else {
      resArr.push(a[i]);
    }
  }
  return resArr;
};

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))


// code wars solution that incorperated using an object I wanted to try

const isVow = a =>{
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  return a.map( num => map[num] ? map[num] : num);
}


// code wars soln that used new built in methods I want to check out 

function isVow(a){
const vowels = ['a', 'e', 'i', 'o', 'u'];
return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
}
