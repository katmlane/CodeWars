

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

// function foldTo(distance) {
  
// }

//parameters 

//integer representing distance


//returns

//number of times the paper needs to be folded
//if integer is negative return null

//examples

//console.log(foldTo(384000000))  //42

//pseudocode

//need to duplicate the integer until it is greater than or equal to the distance you want to acheive

const foldTo = distance => {
    //check to see if distance is negative
    if (distance < 0) {
      return null
    }
    //lets me keep track of the folds
    let count = 0;
    
    // paperThickness = 0.0001
    
    //folding math
    for (let i = 0.0001; i < distance; i *= 2) {
      count+= 1;
      }
      return count;
   
  };
  
  console.log(foldTo(0))