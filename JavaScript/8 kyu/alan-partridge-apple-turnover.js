// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// function apple(x){

// }

//parameters 

// a number or string 

//return 

// if x ^ 2 > 1000 = "It's hotter than the sun!!"
//else = "Help yourself to a honeycomb Yorkie for the glovebox"


//examples 

//console.log(apple("50")) //'It\'s hotter than the sun!!'
//console.log(apple(4)) // 'Help yourself to a honeycomb Yorkie for the glovebox.'

//parameters

//need to turn apple to number and then need to Math.pow(x,2)
// return correct string

// const apple = x => {
//   if(Math.pow(Number(x), 2) > 1000 ) {
//     return `It's hotter than the sun!!`
//   }
//   else {
//     return "Help yourself to a honeycomb Yorkie for the glovebox."
//   }
// };

// console.log(apple(3))

//refactored 


const apple = x => Math.pow(Number(x), 2) > 1000 ? `It's hotter than the sun!!` : "Help yourself to a honeycomb Yorkie for the glovebox.";

console.log(apple(3))