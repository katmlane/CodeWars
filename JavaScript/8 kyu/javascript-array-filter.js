
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]



// function getEvenNumbers(numbersArray){
//   // filter out the odd numbers
// }


//parameters 

//an array

//return 

// a filtered array of just even numbers 

//examples

//console.log(getEvenNumbers([1,2,3,6,8,10])) //[2,6,8,10]
//console.log(getEvenNumbers([1,2])) //[2]
//console.log(getEvenNumbers([12,14,15])) // [12,14]
//console.log(getEvenNumbers([13,15])) //[]
//console.log(getEvenNumbers([1,3,9])) //[]


//pseudo code 

// need to use the filter method to get the array I want


// const getEvenNumbers = numbersArray => {
//   return numbersArray.filter((x) => x % 2 === 0)
  
// }



//refactored 



const getEvenNumbers = numbersArray => numbersArray.filter((x) => x % 2 === 0);


console.log(getEvenNumbers([1,2,8,6,10,3,9]))