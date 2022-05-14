// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.



// function booleanToString(b){
//     //your code here
//   }


//
//  Parameters
//

// a booleen
// true, false

//
//  Returns
//

// string

//
//  Examples
//

// true => "true"
// false => "false"

//
//  PseudoCode
//

//booleanToString = b =>  b.toString() ?

// I wasn't sure which one was the correct method for this kata so I decided to console.log a few to see which one it was. 
// learned that .toString() is the correct one


// let booleanToString = b => {
//     console.log(b.toString())
//     console.log(typeof b.toString())
//     // console.log(b.string())

//     return b.toString()

// };

//made the second function thinking that it was returning a string but I was mistaken
//realized after using typeof 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// let booleanToString = b => {
//     let myBool = b;
//     console.log(typeof myBool)
//     let myStr = myBool.toString(); 
//     console.log(typeof myStr)
//     // console.log(b.string())

//     return b.toString()

// };



//refactoring it 


let booleanToString = b => b.toString()


console.log(booleanToString(true))