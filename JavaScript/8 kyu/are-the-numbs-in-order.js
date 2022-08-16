// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.


// function inAscOrder(arr) {
//   // Code your algorithm here :)
  
//   // Hmmm ... maybe we should try our luck out ...
//   // if (Math.random() > 0.5) {
//   //  return true;
//   // } else {
//   //  return false;
//   // }
// }

//parameters 

//an array

//returns

//boolean true if in ascending and false if not

//examples

//console.log(inAscOrder([1, 2, 4, 7, 19]))  // true
//console.log(inAscOrder([1, 2, 3, 4, 5]))  // true
//console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))  // false
//console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])))  // false


//pseudocode


//need to sort original array and compare it 


const inAscOrder = arr => {
  let sortAsc = [];
  let newArr = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    //create new array
    newArr.push(arr[i]);
    //sort new array
  }
  
  let ascArr = newArr.sort((a,b) => a - b);
  console.log(ascArr);
  for (let i = 0; i < arr.length; i++) {
    //see if each element is the same
    return ascArr[i] !== arr[i] ? false : true;
  }
  
  
  return sortAsc;
};


//going about the answer in the wrong way 


function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}




console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))
