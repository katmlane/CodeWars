

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"


//parameters 

//a string 

//returns 

//string with a space inbetween

//examples

//spacify("hello world") // returns "h e l l o   w o r l d"

//pseudocode

//.split("")

//.join(" ")



 



let spacify = str => {
  return str.split("").join(" ")
}
