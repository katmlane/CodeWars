// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// function powersOfTwo(n){
//     return []
//   }

//parameters

//an integer

//return

// an array of powers of 2 counting up to integer

//examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//pseudocode

//need to loop through each integer leading up to given parameter and push it to a value and return it

const powersOfTwo = n => {
//variable to hold arr
let twos = [];

//loop to iterate up to integer
for (let i = 0; i <= n; i++){
    twos.push(Math.pow(2, i));
    
}
return twos;
}

console.log(powersOfTwo())