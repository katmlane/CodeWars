// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// function oddOrEven(array) {
//     //enter code here
//  }


//parameters

//a list of integers 

//returns 

//"odd" or "even"

// Examples:
// oddOrEven([0]) // "even"
// oddOrEven([0, 1, 4]) //"odd"

// oddOrEven([0, -1, -5]) //"even"

//pseudocode


//need to look at array, if 0 or [] return even
//reduce array and % 2 
//if reduced array % 2 === 0 even 
// else if odd 
// needed to make sure to treat reduced number with Math.abs() to make sure that we can check if a negative number is odd or even. 

const oddOrEven = array => {
    let reducedArrAbs = Math.abs(array.reduce((a, b) => a + b, 0))
    console.log(reducedArrAbs)
    if (array === [] || array === 0){
        return "even"
    } else if ( reducedArrAbs % 2 === 0 ){
        return "even"
    } else if ( reducedArrAbs % 2 === 1){
        return "odd"
    }
}

console.log(oddOrEven([-990235,-414575,253721,695389,220515,-944007,83601,-678905,-364615,750747,-687149]))


//refactored