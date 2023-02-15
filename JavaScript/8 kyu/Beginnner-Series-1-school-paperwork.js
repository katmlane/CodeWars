// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.




//
//  Parameters
//

// integer value for n and m

//
//  Returns
//

//if n or m < 0 then return 0
//otherwise return n*m

//
//  Examples
//

// n= 5, m=5: 25
// n=-5, m=5:  0

//
//  PseudoCode
//

// need a conditional to check to see if n or m are negative
// if true return 0
// if both n and m are positive return n*m


// function paperwork(n, m) {
  
// }


// let paperwork = (n,m) => {
//     if (n<=0 || m<=0) {
//         console.log("N or M are neg")
//         return 0
//     } else {
//         return n*m
//     }
// }

// console.log(paperwork(0,5))



//refactored

let paperwork = (n,m) => n<=0 || m<=0 ? 0 : n*m;

function paperwork (n,m) {
return n<=0 || m<=0 ? 0 : n*m
}


console.log(paperwork(5,5))
