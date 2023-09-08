
let playerScore = 0;
let computerScore = 0;
let roundsToWin = 5;
let gameOver = false;

let buttons = document.querySelectorAll('button');
let sign = document.querySelector(`.sign`)
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');


function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

buttons.forEach(selection => {  
    selection.addEventListener('click', function() {
        if (!gameOver) {
            let playerSelection = selection.textContent.toLowerCase();
            const computerSelection = getComputerChoice(); 
            roundResult = (playRound(playerSelection, computerSelection));
            sign.innerHTML = roundResult;
            if (playerScore === roundsToWin || computerScore === roundsToWin) {
                gameOver = true;
                announceWinner();
            };
        };
    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        playerScore++
        playerScoreDisplay.textContent = playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    }
    else {
        computerScore++
        computerScoreDisplay.textContent = computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`  
    }
}

function announceWinner() {
    if (playerScore === roundsToWin) {
        sign.innerHTML = "Player Wins The GAME!";
    } else {
        sign.innerHTML = "Computer Wins The GAME!"
    }
}




