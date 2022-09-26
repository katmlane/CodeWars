// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// function points(games) {
//   return 0
// }

//examples

//console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) //30
//console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])) //10
//console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])) //0
//console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])) //15
//console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])) //12

// the user will input an array of string with scores written "x:y". The return should be the sum of the points for each match win or loss. If x > y = 3 point (win). if x < y = 0 points (loss). if x=y = 1 point (tie)

//need to split each element into nested elements, need to make comparison for each element, if el[0] > el[1] => points += 3, if el[0] < el[1] => points += 0,   if el[0] === el[1] => points += 1
//return reduced array of elements

const points = games => {
  //split each element into a nested element
  let splitScore = games.map((el) => el.split(":"));
  //set counter for points
  let points = 0;
  //loop through elements, making a number and comparing the values within the nested array
  for (let i=0; i < splitScore.length; i++){
    //if our team won
    if (splitScore[i][0] > splitScore[i][1]) {
      points += 3
    }
    //if our team lost
    else if (splitScore[i][0] < splitScore[i][1]){
      points += 0
    }
    //if our team tied
    else if (splitScore[i][0] === splitScore[i][1]){
      points += 1
    }    
  }
  return points;
 };
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
