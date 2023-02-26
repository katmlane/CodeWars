// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


//
//  Parameters
//

// a random non-negative number

//
//  Returns
//

//return the digits of this number within an array in reversed order

//
//  Examples
//

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//
//  PseudoCode
//

// need to turn num into a string 
// need to split into an array
// need to reverse the order of the array





// function digitize(n) {
//     //code here
//   }


// let digitize = n => {
//     let numToStr = n.toString();
//     let splitStr = numToStr.split("");
//     let reverseStr = splitStr.reverse();
//     let strToNum = reverseStr.map(Number);
//     return strToNum

//     console.log(numToStr)
//     console.log(splitStr)
//     console.log(reverseStr)


// }



//upon searching I found that to return numbers from a array of letters you can use .map(Number)
//https://stackoverflow.com/questions/36250561/convert-number-to-a-reversed-array-of-digits

//refactor

// let digitize = n => n.toString().split("").reverse().map(Number);
// console.log(digitize(348597))

//non arrow function 


function digitize (n) {
    let numToStr = n.toString();
    let splitStr = numToStr.split("");
    let reverseStr = splitStr.reverse();
    let strToNum = reverseStr.map(Number);
    return strToNum
} 