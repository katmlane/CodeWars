// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


// const stringToNumber = function(str){
//     // put your code here
//     return null;
//   }


//
//  Parameters
//

//all inputs will be a string

//
//  Returns
//

//returns a number 

//
//  Examples
//

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//
//  PseudoCode
//


// there is a built in prototype method that will convert a string into a number




// const stringToNumber = str => {
//     return Number(str)
// };


const stringToNumber = str => Number(str);


function stringToNumber (str) {
    return Number(str);
}

console.log(stringToNumber("1234"))
