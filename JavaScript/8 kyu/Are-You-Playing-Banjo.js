// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//   // Implement me
//   return name;
// }

//parameters

//string 

//return

// name + "plays banjo"  // name starts with R or r
//name + "does not play banjo" // name does not start with R or r

//examples

//console.log(areYouPlayingBanjo("Adam"))  // "Adam does not play banjo"
//console.log(areYouPlayingBanjo("Paul"))  // "Paul does not play banjo"
//console.log(areYouPlayingBanjo("Ringo")) //"Ringo plays banjo"
//console.log(areYouPlayingBanjo("bravo")) //"bravo does not play banjo"
//console.log(areYouPlayingBanjo("rolf")) // "rolf plays banjo"

//pseudo code

// need to check the first letter of str and check for "r" or "R"
//if "r" or "R" need to use `${name}` and "plays banjo" to display


// const areYouPlayingBanjo = name => {
//   //checks for name starting with r/R
//   if (name[0] === "r" || name[0] === "R") {
//     return `${name} plays banjo`
//   } 
//   else {
//     return `${name} does not play banjo`
// }
// };



//refactored


const areYouPlayingBanjo = name => name[0] === "r" || name[0] === "R" ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo(""))
