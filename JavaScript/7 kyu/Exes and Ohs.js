// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str) {
//     //code here
// }


//parameters 

//string of characters
//case insensitive

//return 

//boolean

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//pseudo code

// need to loop through each character
// create counter for x and o
// if they are equal (including 0) return true
// if not return false


// const XO = str => {
//   let xCounter;
//   let oCounter;
//   for (i=0; i > str.length; i++){
//     console.log(str[i])
//     xCounter = 0;
//     oCounter = 0;
//     if (str[i].toLowerCase() === "o"){
//       return oCounter += 1
      
//     }
//     else if (str[i].toLowerCase() === "x" ) {
//       return xCounter +=1
      
//      }
//     console.log(oCounter)
//     console.log(xCounter)
//     console.log(i)
//   }
//   console.log(oCounter)
//   console.log(xCounter)
  
//  return oCounter === xCounter ? true : false
   
  
// }


//could not get that way to work so I decided to push the letter to it's own variable and then compare the lengths


const XO = str => {
  let xCounter = '';
  let oCounter = '';
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      xCounter += str[i];
      } else if (str[i].toLowerCase() === 'o') {
      oCounter += str[i];
      }
    }
    return xCounter.length === oCounter.length ;
  
}
console.log(XO("zpzpzpp"))

