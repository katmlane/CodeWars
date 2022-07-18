// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock


// function sayHello(name) {
//   return 'Hello'
// }

//parameters

//a string

//return

// a string with Hello, in front of the parameter

//example

//console.log(sayHello("Mr. Spock")) // "Hello, Mr. Spock"

//pseudocode 

//have to return a concatenated sentence to include value of name

const sayHello = name => {
  return `Hello, ${name}`
};

//refactored 

const sayHello = name => `Hello, ${name}`;
