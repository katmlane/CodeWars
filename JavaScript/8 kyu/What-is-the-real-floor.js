// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.


// function getRealFloor(n) {
// }

//need to check for certain conditions. 
//if n <= 0, then return n
//if n > 0 && n < 14, then return n - 1
//there should be no n= 13, then n-1
//if n > 13, then return n - 2


//console.log(getRealFloor( 1)) //0
//console.log(getRealFloor( 5)) // 4
//console.log(getRealFloor( 15)) //13
//console.log(getRealFloor( -2)) // -2
 

const getRealFloor = n => {
  let euroFloor;
  if (n <= 0) {
    euroFloor = n;
  }
  else if (n>0 && n < 14) {
    euroFloor = n - 1;
  }
  else if( n > 13){
    euroFloor = n - 2;
  }
  return euroFloor
};

console.log(getRealFloor( 15))


// function getRealFloor(n) {
//   return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }
