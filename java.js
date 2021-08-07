function computerPlay() {
    let string = ["ROCK", "PAPER", "SCISSORS"];
    let multiplier = Math.floor(Math.random() * 3);
    return string[multiplier];
}
function janken(playerSelection, computerSelection) {
    computerSelection = computerPlay().toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, it's a tie!`
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, player wins!`
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return `Player plays ${playerSelection} and computer plays ${computerSelection}, computer wins!`
    } else {
        return `Error, please check the code.`
    }
}
function game() {
    janken();
    if (janken.includes("computer wins!")) {
        console.log("Computer 1 : Player 0")
    } else {
        console.log("Computer 0 : Player 1")
    }
}