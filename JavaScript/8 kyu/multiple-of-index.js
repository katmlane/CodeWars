// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// function multipleOfIndex(array) {
//     // good luck
//   }




// The parameters of the question includes an array of numbers. 
// I want to return an array of numbers that is representitive of the original array if they are multiples of their index in the array. 
// For example and arr = [22, -6, 32, 82, 9, 25] => [-6, 32, 25]
// My plan of attack is to use a loop. For each of the i counters number, up to the length of the array: loop through and push the value to an empty array equal to the elements index.]


// const multipleOfIndex = array => {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         // need to check if the current element is a multiple of the number at current element
//         if (array[i] % i === 0) {
//             newArr.push(array[i]);
//         }
        
//     }

//     return newArr;


// }

// refactored
const multipleOfIndex = array => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {        
        array[i] % i === 0? newArr.push(array[i]): false
        };
    return newArr;
   
    };





console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))