// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = n => {
//     return [];
//   };

  //parameters
  //integer

  //return 
  //an array

  //example
//   n=5 --> [5,4,3,2,1]

//pseudocode 

//need to create a loop that will add i to an array

const reverseSeq = n =>{
    let nArr =[];
    for( let i = n; i > 0; i--) {
        nArr.push(i);


    }
    return nArr
}
console.log(reverseSeq(10))