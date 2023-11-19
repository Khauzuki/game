document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});

let playerScore = 0;
let compScore = 0;

const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("comp-score");
const roundResultDisplay = document.getElementById("round-result");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        roundResultDisplay.textContent = "You win this round!";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        compScore++;
        roundResultDisplay.textContent = "Computer wins this round!";
    } else {
        roundResultDisplay.textContent = "It's a tie!";
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    compScoreDisplay.textContent = `Computer Score: ${compScore}`;

    if (playerScore === 5 || compScore === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore > compScore) {
        roundResultDisplay.textContent = "Congratulations! You win the game!";
    } else if (compScore > playerScore) {
        roundResultDisplay.textContent = "Oops! Computer wins the game. Try again!";
    } else {
        roundResultDisplay.textContent = "It's a tie! Play again!";
    }

    playerScore = 0;
    compScore = 0;

    playerScoreDisplay.textContent = "Player Score: 0";
    compScoreDisplay.textContent = "Computer Score: 0";
}