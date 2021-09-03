let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let computerScore = 0;
let playerScore = 0;
let tied = 0; 

const rockPlay = document.getElementById('rock');
const paperPlay = document.getElementById('paper');
const scissorsPlay = document.getElementById('scissors');
const icons = document.getElementById('icons');

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
        janken(computerPlay(), playerChoice);
    })
})

function computerPlay() {
    let selection = [rock, paper, scissors];
    return selection[Math.floor(Math.random() * selection.length)];
}

function janken(a, b) {
    let result = '';
    let score = '';

    switch(true){
        case a == rock && b == rock:
        case a == paper && b == paper:
        case a == scissors && b == scissors:
            icons.classList.add('chosen')
            result = `Player played ${b}, computer played ${a}. It's a tie!`
            tied += 1;
            score = `Player score: ${playerScore}
            Computer score: ${computerScore}
            Tied games: ${tied}`;
            break;
        case a == rock && b == scissors:
        case a == scissors && b == paper:
        case a == paper && b == rock:
            result = `Player played ${b}, computer played ${a}. Computer wins!`;
            computerScore += 1;
            score = `Player score: ${playerScore}
            Computer score: ${computerScore}
            Tied games: ${tied}`;
            break;
        case a == rock && b == paper:
        case a == scissors && b == rock:
        case a == paper && b == scissors:
            result = `Player played ${b}, computer played ${a}. Player wins!`;
            playerScore += 1;
            score = `Player score: ${playerScore}
            Computer score: ${computerScore}
            Tied games: ${tied}`;
            break;
        default:
            alert("Error.");
            }

            if(playerScore == 5) {
                rockPlay.disabled = true;
                paperPlay.disabled = true;
                scissorsPlay.disable = true;
                alert ("You won! Hit reset to play again.");
            } else if (computerScore == 5) {
                rockPlay.disabled = true;
                paperPlay.disabled = true;
                scissorsPlay.disable = true;
                alert ("Computer wins! Hit reset to try again.");
            } 

        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = score;
    }

