//We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"





//number to string - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString


// long form 


function numberToString(num) {
    let str = num.toString();
    return str

  }

  console.log(numberToString(899))





  //short hand




  let numToString = num => num.toString();

  console.log(numToString(899))