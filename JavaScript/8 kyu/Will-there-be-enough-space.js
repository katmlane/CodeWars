// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


// function enough(cap, on, wait) {
//   // your code here
// }

//parameters

//3 integers

//returns

// 0 if all passengers can fit but the remainder if not all of them fit. 

//examples

//console.log(enough(10, 5, 5)) //0
//console.log(enough(100, 60, 50)) //10
//console.log(enough(20, 5, 5)) //0


//pseudocode

// need to compare the cap to the amount currently on and then if any more can fit


// const enough = (cap, on, wait) => {
//   if ((cap - on - wait) >=0) {
//     console.log("there's room")
//     return 0
//   }
//   else if ((cap - on - wait) <=0) {
//     console.log("no more room")
//     return Math.abs(cap - wait - on)
//   }

// }


//refactored 


const enough = (cap, on, wait) => (cap - on - wait) >=0 ? 0 : Math.abs(cap - wait - on);



console.log(enough(100, 60, 50))
