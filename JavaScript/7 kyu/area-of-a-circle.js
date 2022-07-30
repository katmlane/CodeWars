// Complete the function circleArea so that it will return the area of a circle with the given radius. Round the returned number to two decimal places (except for Haskell). If the radius is not positive or not a number, return false.

// Example:

// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
// circleArea(43.2673);     //returns 5881.25
// circleArea(68);          //returns 14526.72
// circleArea("number");    //returns false


// var circleArea = function(radius) {
  
// };

//parameters

//an integer that represents a radius
//can be negative or not an integer

//return 

//false if negative or not a number 
// area of circle 

//examples

//console.log(circleArea(-1485.86)) // false
//console.log(circleArea(0)) // false
//console.log(circleArea(43.2673)) // 5881.25
//console.log(circleArea(68)) // 14526.72
//console.log(circleArea(-1485.86)) // false

//pseudo code

//need to check if acceptable integer 
//need to do the circle maths 
//need to return with 2 decimels
//A=πr2
//https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/#:~:text=Using%20the%20Custom%20Function%20to%20Round%20a%20Number%20To2%20Decimal%20Places%20in%20JavaScript,-JavaScript&text=Copy%20function%20roundToTwo(num)%20%7B,2%22)%3B%20%7D%20console.


// const circleArea = radius => {
//   if (typeof radius !== "number" || radius <= 0){
//     return false;
//   }
//   else { 
//     return Number((Math.PI * Math.pow(radius, 2)).toFixed(2))
//   }
// };


//refactored

const circleArea = radius => (typeof radius !== "number" || radius <=0)? false : Number((Math.PI * Math.pow(radius, 2)).toFixed(2));

console.log(circleArea(68))
