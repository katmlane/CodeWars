// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.




// function basicOp(operation, value1, value2)
// {
//   // Code
// }





//
//  Parameters
//

// one operator and two numbers

//
//  Returns
//

// number1 (operation) number2

//
//  Examples
//

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//
//  PseudoCode
//


// need to use value number on and if statment for each operation
//could also use switch case
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


// let basic = (operation, value1, value2) => {
//     let num1 = value1;
//     let num2 = value2;
//     let math = operation;

//     swtich (math) {
//         case +:
//             return num1 + num2; 
//             break;
//         case -:
//             return num1 - num2;
//             break;
//         case '*':
//             return num1 * num2;
//             break;
//         case '/':
//             return numm1 / num2;
//             break;
//     }
// }




//couldn't get switch case to work so moved to conditional

let basicOp = (operation, value1, value2) => {
    
    if (operation == '+') {
        let num = value1 + value2; 
        return num;
    }else if (operation == '-'){
        let num = value1-value2;
        return num;
    }else if (operation == '*'){
        let num = value1*value2;
        return num;
    }else if (operation == '/'){
        let num = value1/value2;
        return num;
    }
    

};



// function basicOp(operation, value1, value2)
// {
//   if (operation === '+') {
//       return value1 + value2;
//     } else if(operation === '-') {
//       return value1 - value2;
//     }  else if(operation === '*') {
//       return value1 * value2;
//     } else if(operation === '/'){
//       return value1/value2;
//     }
//   }


console.log(basicOp('+', 4, 7))

