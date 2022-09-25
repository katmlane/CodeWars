// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


// function uefaEuro2016(teams, scores){
//   // your code...
// }


//examples
//console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])) //"At match Germany - Ukraine, Germany won!"
//console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])) //"At match Belgium - Italy, Italy won!"
//console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])) //"At match Portugal - Iceland, teams played draw.""


//need to check which of the 2nd arrays nested element is bigger
// once that index is determined it can be used to reference the first arrays nested elements to announce the winner
//if the elements of the 2nd nested array are equal, then it is a draw. 

const uefaEuro2016 = (teams, scores) => {
  //create a string template
  let resStr = `At match ${teams[0]} - ${teams[1]},`;
  //checking for a draw
  if (scores[0] === scores[1]) {
    resStr = resStr + " teams played draw.";
  }
  //if team one had higher points
  else if (scores[0] > scores[1]) {
    resStr = resStr + ` ${teams[0]} won!`;  
    //if team 2 had higher points
  }
  else if (scores[0] < scores[1]) {
    resStr = resStr + ` ${teams[1]} won!`;    
  }  
 return resStr 
};

console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]))
