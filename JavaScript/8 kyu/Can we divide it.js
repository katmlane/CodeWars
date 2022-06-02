// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.


//parameters

//3 numbers (isdivisable, a , b) all will be integers

//returns

//boolean if number is divisable by a and b 

//examples

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true


//pseudocode

// Need to check if number % a = 0 and number % b = 0 


// function isDivideBy(number, a, b) {
//   // good luck
// }


// const isDivideBy = (number,a,b) => {
//   if (number % a === 0 && number % b === 0) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false)
//     return false
//   }
// }




//refactored

const isDivideBy = (number, a , b) => number % a === 0 && number % b === 0 ? true : false;


console.log(isDivideBy(45, 1, 6))

// after completing the kata I realized I was using a string and not a boolean in the return
