// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// function arithmetic(a, b, operator){
//   //your code here!
// }


//parameters

// 2 integers and a string indicating the operator

//returns

//arithmetic between the two integers indicated by the operator in the form of a string 

//examples

//console.log(arithmetic(1, 2, "add")) //3
//console.log(arithmetic(8, 2, "subtract")) // 6
//console.log(arithmetic(5, 2, "multiply")) //  10
//console.log(arithmetic(8, 2, "divide")) // 4

//pseudocode

//going to use a switch case to sort through the 4 cases of operators that are expected


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


const arithmetic = (a, b, operator) => {
  switch (operator) {
    case "add":
      console.log("add");
      return a + b;
      break;
    case "subtract":
      console.log("subtract");
      return a - b;
      break;
    case "multiply":
      console.log("multiply");
      return a * b;
      break;
    case "divide":
      console.log("divide");
      return a / b;
      break;
    default:
      console.log("no operator");
  }
  
  
}

console.log(arithmetic(5, 2, ""))



// cool codewars solution I need to look into
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);
