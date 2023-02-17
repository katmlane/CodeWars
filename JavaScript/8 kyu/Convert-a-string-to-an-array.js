//Write a function to split a string and convert it into an array of words.

//Examples (Input -> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//short hand
let stringToArray = str => str.split(" ");

//longform

function stringToArray (str) {
    let arr = str.split(" ")
    return arr
}



//console.log(stringToArray("I love arrays they are my favorite"))




