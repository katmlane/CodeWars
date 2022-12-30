// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.


// function correctTail(bod, tail ;
  
//     sub = body.substr(bodylength-(tail.length)
    
//     if sub = tail) ;
//       return true
//     }
//     else 
//       return false
  
      
//examples 

// console.log(correctTail("Fox", "x")) // true
// console.log(correctTail("Rhino", "o")) // true
// console.log(correctTail("Meerkat", "t")) // true



// const correctTail = (bod, tail) => {
//     // bod[-1] === tail ? true : false;
//     let lastLetter = bod.slice(-1)
//     console.log(lastLetter)


// }


const correctTail = (bod,tail) => bod.slice(-1) === tail ? true : false;



console.log(correctTail("Fox", "x")) // true
console.log(correctTail("Rhino", "o")) // true
console.log(correctTail("Meerkat", "f")) // true
