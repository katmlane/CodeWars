// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
// }

//parameters

//two integers

//returns 

// integer that represents the how many years ago the father was twice as old as his son (or in how many years he will be twice as old)

//examples

//console.log(twiceAsOld(36,7)) // 22
//console.log(twiceAsOld(55,30)) //5
//console.log(twiceAsOld(42,21)) //0
//console.log(twiceAsOld(22,1)) //20
//console.log(twiceAsOld(29,0)) //29


//pseudocode

// need to calculate the age at which age the father would be double the sons age 
// after that I need to return the number of years to which he would reach that age

// const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//   const birthDadAge = dadYearsOld - sonYearsOld
//   console.log(birthDadAge);
  
//   const dadDouble = 2 * birthDadAge;
//   console.log(dadDouble)
//   const yearsToDouble = Math.abs(dadDouble - dadYearsOld);
//   console.log(yearsToDouble)
//   return yearsToDouble; 
  
// }





//refactored




const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs (2 * (dadYearsOld - sonYearsOld) - dadYearsOld);



console.log(twiceAsOld(55,30))
