// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.


// function isLeapYear(year) {
//   // TODO
// }

//parameters

//a positive integer

//returns

//boolean 

//examples

//console.log(isLeapYear(1234)) // false
//console.log(isLeapYear(1984)) // true
//console.log(isLeapYear(2000)) // true
//console.log(isLeapYear(2010)) // false
//console.log(isLeapYear( 2013)) //false


//pseudocode 

// need to create a conditional that will check if year % 4 = 0 
// if year % 100 = 0 then return false 
// if year % 4 = 0 and year % 100 = 0


const isLeapYear = year => {
  if (year % 100 === 0 && year % 400 !== 0){
    console.log("not leap year") ;
    return false;
  } 
  
  
  else if (year % 4 === 0) {
    console.log("leap year");
    return true;
  }
 else {
   return false;
 }
}




//refactored


// const isLeapYear = year => year % 100 === 0 && year % 400 !== 0 ? false : true;

console.log(isLeapYear(1234))
