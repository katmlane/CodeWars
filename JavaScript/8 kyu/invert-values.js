// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


// You can assume that all values are integers. Do not mutate the input array/list.


//
//  Parameters
//

//given an array of numbers, all will be integers

//
//  Returns
//

//positives become negatives and the negatives become positives.

//
//  Examples
//

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

//
//  PseudoCode
//


// for each of the integers *-1
// if an empty array return an empty array
// need to loop through each place

// function invert(array) {
//     return ;
//  }

let invert = array => {
    let invert = []
    //looking at each integer in the array
    for(let i = 0; i<array.length; i++){
        //if the integer is positive
        if(array[i] > 0){
            invert.push(array[i] - (array[i] * 2));
            //if the integer is negative
          } else if(array[i] < 0){
            invert.push(Math.abs(array[i]));
            //if the array is 0
          } else if(array[i] === 0){
            invert.push(-0);
            //if the array is empty
          } else if(!array[i]){
              return invert
          }
          

    }
    return invert
    
};




console.log(invert([]))


//codewars I found very interesting
 //function invert(array) {
//     return array.map( x => x === 0 ? x : -x);
// }

//removed arrow function 

function invert (array) {

  let invert = []
    //looking at each integer in the array
    for(let i = 0; i<array.length; i++){
        //if the integer is positive
        if(array[i] > 0){
            invert.push(array[i] - (array[i] * 2));
            //if the integer is negative
          } else if(array[i] < 0){
            invert.push(Math.abs(array[i]));
            //if the array is 0
          } else if(array[i] === 0){
            invert.push(-0);
            //if the array is empty
          } else if(!array[i]){
              return invert
          }
          

    }
    return invert

}