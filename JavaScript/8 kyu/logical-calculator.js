// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).


// function logicalCalc(array, op){
//   //your code here
// }

//examples

//console.log(logicalCalc([true, true, true, false], "AND")) //false
//console.log(logicalCalc([true, true, true, false], "OR")) //true
//console.log(logicalCalc([true, true, true, false], "XOR")) //true

//user will input an array of booleans and a logical operator
//the goal is to return a single boolean which is the result of looping through the array with the logical operator. 
//loop through array, inside loop have a conditional that will reduce the array to the appropriate boolean 

// const logicalCalc = (array, op) => {
//   let res;
//   //need counter for XOR
//   let counter = 0;
//   //need to loop through elements
//   for (let i = 0; i < array.length; i++) {
//     //AND operator, looks to see if it includes false, if so returns false
//     if (op === "AND") {
//       if (array.includes(false)) {
//         res = false;
//       } 
//     }
//     //OR operator, looks to see if it includes true, if so it returns true
//     else if (op === "OR") {
//       if (array.includes(true)) {
//         res = true;
//       }
//     }
//     //XOR operator require a counter to determine if the average of all the elements is not equal. if the amount of each boolean are equal then false
//     else if (op === "XOR") {
//       //if this counter is not 0 then the answer is true, otherwise false 
//       if (array[i] === false) {
//         counter = counter - 1;        
//       }
//       else if (array[i] === true) {
//         counter = counter + 1;
//       }
//       console.log(counter)
//       counter != 0 ? res = true : res = false;
//     }  
//   }
//   return res
// };



const logicalCalc = (array, op) => {
  let res;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (op === "AND") {
      if (array.includes(false) || !array) {
        res = false;
      } 
    }
    else if (op === "OR") {
      if (array.includes(true)) {
        res = true;
      }
      else {
        res = false;
      }
    }
    else if (op === "XOR") {
      if (array[i] === false) {
        counter = counter - 1;        
      }
      else if (array[i] === true) {
        counter = counter + 1;
      }
      console.log(counter)
      counter != 0 ? res = true : res = false;
    }
  }
  return res
};

console.log(logicalCalc([true, false, false, false], "AND")) 


//understood this kata incorectly as I could just use the operator

function logicalCalc(array, op) {
  switch ( op ) {
    case "OR":
     return array.reduce( (a, b) => a || b );
    break;
    case "AND":
      return array.reduce ( (a, b) => a && b);
    break;
    case "XOR":
      return array.reduce ( (a, b) => a != b);
    break;
  }
};
