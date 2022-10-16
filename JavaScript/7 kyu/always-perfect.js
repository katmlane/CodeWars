// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".

// function checkRoot(string){
// //your code here
// }

// For this kata I need to first check if the string is a set of 4 consecutive numbers. The parameters should be a string of numbers seperated by commas. If it is more or less than 4 consecutive numbers then return "incorrect input". If the numbers are not consective then algorythm should return "not consecutive".

const checkRoot = string => {
  //trims the string of whitespaces and then splits into an array
  let arr = string.trim().split(",");
  console.log(arr)
  //holds the results
  let res;
  //holds the multiplication of the 4 consecutive elements + 1
  let sum;
  // Holds the Sqrt of the sum
  let sumSqrt; 
  //converts into numbers
  let numArr = arr.map(el => parseInt(el, 10))
  
  //filters out NaN 
  let noNaNArr = numArr.filter(Boolean);
  
  console.log(noNaNArr)
  
  //loop through array of numbers
  for (let i = 0; i < noNaNArr.length; i++) {
    //if incorrect length or starts with 0, return incorrect input
    if (noNaNArr.length < 4 || noNaNArr.length > 4 || noNaNArr[i] === 0) {
    return "incorrect input";
    }
    //check to see if the array is consecutive
    else if (noNaNArr[0] + 1 !== noNaNArr[1] || noNaNArr[1] + 1 !== noNaNArr[2] || noNaNArr[2] + 1 !== noNaNArr[3]) {
      return "not consecutive";
    }
    //checks to make sure numbers are consecutive
    else if (noNaNArr[0] + 1 === noNaNArr[1] && noNaNArr[1] + 1 === noNaNArr[2] && noNaNArr[2] + 1 === noNaNArr[3]) {
      sum = noNaNArr[0] * noNaNArr[1] * noNaNArr[2] * noNaNArr[3] + 1;
      sumSqrt = Math.sqrt(sum);
      return `${sum}, ${sumSqrt}`;
    }
    //all others are incorrect input
    else {
      return "incorrect input"
    }
  }
};

//Need to find solution where "" returns incorrect input and not undefined


const checkRoot = string => {
  let arr = string.trim().split(",");
  let res;
  let sum;
  let sumSqrt;
  let numArr = arr.map(el => parseInt(el, 10))
  let noNaNArr = numArr.filter(Boolean);
  for (let i = 0; i < noNaNArr.length; i++) {
    if (noNaNArr.length < 4 || noNaNArr.length > 4 || noNaNArr[i] === 0 || arr == "") {
    res = "incorrect input";
    }
    else if (noNaNArr[0] + 1 !== noNaNArr[1] || noNaNArr[1] + 1 !== noNaNArr[2] || noNaNArr[2] + 1 !== noNaNArr[3]) {
      res = "not consecutive";
    }
    else if (noNaNArr[0] + 1 === noNaNArr[1] && noNaNArr[1] + 1 === noNaNArr[2] && noNaNArr[2] + 1 == noNaNArr[3]) {
      sum = noNaNArr[0] * noNaNArr[1] * noNaNArr[2] * noNaNArr[3] + 1;
      sumSqrt = Math.sqrt(sum);
      res = `${sum}, ${sumSqrt}`;
    }
    else {
      res = "incorrect input"
    }
  }
  return res
};

console.log(checkRoot(""))



const checkRoot = (string) => {
  //trims the string of whitespaces and then splits into an array
  let arr = string.trim().split(",");
  console.log(arr);
  //holds the results
  let res;
  //holds the multiplication of the 4 consecutive elements + 1
  let sum;
  // Holds the Sqrt of the sum
  let sumSqrt;
  //converts into numbers
  let numArr = arr.map((el) => parseInt(el, 10));

  //filters out NaN
  let noNaNArr = numArr.filter(Boolean);

  console.log(noNaNArr);

  //loop through array of numbers
  for (let i = 0; i < noNaNArr.length; i++) {
    //if incorrect length or starts with 0, return incorrect input
    if (
      noNaNArr.length < 4 ||
      noNaNArr.length > 4 ||
      noNaNArr.length === 0 ||
      noNaNArr[i] === false
    ) {
      return "incorrect input";
    }
    //check to see if the array is consecutive
    else if (
      noNaNArr[0] + 1 !== noNaNArr[1] ||
      noNaNArr[1] + 1 !== noNaNArr[2] ||
      noNaNArr[2] + 1 !== noNaNArr[3]
    ) {
      return "not consecutive";
    }
    //checks to make sure numbers are consecutive
    else if (
      noNaNArr[0] + 1 === noNaNArr[1] &&
      noNaNArr[1] + 1 === noNaNArr[2] &&
      noNaNArr[2] + 1 === noNaNArr[3]
    ) {
      sum = noNaNArr[0] * noNaNArr[1] * noNaNArr[2] * noNaNArr[3] + 1;
      sumSqrt = Math.sqrt(sum);
      return `${sum}, ${sumSqrt}`;
    }
    //all others are incorrect input
    else {
      return "incorrect input";
    }
  }
};

const checkRoot = (str) => {
  let splitStr = str.split(",");
  let checked = splitStr.filter((x, y) => {
    if (y < splitStr.length && +x + 1 == splitStr[y + 1]) {
      return x;
    } else {
      if (x - 1 == splitStr[y - 1]) {
        return x;
      }
    }
  });
  if (str.length == 1) {
    return "invalid input";
  } else {
  }
};
