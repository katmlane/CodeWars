/ Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]


// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.





// function comp(array1, array2){
//   //your code here
// }


//parameters

//two arrays 

//returns

//boolean 

//if true if arr2 contail squares of the elements 
//false else including empty arrays

//examples


//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361])) //true

//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])) // false

//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361])) //false

//pseudocode

// need to square all the numbers in arr1 
//need to compare arr2 to arr1, probably going to use the new method I learned .every(element => element)

// const comp = (array1, array2) => {
//   //squaring the first array for comparison
//   const arrSq = array1.map((element) => element * element);
//   //conditional to check if the array is empty and return false
//   if (array1.length === 0 || array2.length === 0){
//     return false
//   }
//   // conditional that compares the squared array1 with array2
//  else if (arrSq.every((element) => array2.includes(element) )) {
//    return true
//  }
//   // this will catch any other non valid comparisons and 
//   else {
//     return false
//   }

  
// };





//refactored

// const comp = (array1, array2) => {
  
//   //conditional to check if the array is empty and return false
//   if (array1.length === 0 || array2.length === 0){
//     return false
//   }
//   // conditional that compares the squared array1 with array2
//  else if (array1.map((element) => element * element).every((element) => array2.includes(element) )) {
//    return true
//  }
//   // this will catch any other non valid comparisons and 
//   else {
//     return false
//   }
  
  
// };


//after attempting to enter into codewars I found that my code was throwing errors

//plugged in some of the parameters that failed I tried out my same code but changed the comparison squared array1 to array2 and instead decided to compare array2 to the squared array1


// const comp = (array1, array2) => {
//   //squaring the first array for comparison
//   const arrSq = array1.map((element) => element * element);
//   //conditional to check if the array is empty and return false
//   if (array1.length === 0 || array2.length === 0){
//     return false
//   }
//   // conditional that compares the array2 with squared array1
//  else if (array2.every((element) => arrSq.includes(element) )) {
//    return true
//  }
//   // this will catch any other non valid comparisons and 
//   else {
//     return false
//   }

  
// };


//code is still incorrect, but threw less errors.
//decided to take a new approach with using Math.sq() on array2 elements instead 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt



// const comp = (array1, array2) => {
  
//   const array2Sqrt = array2.map((element) => Math.sqrt(element));
//    //conditional to check if the array is empty and return false
//   if (array1.length === 0 || array2.length === 0){
//     return false
//   }
//   //conditional that compares array1 to the Sqrt of array2 elements
//   else if (array2Sqrt.every((element) => array1.includes(element))) {
//     return true
//   }
  
//   // this will catch any other non valid comparisons and
  
//   else {
//     return false
//   }
  
  
  
  
// };


// when my code still didn't clear up I realized that I need to ensure that I need to make sure that elements that do exist as a square, have the correct number of iterations through the array 

// I now need to sort the arrays before comparing them and be sure to compare them at each of their elements. 

// const comp = (array1, array2) => {
  
//   const sortedArr1 = array1.sort((a, b) => a - b);
//   const sortedArr2 = array2.sort((a,b) => a - b);
  
//   const SqArr1 = sortedArr1.map ((element) => element * element);
  
//   if (array1.length === 0 || array2.length === 0){
//     return false
//   }
//   // conditional that compares the array2 with squared array1
//  else if (sortedArr2.every((element, index) => element === SqArr1[index] )) {
//    return true
//  }
//   // this will catch any other non valid comparisons and 
//   else {
//     return false
//   }
  
// };




//still not working so using a loop


const comp = (array1, array2) => {
  let result;
  const sortedArr1 = array1.sort((a, b) => a - b);
  const sortedArr2 = array2.sort((a,b) => a - b);
  console.log(sortedArr2)  
  const sqArr1 = sortedArr1.map ((element) => element * element);
  console.log(sqArr1)
  //conditional to sort out [] arrays
   if (sortedArr1.length === 0 || sortedArr2.length === 0){
     result = false;
   }
  
  //using a loop to iterate through an array
  
 for (let i = 0; i < sqArr1.length; i++){
   
  console.log(sortedArr2.indexOf(sqArr1[i]))
  console.log(sortedArr2.indexOf(sortedArr2[i]))
   if (sqArr1.indexOf(sortedArr2[i]) !== sqArr1.indexOf(sqArr1[i])){
    
     result = false;
     break;
   }
   
    result = true;
   console.log(result)
    return result;
   }
  
  
};








// got stumped and moved on 


//this code worked and I will rework it later to make more sense

// function comp(array1, array2){
//   let result = false;
 
//   if ( array1 && array2 ) {
//     if (array1.length === 0 && array2.length === 0){
//       result = true;
//     } else {
//       const squareRoots = array2.map(num => Math.sqrt(num));
//       array1.sort((a, b) => a-b);
//       squareRoots.sort((a, b) => a-b);
//       for (let i=0; i<squareRoots.length; i++) {
//         if (array1.indexOf(squareRoots[i]) 
//             !== array1.indexOf(array1[i])) {
//           result = false;
//           break;
//         }
//         result = true;
//       }
//     }
//   }
//   return result;
// }



// other results


// function comp(a, b) {
//     if (!a || !b || a.length !== b.length) return false;
//     return a.map(x => x * x).sort().toString() === b.sort().toString();
// }

console.log(comp( [3, 6, 0, 0, 9, 3, 7, 5, 2, 0, 8, 1, 7, 0, 6, 8, 8, 9, 1], [0, 1, 64, 9, 64, 25, 1, 9, 81, 4, 64, 81, 36, 0, 49, 36, 49, 0, 1]))
