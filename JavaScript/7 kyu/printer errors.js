// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


// function printerError(s) {
//     // your code
// }


//parameters

// s string of characters 

//return 

// the printer errors / length of string

// Examples:

 //console.log(printerError("aaabbbbhaijjjm")) // "0/14"
 //console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")) // "8/22"

 //pseudocode 

 //need to loop through each letter of the string and check if its a-m.
 // if n-z it needs to add to printer error counter 
 // return will be printer error counter "/" string length

 // if I were to use reg expression 
 //https://bobbyhadz.com/blog/javascript-check-if-string-contains-any-letter#:~:text=To%20check%20if%20a%20string,one%20letter%20and%20false%20otherwise.


 const printerError = s => {
    let printerErrorCounter = 0;
    let goodColors = 0;
    const validCharacters = /[a-m]/g;
    const sArr = s.split("")
    sArr.map ((color) => {
        if (validCharacters.test(color)) {
            return goodColors++
        } else if (!validCharacters.test(color)) {
           return  printerErrorCounter++
        }
        

    })
 
    return `${printerErrorCounter}/${s.length}`


 }




 console.log(console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")))



