// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.


// function checkAlive (health) {
//   if () {
//     health < 0
//     return false
//   } else () {
//     return true
//   }
// }



//console.log(checkAlive(5))  //true
//console.log(checkAlive(0))  //false


//parameter can be a whole number between -10 and 10. If the health is >0 then return true, else false 

const checkAlive = health => health > 0? true : false;

console.log(checkAlive(-10))


// because truthy and falsy, can ommit the turenary 

const checkAlive = (health) => health > 0
