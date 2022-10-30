// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


// function checkExam(array1, array2) {
//  // good luck
// }


//parameters

//2 arrays, one of test scores, one of students answers

//returns

//amount of points earned, +4 for correct ones, -1 for inccorect ones

//examples

//console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))  //6
//console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))  //7
//console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))  //16
//console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))  //0

//pseudo code

//need to loop through array 1 and compare it to array 2. if the answer is the same then +4, if the answer is not the same -1


const checkExam = (array1, array2) => {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    //add 4 if correct
    if ( array1[i] === array2[i]) {
      score += 4;
    } 
    // no reduction if 0
    else if (array2[i] === "") {
      score += 0;
    }
    //-1 for all others 
    else {
      score -=1;
    }
    
    //no negative scores
     if (score < 0) {
  
    score = 0
    
  }  
  
  return score
};

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
  
  // this codewars stumped me because I didn't understand that you could not recieve a score less than 0. 