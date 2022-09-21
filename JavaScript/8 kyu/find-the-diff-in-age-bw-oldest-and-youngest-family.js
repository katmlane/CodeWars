// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].


// function differenceInAges(ages){

// }

//examples 

// console.log(differenceInAges([82, 15, 6, 38, 35])) //[6, 82, 76]

// console.log(differenceInAges([57, 99, 14, 32])) //[14, 99, 85]

//the user will input an array of numbers. The array needs to be sorted for arr.max and arr.min. 
//the return is an array with [arr.min, arr.max, (arr.max - arr.min)]

// const differenceInAges = ages => {
//   // going to hold results 
//   let resArr =[];
//   //min age
//   console.log(Math.min(...ages))
//   //max age
//   console.log(Math.max(...ages))
//   //difference
//   let difference = Math.max(...ages) - Math.min(...ages)
//   console.log(difference)
  
//   //push to result array 
//   resArr.push(Math.min(...ages));
//   resArr.push(Math.max(...ages));
//   resArr.push(difference);
//   return resArr;
  
// };


//refactored 


const differenceInAges = ages => {
  let resArr =[];
  let difference = Math.max(...ages) - Math.min(...ages);
  resArr.push(Math.min(...ages))
  resArr.push(Math.max(...ages))
  resArr.push(difference);
  return resArr
  
};


// I thought that I had to push the results to a new array but arrays can be resulted by including the variables. 

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}


console.log(differenceInAges([82, 15, 6, 38, 35]))


//this kata reminded me that I need to destructure arrays in order to work with them 


