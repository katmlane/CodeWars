Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
    res =  //regex here/.test(username) 
    return res
  }

  //I want to do this kata without a regex. 

  // need to check that the letter is lower case username[i].toLowerCase === username[i]
  //if false then return a false to the counter

  also check username[i] === 