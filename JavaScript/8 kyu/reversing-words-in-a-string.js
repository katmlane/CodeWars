// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// function reverse(string){
//   //your code here
// }


//parameters 

//a string with possible whitespaces 

//returns 
// reversed words in a given string 

//examples

//console.log(reverse('I am an expert at this')) // 'this at expert an am I'
//console.log(reverse('This is so easy')) // 'easy so is This'
//console.log(reverse('no one cares')) // 'cares one no'
//console.log(reverse('')) // ''
//console.log(reverse('CodeWars')) // 'CodeWars'


//pseudocode

//need to trim the whitespace
// need to split the array into elements .split(" ")
// need to reverse the array and then .join(" ")

const reverse = string => {
    let stringArr = string.trim().split(" ");
    console.log(stringArr);
    return stringArr.reverse().join(" ")
  }
  
  console.log(reverse(" This is a test. "))