// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// function cockroachSpeed(s) {
//   //Good Luck!
// }

//parameters

//integer, can be decimal 

//return intger in cm/sec

//examples

//console.log(cockroachSpeed(1.08)) //30
//console.log(cockroachSpeed(1.09)) //30
//console.log(cockroachSpeed(0)) //0


//pseudocode

//need to convert integer from km/hr to cm/sec
//whole answer needs Math.floor()


// const cockroachSpeed = s => {
//   //1000m per km
//   //100cm per m 
//   //100000cm per km
//   //60 min per 1hr
//   //60 sec per 1min
//   //3600 sec per 1hr
  
//   const conversion = (s * 100000) / 3600
//   return Math.floor(conversion)
  
// }




//refactored

const cockroachSpeed = s => Math.floor(s*100000/3600)


console.log(cockroachSpeed(0))
