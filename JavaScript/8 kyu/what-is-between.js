// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// function between(a, b) {
//   // your code here
// }

//parameters

//two integers , a and b

//returns 

// return the integers from a - b including them

//examples

//console.log(between(1, 4)) //[1, 2, 3, 4]
//console.log(between(-2, 2)) //[-2, -1, 0, 1, 2]

//pseudocode

// need to create loop to iterate between a and b and return array 


const between = (a,b) => {
  arrAB = [];
  for ( a; a <= b; a++) {
    arrAB.push(a)
  }
  return arrAB
}

console.log(between(-2, 2))
