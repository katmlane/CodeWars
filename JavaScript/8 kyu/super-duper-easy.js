// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
//   //your code here
// }

//parameters 

//a number or string

//return 

//error if a string 
//if number *50 + 6

//examples

//console.log(problem("hello")) //"Error"
//console.log(problem(1)) //56
//console.log(problem(5)) // 256
//console.log(problem(0)) //6


//pseudocode

// need to check if number or string 

//if string = error 
//if number *50 + 6

const problem = x => typeof x === "number" ? x * 50 + 6 : "Error";


console.log(problem(5))
