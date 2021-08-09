    let playerWin = "playerWin";
    let computerWin = "computerWin";
    let tie = "tie";
    let choice;

function game() {
    for (let i = 0 ; i < 5; i++) {
        let choice = prompt("Rock, paper or scissors?");

        let computerScore = 0;
        let playerScore = 0;
        let tie = 0;    

function computerPlay() {
    let string = ["ROCK", "PAPER", "SCISSORS"];
    let multiplier = Math.floor(Math.random() * 3);
    return string[multiplier];
    };
    
function janken(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    playerSelection = choice.toUpperCase();
    if (playerSelection === computerSelection) {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, it's a tie!`;
        return tie;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`;
        return playerWin;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`;
        return computerWin;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`;
        return computerWin;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`;
        return playerWin;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`;
        return playerWin;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        alert `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`;
        return computerWin;
    } else {
        return `Error, please type "rock", "paper" or "scissors".`
    }
};

        if (janken() === computerWin) {
                computerScore += 1;
                console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
            } else if (janken() === playerWin) {
                playerScore += 1;
                console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
            } else if (janken() === tie) {
                tie += 1;
                console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
            } else {
                i -= 1;
                console.log(`Error.`);
        };
    }
};

game();
/*     if (janken() === computerWin.includes("computer wins!")) {
            computerScore += 1;
            console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
        } else if (janken().includes("player wins!")) {
            playerScore += 1;
            console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
        } else if (janken().includes("tie")) {
            tie += 1;
            console.log(`Computer ${computerScore} : Player ${playerScore} : Tie ${tie}.`);
        } else {
            i -= 1;
            console.log(`Error.`);
    }; /*/ 