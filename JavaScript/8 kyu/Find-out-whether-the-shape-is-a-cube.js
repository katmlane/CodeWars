// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: the sides must be integers

//  var cubeChecker = function(volume, side){
//   return false;
// };

//PARAMETERS

// 2 integers, volume and side

//returns

//boolean, check to see if shape is cube

//examples


//console.log(cubeChecker(56.3, 1)) //false
//console.log(cubeChecker(-1, 2)) //false
//console.log(cubeChecker(8, 3)) //false
//console.log(cubeChecker(8, 2)) // true

//pseudocode

//need to compare s ^ 3 and compare to volume, if equal return true

const cubeChecker = (volume, side) => {  
    if ( side <= 0 || volume <= 0 ) {
      return false
    }
    else   {
     return Math.pow(side, 3) === volume ? true : false; 
    }
  };
  
  console.log(cubeChecker(8, 2))
  
  const cubeChecker = (volume, side) => Math.pow(side, 3) === volume ? true : false;