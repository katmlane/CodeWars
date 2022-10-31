// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


// function well(x){

// }


//console.log(well(['bad', 'bad', 'bad'])) //'Fail!'
//console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) //'Publish!'
//console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) //'I smell a series!'



//need to check the array for "good"
//use loop and use counter
//if n < 2 , then "Publish!"
//if n > 2 , then "I smell a series!"
// if n === 0, then "Fail!"


const well = x => {
  let counter = 0;
  for ( let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
    counter++
  }
    console.log(counter)
  }
  if ( counter > 2 ) {
    return "I smell a series!";
  }
  else if ( counter <= 0) {
    return "Fail!";
  }
  else {
    return "Publish!"
  }
  
};
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad']))






//codewars soln.



const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}
