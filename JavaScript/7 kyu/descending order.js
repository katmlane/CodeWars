// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// function descendingOrder(n){
//     //...
//   }

//parameters

//non-negative integer


//returns 

//a integer with the sorted characters descending

//examples

//console.log(descendingOrder(89098204)) // 99884200
//console.log(descendingOrder(1234))  //4321
//console.log(descendingOrder(8738823))  //8887332

//pseudocode
//need to turn integer into string
//need to seperate the str into an array
// need to sort b - a 
//need to join
//need to turn back into Number

// const descendingOrder = n => {
//     let intStr = n.toString();
//     let splitStr = intStr.split("");
//     let sortedStr = splitStr.sort((a,b) => b-a);
//     console.log(sortedStr)
//     let joinedStr = sortedStr.join("");
//     console.log(joinedStr)
//     let finalInt = Number(joinedStr);
    
    
//     return finalInt
// };



//refactored


const descendingOrder = n => Number(n.toString().split("").sort((a,b) => b-a).join(""));


console.log(descendingOrder(8738823))