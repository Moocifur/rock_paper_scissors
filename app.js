
let playerScore = 0;
let computerScore = 0;
let roundsToWin = 5;

let container = document.querySelector('.button-container');//container IS buttons box
let buttons = container.querySelectorAll('button');//buttons is buttons from html
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');

let gameOver = false;

function getComputerChoice() {//computer choice getter function
    options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;//you have to return the choice silly
}

buttons.forEach(function(btn) {  
    btn.addEventListener('click', function() {
        if (!gameOver) {
            let playerSelection = btn.textContent.toLowerCase();
            const welcome=document.querySelector(`.welcome`)
            const computerSelection = getComputerChoice(); //gets compouter choice
            roundResult = (playRound(playerSelection, computerSelection));
            
            welcome.innerHTML = roundResult;

            if (playerScore === roundsToWin || computerScore === roundsToWin) {
                gameOver = true;
                announceWinner();
            }

        }
    });
});

function playRound(playerSelection, computerSelection) {//this was once outside
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
    const welcome = document.querySelector('.welcome');
    if (playerScore === roundsToWin) {
        welcome.innerHTML = "Player Wins The GAME!";
    } else {
        welcome.innerHTML = "Computer Wins The GAME!"
    }
}




