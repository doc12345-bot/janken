let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let resetB = "reset";
let computerScore = 0;
let playerScore = 0;
let tied = 0; 

const rockPlay = document.getElementById('rock');
const paperPlay = document.getElementById('paper');
const scissorsPlay = document.getElementById('scissors');

const stoneIcon = document.getElementById('stoneIcon');
const paperIcon = document.getElementById('paperIcon');
const scissorIcon = document.getElementById('scissorIcon');

const resetBtn = document.getElementById('reset');

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice ='';
        if (button.id == rock){
            playerChoice += rock;
            rockPlay.classList.add('chosen');
        } else if (button.id == paper) {
            playerChoice += paper;
            paperPlay.classList.add('chosen');
        } else if (button.id == scissors) {
            playerChoice += scissors;
            scissorsPlay.classList.add('chosen');
        } else if (button.id == resetB) {
            resetBtn.classList.add('chosen');
            reset();
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

    if (a == rock){
        stoneIcon.classList.add('chosen');
    } else if (a == paper){
        paperIcon.classList.add('chosen');
    } else if (a == scissors) {
        scissorIcon.classList.add('chosen');
    };

    switch(true){
        case a == rock && b == rock:        
        case a == paper && b == paper:
        case a == scissors && b == scissors:
            result = `Player played ${b}, computer played ${a}. It's a tie!`
            tied += 1;
            score = `Player score: ${playerScore}<br>
            Computer score: ${computerScore}<br>
            Tied games: ${tied}`;
            break;
        case a == rock && b == scissors:
        case a == scissors && b == paper:
        case a == paper && b == rock:
            result = `Player played ${b}, computer played ${a}. Computer wins!`;
            computerScore += 1;
            score = `Player score: ${playerScore}<br>
            Computer score: ${computerScore}<br>
            Tied games: ${tied}`;
            break;
        case a == rock && b == paper:
        case a == scissors && b == rock:
        case a == paper && b == scissors:
            result = `Player played ${b}, computer played ${a}. Player wins!`;
            playerScore += 1;
            score = `Player score: ${playerScore}<br>
            Computer score: ${computerScore}<br>
            Tied games: ${tied}`;
            break;
        default:
            alert("Resetting the game.");
            }

        if(playerScore == 5) {
            rockPlay.disabled = true;
            paperPlay.disabled = true;
            scissorsPlay.disabled = true;
            alert ("You won! Hit reset to play again.");
        } else if (computerScore == 5) {
            rockPlay.disabled = true;
            paperPlay.disabled = true;
            scissorsPlay.disabled = true;
            alert ("Computer wins! Hit reset to try again.");
        } 

        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = score;
    }

function reset() {
    playerScore = 0;
    computerScore = 0;
    tied = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = '';

    rockPlay.disabled = false;
    paperPlay.disabled = false;
    scissorsPlay.disabled = false;

}

resetBtn.addEventListener('click', reset);

function removeChosen(e) {
    if(e.propertyName != 'transform') return;
    this.classList.remove('chosen');
}

const icon = document.querySelectorAll('.icons');
icon.forEach(icon => icon.addEventListener('transitionend', removeChosen));
buttons.forEach(btn => btn.addEventListener('transitionend', removeChosen));