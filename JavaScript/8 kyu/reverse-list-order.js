// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
//  [1, 2, 3, 4]  -> [4, 3, 2, 1]
//  [9, 2, 0, 7]  -> [7, 0, 2, 9]

//function reverseList(list) {

//}

//parameters

// an array of integers

//returns

//the array of integers reversed

//examples

//  console.log(reverseList([1, 2, 3, 4])) //[4, 3, 2, 1]
//  console.log(reverseList([9, 2, 0, 7] )) // [7, 0, 2, 9]

//psuedocode

//need to reverse the order of the array 

const reverseList = list => {
    return list.reverse()
}

console.log(reverseList([9, 2, 0, 7] ))

//refactored 

const reverseList = list => list.reverse();