// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]



// // Return an array
// function fizzbuzz(n)
// {
//   //
// }



//parameters

//an integer greater than 0

//returns 

//an array of integers up to N 
// multiples of 3  replaced with fizz
//multiples of 5 replaced with fizz
//multiples of 3 & 5 replaced with fizzbuzz

//exxamples

//console.log(fizzbuzz(10)) //[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']


//pseudocode

//create a loop with a conditional that selects ffor fizz buzz first then the other options 


const fizzbuzz = n => {
    let fizzbuzzArr = [];
    for (i = 1; i <= n; i ++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzzArr.push("FizzBuzz");
        }
        else if (i % 5 === 0){
            fizzbuzzArr.push("Buzz");
        }
        else if ( i % 3 === 0){
            fizzbuzzArr.push("Fizz");
        }
        else {
            fizzbuzzArr.push(i);
        }
    };
    return fizzbuzzArr;
}


console.log(fizzbuzz(15))