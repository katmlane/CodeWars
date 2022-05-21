// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"



// function solution(a, b){
//     // your code here
//   }
  

//
//  Parameters
//

// two strings, can be empty
// strings will not be the same length

//
//  Returns
//

// short str + long str + short str

//
//  Examples
//

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

//
//  PseudoCode
//


// need to check the length of the strings
//if a is larger then b + a + b
// if b is larger then a + b + a




let b = "h"
let a = "yo"

// let solution = (a,b) => {
//     let alength = a.length
//     let blength = b.length
//     //conditional to check length
//     if (alength > blength) {
//         console.log(`${alength}`)
//         return `${b}${a}${b}`
//     } else if (blength > alength) {
//         console.log(`${blength}`)
//         return `${a}${b}${a}`
//     }
// }




// refactor 



let solution = (a,b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`



console.log(solution(a,b))