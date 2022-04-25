//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


//long
function boolToWord( bool ){
  if (!bool) {
    return "No"
  } else if (bool) {
    return "Yes"
  }
}




//short





let boolToWord = bool => !bool ? "No" : "Yes";
