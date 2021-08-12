let rock = "ROCK";
let scissors = "SCISSORS";
let paper = "PAPER";
let computerScore = 0;
let playerScore = 0;
let tied = 0; 


function game() {
    for (let i = 1 ; i < 6; i++) {
        const playerSelection = prompt("Rock, paper or scissors?", "type here");
        const computerSelection = computerPlay(Math.floor(Math.random() * 3))

        function computerPlay(number) {
                if (number === 0) {
                    return rock;
                } else if (number === 1) {
                    return paper;
                } else {
                    return scissors;
                }
    };
 
janken(computerSelection.toUpperCase(), playerSelection.toUpperCase());
    function janken(a, b) {
        switch(true){
            case a == rock && b == rock:
            case a == paper && b == paper:
            case a == scissors && b == scissors:
                console.log(`Player played ${b}, computer played ${a}. It's a tie!`);
                tied += 1;
                console.log(`Game ${i}. Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
                break;
            case a == rock && b == scissors:
            case a == scissors && b == paper:
            case a == paper && b == rock:
                console.log(`Player played ${b}, computer played ${a}. Computer wins!`);
                computerScore += 1;
                console.log(`Game ${i}. Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
                break;
            case a == rock && b == paper:
            case a == scissors && b == rock:
            case a == paper && b == scissors:
                console.log(`Player played ${b}, computer played ${a}. Player wins!`);
                playerScore += 1;
                console.log(`Game ${i}. Computer ${computerScore} : Player ${playerScore} : Tie ${tied}.`);
                break;
            default:
                i--;
                alert("Please type either: rock, paper or scissors.");
        }
    }
    }
    if (computerScore == playerScore) {
        console.log("Tied game!")
    } else if (computerScore > playerScore) {
        console.log("Computer wins!")
    } else {
        console.log("Player wins! Well done.")
    }
}   

game();