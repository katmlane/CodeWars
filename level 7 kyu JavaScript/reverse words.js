//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {

//   }
str = "This is an example!";
let reverseWords = (str) => {
  let reverseStr = str.split("").reverse().join("");
  let finalStr = reverseStr.split(" ").reverse().join(" ");
  return finalStr;
};
console.log(reverseWords(str));
