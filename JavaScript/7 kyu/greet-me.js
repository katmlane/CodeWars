// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// greet('riley'), 'Hello Riley!');


// var greet = function(name) {

// };


const greet = name => {
  let lname = name.toLowerCase();
  let cap = lname[0].toUpperCase();
  return `Hello ${cap}${lname.slice(1)}!`;
  
};



const greet = name =>  `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
