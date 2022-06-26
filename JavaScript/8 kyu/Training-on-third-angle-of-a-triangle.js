// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// function otherAngle(a, b) {
//   return 0;
// }


//parameter

//two integers

//return 

// integer that is the result of the other angles

//examples

// console.log(otherAngle(30, 60))   // 90
// console.log(otherAngle(60, 60))   //60
// console.log(otherAngle(43, 78))   // 59
// console.log(otherAngle(10, 20))   //150


//psuedocode

//a triangle should equal 180 degrees

//result angle = 180 - angle a - angle b

// const otherAngle = (a,b) => {
//   let triangle = 180;
//   return triangle - a - b;
  
  
// }


//refactored

const otherAngle = (a,b) => 180 - a - b;


console.log(otherAngle(43, 78))
