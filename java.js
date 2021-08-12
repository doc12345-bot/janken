let playerWin = "playerWin";
let computerWin = "computerWin";
let tie = "tie";
let error;
let choice;
let rock = "ROCK";
let scissors = "SCISSORS";
let paper = "PAPER";
var computerScore = 0;
var playerScore = 0;
var tied = 0; 


function game() {
 
    for (let i = 0 ; i < 5; i++) {
        choice = prompt("Rock, paper or scissors?");
    if (janken() === computerWin) {
        computerScore += 1;
        console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
    } else if (janken() === playerWin) {
        playerScore += 1;
        console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
    } else if (janken() === tie) {
        tied += 1;
        console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
    } else {
        i -= 1;
        console.log(`Error.`);
    }

};
}



function computerPlay() {
        let number = Math.floor(Math.random() * 100);
            if (number <33) {
                return rock;
            } else if (number >66) {
                return paper;
            } else {
                return scissors;
            }
};
    
function janken(computerSelection, playerSelection) {

computerSelection = computerPlay().toUpperCase();
playerSelection = choice.toUpperCase();


if(playerSelection.toUpperCase() ==  `ROCK` && computerSelection == rock){
    console.log("Player plays ROCK and computer plays ROCK. It's a tie!");
    return tie
} else if (playerSelection.toUpperCase() == `ROCK` && computerSelection == paper){
    console.log("PLayer plays ROCK and computer plays PAPER. Computer wins!");
    return computerWin;
} else if (playerSelection.toUpperCase() == `ROCK` && computerSelection == scissors) {
    console.log("Player plays ROCK and computer plays SCISSORS. Plays wins!");
    return playerWin;

} else if (playerSelection.toUpperCase() == `PAPER` && computerSelection == paper) {
    console.log("Player plays PAPER and computer plays PAPER. It's a tie!");
    return tie;
} else if (playerSelection.toUpperCase() == `PAPER` && computerSelection == rock) {
    console.log("Player plays PAPER and computer plays ROCK. Player wins!");
    return playerWin;
} else if (playerSelection.toUpperCase() == `PAPER` && computerSelection == scissors) {
    console.log("Player plays PAPER and computer plays SCISSORS. Computer wins!");
    return computerWin;

} else if (playerSelection.toUpperCase() == `SCISSORS` && computerSelection == scissors) {
    console.log("Player plays SCISSORS and computer plays SCISSORS. It's a tie!");
    return tie;
} else if (playerSelection.toUpperCase() == `SCISSORS` && computerSelection == paper) {
    console.log("Player plays SCISSORS and computerp plays PAPER. Player wins!");
    return playerWin;
} else if (playerSelection.toUpperCase() == `SCISSORS` && computerSelection == rock) {
    console.log("Player plays SCISSORS and computer plays ROCK. Computer wins!");
    return computerWin;
} else {
    console.log("Please type either: rock, paper or scissors.")
    return error
};
}
        

game();

/*/*/
