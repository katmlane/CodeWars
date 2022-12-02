// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//   //your code here
// }

//parameters 

// an array of strings 

//return 

// an array with every other element removed

//examples

//console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) //['Hello', 'Hello Again']
//console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //[1, 3, 5, 7, 9]
//console.log(removeEveryOther([[1, 2]]), [[1, 2]])) //
//console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])) //[['Goodbye']]

//pseudocode

// need to remove every other element
// going to use loop to push to new array

const removeEveryOther = arr => {
  //create an empty array
  let keepArr = [];
  //loop that will push only the index of the element that is divisible by 2, or everyother
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 1) {
      keepArr.push(arr[i])
    }
  }
  return keepArr;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
