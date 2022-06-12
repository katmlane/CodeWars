// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// function removeSmallest(numbers) {
//   throw "TODO: removeSmallest";
// }

//parameters

//an array of integers

// return 

//return sorted array with lowest number removed 

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//pseudocode

//need to not mutate the array
//need to look through each element of the array 
// need to set a counter that looks for the smallest number and removes it 


// const removeSmallest = numbers => {
//   let smallestNum = 0;
//   for (let i =0; i <= numbers.length; i++) {
//     if (numbers[i +1] < numbers[i] ){
//       smallestNum = i + 1;
//       numbers.splice(smallestNum, 1);
//     } 
    
   
//   }
//   return numbers
// }


//error searchs
//Malformed arrow function parameter list  - https://forum.vuejs.org/t/uncaught-syntaxerror-malformed-arrow-function-parameter-list-on-custom-filter/56964/2



// const removeSmallest = numbers => {
//   //this is going to hold the value of the smallest number in the array
//   let smallestNum = Math.min(...numbers);
//   //this is going to hold the index of the smallest number in the array
//   let indexOfSmallNum = numbers.indexOf(smallestNum);
//   //this is going to look at each element in the array
//   console.log(smallestNum);
//   console.log(indexOfSmallNum)
//   // return numbers.splice(indexOfSmallNum, 1)
//   let finalArr = numbers.splice(indexOfSmallNum, 1)
//   return finalArr;
  
// }

//running into the problem that I need a copy of my array to remidy the solution 
//refactored using .slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 

//   Remove 1 element at index 3
// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
// let removed = myFish.splice(3, 1)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

// const removeSmallest = numbers => {
//   //this needs to be a copy
//   let copyNumbers = numbers.slice(0)
//   //this is going to hold the value of the smallest number in the array
//   let smallestNum = Math.min(...numbers);
//   //this is going to hold the index of the smallest number in the array
//   let indexOfSmallNum = numbers.indexOf(smallestNum);
//   //this is going to look at each element in the array
//   console.log(smallestNum);
//   console.log(indexOfSmallNum)
//  console.log(copyNumbers) // [5,3,2,1,4]
  
  

  
//   //using filter
//   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// //remove the smallest   
//  //let finalNumbers = copyNumbers.splice(indexOfSmallNum,1) // [1]
//  let finalNumbers = copyNumbers.splice(3,1); // [1]
//  return finalNumbers
// }



//decided to move on from this method because I was running into issues somewhere. 
//** I figured out why this wasn't working 
//https://stackoverflow.com/questions/49021164/splice-not-removing-element-from-array

// I was stuck on the problem for couple of hours. I did figure out that when you splice an array it does returns the element that was spliced from the original array.

// let  originalArray = ["Apples","Oranges","Kiwi"];
// let newArray = originalArray.splice(0,1);
// console.log(newArray);
// I was expecting the modified originalArray in the spliced variable but instead it returns the element that was spliced. The answer was to

// console.log(originalArray);
// Whatever splice returns, we might not need that, we need to check our originalArray since it's the one that got sliced. The originalArray consists my expected answer which was ["Oranges","Kiwi"]


//using filter
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//remove the smallest   

// const removeSmallest = numbers => {
//   //this is going to hold the value of the smallest number in the array
//   let smallestNum = Math.min(...numbers);
//   //this is going to hold the index of the smallest number in the array
//   let indexOfSmallNum = numbers.indexOf(smallestNum);
  
//   console.log(smallestNum);
//   console.log(indexOfSmallNum)
//  // console.log(copyNumbers)
  
  

  
  
//  let finalNumbers = numbers.filter(ratings => ratings !== numbers[indexOfSmallNum])
//  return finalNumbers
// }



//refactored


// const removeSmallest = numbers => numbers.filter(ratings => ratings !== numbers[numbers.indexOf(Math.min(...numbers))]);



//needed to reconsider making sure I just remove the smallest index of the smallest num

const removeSmallest = numbers => {
  //copy of array 
  let copyNumbers = numbers.slice(0)
  //empty array to hold to hold the locations of smallest number
  let indexOfSmallNum = [];
  //this is the smallest number of the array
  let smallestNum = Math.min(...numbers)
  //loop that looks to each element and checks to see if the value at index of element is equal to the smallestNum 
  //if it is then the index is pushed to the indexOfSmallNum array
  for (let i = 0; i <= numbers.length; i++){
    // needed to add this to make sure it would return an empty array
    if (numbers.length === 0) {
      return indexOfSmallNum;
    }
    else if (numbers[i] <= smallestNum){
      indexOfSmallNum.push(i);
    }
  }
  //this will select the smallest index from the indexOfSmallNum array
  let smallestIndex = indexOfSmallNum.slice(0,1)
  console.log(smallestIndex)
  console.log(smallestNum)
  console.log(indexOfSmallNum);
  console.log(numbers[smallestIndex])
  //this will hold the value for the spliced number
  let finalNumbers = [...numbers.splice(smallestIndex, 1)]
  //return the original modified array
  return numbers
}

console.log(removeSmallest([2,2,1,2,1])) //[2,2,2,1]



// ultimately I ended up needed to have a copy of the original array that I could mutate with splice and return the copied array. 
//can also destructure the array when you go to slice and it will let you complete the function with out a copy 

