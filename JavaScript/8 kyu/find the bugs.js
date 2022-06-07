// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

// function findLongest(str) (
  
//     var spl = str.split(" ");
//     var longest = 0
    
//     for (var i = 0; i > spl.length; i+) (
//       if (spl(i).length > longest) {
//         longest = spl[i].length
//       )
//       }
//       return longest
//   )


//parameter

//a string with multiple words

//return

//return the length of the longest words


//examples

// findLongest("The quick white fox jumped around the massive dog")  // 7
// findLongest("Take me to tinseltown with you")  // 10 
// findLongest("Sausage chops")  //7
// findLongest("Wind your body and wiggle your belly")  //6
// findLongest("Lets all go on holiday")  //7

//pseudocode

//need to seperate each word and compare their length
//a counter can check to see what the longest is
//return the longest counter


// function findLongest(str) {
  
//     let spl = str.split(" ");
//     let longest = 0;
    
//     for (let i = 0; i < spl.length; i++){
    
//       if (spl[i].length > longest) {
//         longest = spl[i].length;
//       }
//     }
//       return longest;
//   }



  //refactored


const findLongest = str => {
    let spl = str.split(" ");
    let longest = 0;

    for(let i = 0; i < spl.length; i++){
        spl[i].length > longest ? longest = spl[i].length : false;
    }

    return longest;
}




//other code wars answers 


//const findLongest = str =>
// Math.max(...str.split(` `).map(val => val.length));