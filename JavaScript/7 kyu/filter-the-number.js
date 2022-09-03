// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// var FilterString = function(value) {
//   //Complete this function :)
// }


//parameter
//string with numbers and letters

//return 
//return the string with the numbers in order of appearence

//examples

//console.log(FilterString("aa1bb2cc3dd")) // "123"

//pseudocode

//using a filter to get only numbers 

let FilterString = value => {
    let valueArr = value.split(""); 
    let numArr = [];
    for (let i = 0; i < valueArr; i++){
      if (typeof valueArr[i] == "number"){
        numArr.push(valueArr[i])
      }
    }
    return numArr.join("");
    
  };
  console.log(FilterString("aa1bb2cc3dd"))
  
  
  //refactored
  
  var FilterString = function(value) {
    let parsed = value
      .split``
      .map(Number)
      .filter(Number.isInteger)
      .join``
    
    return Number(parsed) 
  }