let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let computerScore = 0;
let playerScore = 0;
let tied = 0; 

const rockPlay = document.getElementById('rock');
const paperPlay = document.getElementById('paper');
const scissorsPlay = document.getElementById('scissors');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice ='';
        if (button.id == rock){
            playerChoice += rock;
        } else if (button.id == paper) {
            playerChoice += paper;
        } else if (button.id == scissors) {
            playerChoice += scissors;
        }
        janken(computerSelection, playerChoice);
    })
})
const computerSelection = computerPlay(Math.floor(Math.random() * 3));
function computerPlay(number) {
    if (number === 0) {
        return rock;
    } else if (number === 1) {
        return paper;
    } else {
        return scissors;
    }
}


function janken(a, b) {
    switch(true){
        case a == rock && b == rock:
        case a == paper && b == paper:
        case a == scissors && b == scissors:
            console.log(`Player played ${b}, computer played ${a}. It's a tie!`);
            tied += 1;
            break;
        case a == rock && b == scissors:
        case a == scissors && b == paper:
        case a == paper && b == rock:
            console.log(`Player played ${b}, computer played ${a}. Computer wins!`);
            computerScore += 1;
            break;
        case a == rock && b == paper:
        case a == scissors && b == rock:
        case a == paper && b == scissors:
            console.log(`Player played ${b}, computer played ${a}. Player wins!`);
            playerScore += 1;
            break;
        default:
            alert("Error.");
                }
    }
    
if (computerScore == playerScore) {
    console.log("Tied game!")
    } else if (computerScore > playerScore) {
    console.log("Computer wins!")
    } else {
    console.log("Player wins! Well done.")
    };
  