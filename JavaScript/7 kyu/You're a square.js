// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.


// var isSquare = function(n){
//     return false; // fix me
//   }



//parameters 

//a number


//return 

// boolean

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false





//pseudocode


// I was unsure how to approach this so I went to the mdn to figure out what Math. could do for me 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//Math.sqrt(x) lets me return a value for the square root of x
//I then needed to find something for checking for a decimal. 
//I came across a websearch that suggested multiplying the resuulting number by 10
//x*10 % 1 = 0 if it does not equal 0 it will be a decimal



// const isSquare = n => {
//     let squareRoot = Math.sqrt(n);
//     const nonDecimal = squareRoot * 10;
    
//     if (nonDecimal % 1 === 0){
//         return true;
//     } 
//     else {
//         return false
//     }
// }





//refactored
//do not need to multiply it by 10 to determine if decimal 

const isSquare = n => Math.sqrt(n) % 1 === 0 ? true : false;


console.log(isSquare(5.5))