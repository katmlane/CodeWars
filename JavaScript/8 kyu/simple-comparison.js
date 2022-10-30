// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().


// function add(a, b){
// 	// code here
// }


// This is a simple demostration of the differences between  == and ===. === is a strict comparison of value and type, if one parameter doesn't completely match then the answer will be false.  while == will compare for the value of the variable only. 3 == "3" would return true. while 3 === "3" would return false.  



const add = (a,b) => a == b ? true : false;
