// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]



// function countBy(x, n) {
//     let z = [];
  
//     return z;
//   }


// need a loop to go through n times at x  increment 
// using push to add numbers to blank array


let countBy = (x,n) => {
let xArr = [];
for (let count = 1; count <= n; count++){
    xArr.push(x * count);
}
return xArr;
}


function countBy (x,n) {
  let xArr = [];
  for (let count = 1; count <= n; count++){
    xArr.push(x * count);
  }
  return xArr;
}
console.log(countBy(2,5));
