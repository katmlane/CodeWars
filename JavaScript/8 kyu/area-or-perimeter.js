// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


// const areaOrPerimeter = function(l , w) {
//   // Return your answer
// };


//parameters

//two integers

//returns

//area if square
//perimeter if rectangle

//examples

//areaOrPerimeter(6,10) // 32
//areaOrPerimeter(3,3)  // 9

//pseudocode

// need to check if values are the same and if they are then return l*w
//if integers are different need to return l*2 + w*2 


// const areaOrPerimeter = (l , w) => {
//   if (l === w) {
//     return l*w
//   }
//   else {
//     return 2*l + 2*w 
//   }
// };



//refactored 

const areaOrPerimeter = (l , w) => l === w ? l*w : 2*l + 2*w;


console.log(areaOrPerimeter(3,3))


function areaOrPerimeter (l,w) {
      if (l === w) {
    return l*w
  }
  else {
    return 2*l + 2*w 
  }
}