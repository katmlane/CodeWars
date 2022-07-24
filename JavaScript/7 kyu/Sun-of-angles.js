// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.


// function angle(n) {
//   //code here
// }

//(n – 2)180

//parameters 

//integers

//returns 

//sum of the angles

//examples

//console.log(angle(3)) //180
//console.log(angle(4)) // 360

//psuedocode 

//need to do some basic math

const angle = n => {
  return (n-2)*180
  
}

console.log(angle(3))

//refactored 

const angle = n => (n-2) * 180;
