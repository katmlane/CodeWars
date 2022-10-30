// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


// function getNumberFromString(s) {
//   return 0;
// }


//console.log(getNumberFromString("1")) //1
//console.log(getNumberFromString("123")) //123
//console.log(getNumberFromString("this is number: 7")) //7


//need to seperate each string into elements and compare for numbers. If numbers then push to new array and combine


const getNumberFromString = s => {
  let splStr = s.split("");
  let resArr = splStr.filter(x => x == "1" || x == "2" || x == "3" || x == "4" || x == "5" || x == "6" ||x == "7" || x == "8" || x == "9" || x == "0")
 return Number(resArr.join(""));
};


console.log(getNumberFromString("this is number: 7"))
