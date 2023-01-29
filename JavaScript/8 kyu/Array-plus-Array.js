// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }


//parameters

//2 arrays

//returns

// sum of each array 

//examples

//arrayPlusArray([1, 2, 3], [4, 5, 6]) // 21
//arrayPlusArray([-1, -2, -3], [-4, -5, -6]) // -21
//arrayPlusArray([0, 0, 0], [4, 5, 6]) // 15
//arrayPlusArray([100, 200, 300], [400, 500, 600])  // 2100

//pseudocodes

// need to reduce arrays individually 
//need to add together reduced arrays 


// const arrayPlusArray = (arr1, arr2) => {
//   const reduced1 = Number(arr1.reduce((a,b) => a + b, 0));
//   const reduced2 = Number(arr2.reduce((a,b) => a + b, 0));
//   return reduced1 + reduced2
  
// }



//refactored

const arrayPlusArray = (arr1, arr2) => arr1.reduce((a,b) => a + b, 0) + arr2.reduce((a,b) => a + b, 0);
 

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))


function arrayPlusArray (arr1, arr2) {
    const reduced1 = Number(arr1.reduce((a,b) => a + b, 0));
    const reduced2 = Number(arr2.reduce((a,b) => a + b, 0));
    return reduced1 + reduced2
}