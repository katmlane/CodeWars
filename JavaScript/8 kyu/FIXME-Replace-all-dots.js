// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.


// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

//parameters 

//string

//returns

//"." replaced with "-"

//examples

//console.log(replaceDots("one.two.three")) //"one-two-three"

//pseudocode

//need to use spilt and join

const replaceDots = str => {
    return str.split(".").join("-");
}

console.log(replaceDots("hey.how.are.you"))


//refactored 


const replaceDots = str => str.split(".").join("-");