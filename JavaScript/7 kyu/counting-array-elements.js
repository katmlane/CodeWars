// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}


// function count(array){
//   //your code here
// }



//parameters 
//an array of elements 

//return
//an object with the count of each element 

//examples

//console.log(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 }))

//pseudocode


// const count = array => {
//   let countObj = {};
//   array.forEach((value, key) => {
//     if (!countObj[value]) {
//       countObj[value] = 1;
//     } else {
//       countObj[value] += 1;
//     }
//   });
//   return countObj;
// }


//refactored

const count = array => {
  let countObj = {};
  array.forEach((value, key) => {
     !countObj[value] ? countObj[value] = 1 : countObj[value] += 1;
  });
  return countObj;
}

 console.log(count(['a', 'a', 'b', 'b', 'b']))
