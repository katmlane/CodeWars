// Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

// If the parameter is not an integer or less than 1, return -1. In C# return an empty array.


// function factors(x){

// }

// The user will enter a number an the program will return an array of factors. if the parameter is not an interger ir less than 1 return -1. for this kata i will need to use % and a loop to count to 0. some examples would be


// console.log(factors(54)) //[54,27,18,9,6,3,2,1]
// console.log(factors(9)) //[9,3,1]


const factors = x => {
    let xFactor =[];
    if (x < 1 || isNaN(x) === true || x % 1 != 0 ) {
        xFactor = -1;       
   } else {
    for (let i = x; i > 0; i--) {
        if (x % i === 0) {
             xFactor.push(i);
        }
    }
}
return xFactor;
};

console.log(factors())


//refactored 


