// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


// function isTriangle(a,b,c)
// {
//    return false;
// }

//parameters 

// three integers 

// returns 

// is it a triangle
// boolean true and false 

//examples 
//https://www.wikihow.com/Determine-if-Three-Side-Lengths-Are-a-Triangle



//console.log(isTriangle(1,2,2))  //true
//console.log(isTriangle(7,2,2))  //false


//pseudocode

//https://www.britannica.com/science/triangle-inequality
//had to look up how to determine if triangle 

//a + b ≥ c
//a + c ≥ b
//b + c ≥ a
// have to loop through all the possibe side combinations


// found I was using || when I should have been using &&

const isTriangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a ) {
    return true;
  }
  else {
    return false;
  }
};



//refactored


// const isTriangle = (a,b,c) => a + b > c && a + c > b && c + b > a;



console.log(isTriangle(7,2,2))
