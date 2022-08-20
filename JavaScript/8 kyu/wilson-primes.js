// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.


// function amIWilson(p) {
//   // check if prime is Wilson
// }

//parameters 

//an integer

//return 

//boolean

//examples

//console.log(amIWilson(5)) //true
//console.log(amIWilson(9)) // false
//console.log(amIWilson(6)) // false

//pseudocode
//https://en.wikipedia.org/wiki/Wilson_prime
//need to plug in the number into equation and if whole number return true, false else

const amIWilson = p => {
    const factorial = n => {
      if (n < 0) {
        return -1;
      }
      if ( n ===0 ) {
        return 1;
      }
      return n * factorial(n - 1)
    }
    
    return ((factorial(p-1) + 1) % (p * p)) === 0 ? true : false;
  };
  
  console.log(amIWilson(6))
  
  
  // I learned in this kata that I needed to have a for loop run the factorial for me within the function to check for a wilson prime.