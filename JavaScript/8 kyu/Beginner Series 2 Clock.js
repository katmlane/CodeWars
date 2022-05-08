// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


// Example:
// h = 0
// m = 1
// s = 1

// result = 61000


// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59


// function past(h, m, s){
//     //#Happy Coding! ^_^
//   }
//can use input to calculate milliseconds because 000 is midnight.. "time since midnight in milliseconds"
// need to convert hours to minutes  h*60
// minutes to seconds m*60
// seconds to milliseconds s*1000


let past = (h,m,s) => {
    let minutes = (h*60) + m;
    let seconds = (minutes * 60) + s;
    let milliseconds = seconds * 1000;
    return milliseconds
}


console.log(past(1,1,1))