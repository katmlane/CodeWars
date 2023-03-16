
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!








// const rps = (p1, p2) => {
// };






//
//  Parameters
//

// rock, paper, or scissor
//one choice from player1 and player2

//
//  Returns
//

//"(winner player) won!"
// "Draw! if they tie"

//
//  Examples
//

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//
//  PseudoCode
//

//need to make a conditional for each condition

// need to evaluate player1 vs player2 




const rps = (p1, p2)=> {
    if (p1 === p2) {
        return "Draw!";
    }
    else if (p1 === "rock" && p2 === "scissors") {
        return "Player 1 won!";
    } 
    else if (p1 === "scissors"  && p2 ==="paper") {
        return "Player 1 won!";
    }
    else if (p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};


console.log(rps('paper','paper'))
