// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


// function pipeFix(numbers){

// }


//examples

// console.log(pipeFix([1,2,3,5,6,8,9])) //[1,2,3,4,5,6,7,8,9]
// console.log(pipeFix([1,2,3,12])) //[1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(pipeFix([6,9])) //[6,7,8,9]
// console.log(pipeFix([-1,4])) //[-1,0,1,2,3,4]
// console.log(pipeFix([1,2,3])) //[1,2,3]


const pipeFix = numbers => {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    console.log(min);
    console.log(max);
    console.log(typeof(min))

    let res = [];

    for (let i = min; i <= max; i++){
        res.push(i)

    }
    return res
}

console.log(pipeFix([-1,4]))