// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


// const quarterOf = (month) => {
//     // Your code here
    
//   }


//parameters

// integer 1-12 representing the months

//return

//return the integer corresponding to the quarter that the month comes from

//examples

//quarterOf(3) // 1
//quarterOf(8)  // 3
//quarterOf(11) // 4


//pseudocode


// I can think of a couple ways to approach this
// 1 I could create a conditional to check for all the numbers 1-12 and assign the quarter
// 2 I could divide the month by 12 and then have the ranges of each quarter be apart of the conditional.



const quarterOf = month => {
    const quarter = month/12;
    console.log(quarter)
    if (quarter > 0 && quarter <= 0.25) {
       return 1 
    } 
    else if (quarter > 0.25 && quarter <= 0.5) {
        return 2 
    }
    else if (quarter > 0.5 && quarter <= 0.75) {
        return 3 
    }
    else if (quarter > 0.75 && quarter <= 1) {
        return 4 
    }
}

console.log(quarterOf(10))

//looking at the kata I saw how  I could refactor it into a one line of code


const quarterOf = month => Math.ceil(month / 3);