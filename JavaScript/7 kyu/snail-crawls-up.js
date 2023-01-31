// function snail(column, day, night) {
//   // your code here
// }

// The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

// Your function takes three arguments:

// The height of the column (meters)
// The distance that the snail crawls during the day (meters)
// The distance that the snail slides down during the night (meters)
// Calculate number of day when the snail will reach the top of the column.



//examples

//console.log(snail(5,10,3)) //1
//console.log(snail(100,20,5)) //7
//console.log(snail(10,3,2)) //8
//console.log(snail(10,3,1)) //5


//forgot that I needed to add and = sign in the short hand in order for the math to work properly
const snail = (column, day, night) => {
  let counter = 0;
  while (column > 0) {
    column - day + night
    counter ++ 
  }
  return counter
}



//column is height needed to climb 
//day is the height climbed during the day
//night is the height that is lost in reverse during the night
const snail = (column, day, night) => {
  //day counter
  let counter = 0;
  //set variable for climb height = 0
  //loop that checks the climb height for each day, if the climb is less than the column, counter is increased by 1
 
  for (let climb = 0; column > climb; counter++) {
    climb + day
    //conditional that will check to see if the snail slides in reverse for the night. Must check the first to see if the climb height after adding the day height is greater then the height of the column
    
    if (column > climb) {
      climb - night;
    }
  }
  return counter
}

// different solution that uses a while loop instead. 
function snail(column, day, night) {
  let current = 0;
  let counts = 0;
  while (current <= column) {
    counts++;
    current += day;
    if (current >= column) break;
    current -= night;
  }
  return counts;
}
