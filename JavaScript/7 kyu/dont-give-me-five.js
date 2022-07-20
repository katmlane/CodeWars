// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// function dontGiveMeFive(start, end)
// {
//   return 0;
// }

//parameters

// two integers

//returns

// the length of the array, with 5s removed

//examples

//console.log(dontGiveMeFive(1,9)) // 8
//console.log(dontGiveMeFive(4, 17)) // 12

//pseudocode

//need to create a loop that will return an array between the 2 integers (including)
//need to filter out numbers with 5 in it


const dontGiveMeFive = (start, end) => {
  let fiveArr = [];
  for (let i = start; i <= end; i++){
    fiveArr.push(i);
  }
  //to check the array 
  console.log(fiveArr)
  
  const noFives = fiveArr.filter(number => !String(number).includes("5"));
  
  return noFives.length
  
}

console.log(dontGiveMeFive(4, 17))

//refactored 

const dontGiveMeFive = (start, end) => {
  let noFives = [];
  for (let i = start; i <= end; i++){
    if (!i.toString().includes("5")) {
      noFives.push(i)
    }
  }
  

  return noFives.length
  
}

console.log(dontGiveMeFive(4, 17))
