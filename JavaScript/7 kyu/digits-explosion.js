// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"



// function explode(s) {
//   return "";
// }



//parameters

//string of numbers

//return 

//return the integer for the value it represents i.e. 1 = 1 2 = 22

//examples

//console.log(explode("102269")) // "12222666666999999999"
//console.log(explode("312")) // "333122"

//pseudocode

//need to make into an Arr
//try switch case?

const explode = s => {
    let sArr = s.split("");
    let explodeArr =[];
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === "1") {
      explodeArr.push("1")
      }
      else if (sArr[i] === "2") {
      explodeArr.push("22")
      }
      else if (sArr[i] === "3") {
      explodeArr.push("333")
      }
      else if (sArr[i] === "4") {
      explodeArr.push("4444")
      }
      else if (sArr[i] === "5") {
      explodeArr.push("55555")
      }
      else if (sArr[i] === "6") {
      explodeArr.push("666666")
      }
      else if (sArr[i] === "7") {
      explodeArr.push("7777777")
      }
      else if (sArr[i] === "8") {
      explodeArr.push("88888888")
      }
      else if (sArr[i] === "9") {
      explodeArr.push("999999999")
      }
    }
    return explodeArr.join("");
  };
  
  console.log(explode("102269"))
  
  
  //refactored
  
  explode=s=>[...s].map(n=>n.repeat(n)).join``