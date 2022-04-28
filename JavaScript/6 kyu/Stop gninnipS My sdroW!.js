//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"



string = "This is an example!";
let reverseWordsExceptFour = (str) => {
  let reverseStr = str.split("")
.reverse().join("");
  //if ()
  let finalStr = reverseStr.split(" ").reverse().join(" ");
  return finalStr;
};
console.log(reverseWordsExceptFour(str));


//have sentence that needs to be broken into an array .split(" ")
//array needs to be iterated and checked check for .length > 4 
// if(.length > 4 ) { let reverseWord = word.reverse}
// reversed words need to be .join(" ")




//have sentence that needs to be broken into an array .split(" ")

// this is a test 
// let spinWords = string => {
//     return string.split(" ")
// }

// console.log(spinWords(string))


//array needs to be iterated and checked check for .length > 4 

let spinWords = string => {
    
    let splitStr = string.split(" ");
    console.log(splitStr);
    let reverseWords = word => {
        return word.split("").reverse().join("")
    }

    for (let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length > 4) {
            const wordReversed = splitStr[i];
            splitStr[i] = reverseWords(wordReversed)
        }
    }
    return splitStr.join(" ")
};

console.log(spinWords(string))
