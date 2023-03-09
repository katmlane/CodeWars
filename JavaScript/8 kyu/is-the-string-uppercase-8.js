// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// String.prototype.isUpperCase = function() {
//     // your code here
//   }

//parameters

//string 

//return

//boolean
//true if all caps
//false if not

//examples

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True


//pseudocode

//need to split into an array 
//need to loop through array and see if .toUpperCase is true
//if true return true

const isUpperCase = str => {

    const strArr = str.split(" ").join("").split("");
    //console.log(strArr)
    let lowerCaseArr = 0;
     strArr.map((letter) => {
        if (letter !== letter.toUpperCase()) {
            lowerCaseArr++
        }
    })
    console.log(lowerCaseArr)

    return lowerCaseArr > 0 ? false : true;
}

console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"))


//standard function 


function isUpperCase (str) {
    const strArr = str.split(" ").join("").split("");
    //console.log(strArr)
    let lowerCaseArr = 0;
     strArr.map((letter) => {
        if (letter !== letter.toUpperCase()) {
            lowerCaseArr++
        }
    })
    console.log(lowerCaseArr)

    return lowerCaseArr > 0 ? false : true;


}