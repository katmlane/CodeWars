// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

// function rainAmount(mm){
//     if (rainAmount = 40) {
//          return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//     };
//     if else {
//          return "Your plant has had more than enough water for today!"
//     };
// }

//parameters 

//integers

//returns 

//either the amount of water needed or "your plants have enough water"

//examples

//console.log(rainAmount(100)) // "Your plant has had more than enough water for today!"

//console.log(rainAmount(39)) // "You need to give your plant 1mm of water"


//pseudocode

// if mm < 40 , 40 -mm and return ""
//if mm >= 40 , return "plants have enough water"

const rainAmount = mm => mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!";

console.log(rainAmount(39))