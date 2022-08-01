// Determine the area of the largest square that can fit inside a circle with radius r.

// function areaLargestSquare(r) {
//   return ; //code here
// }


//parameters 

//integer representing r

//returns

//integer representing the area of the largest square that will fit in it

//examples

//console.log(areaLargestSquare(5)) //50
//console.log(areaLargestSquare(7)) //98
//console.log(areaLargestSquare(15)) //450

//pseudocode

//https://geometryhelp.net/square-inscribed-in-a-circle/
//need to calculate the area of the circle
//square diagnal will be the same as r
// the area is then 2r2, and the perimeter is 4·r·√2.


const areaLargestSquare = r => {
    return 2 * Math.pow(r,2);
  }
  
  console.log(areaLargestSquare(15))
  
  //refactored
  
  const areaLargestSquare = r => 2 * Math.pow(r,2);