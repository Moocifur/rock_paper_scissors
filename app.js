
//the choices
options = ["rock", "paper", "scissors"];

//gets computer choice
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;//you have to return the choice silly
}

//grabs human choice
function getPlayerChoice() {
    const choice = prompt("Rock, Paper, or Scissors foo!?");
    const choiceInLower = choice.toLowerCase();
    return choiceInLower;
}

//plays a round------------------------------------------------
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return "It's a Tie!"
            }
            else if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
            ){
                playerScore++;
                return `You Win! ${playerSelection} beats ${computerSelection}` 
            }
            else {
                computerScore++;
                return `You Lose! ${computerSelection} beats ${playerSelection}`  
            }
        }
        
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player ${playerScore}, Computer ${computerScore}` )
    }

    gameWinner = winnerCheck();
    function winnerCheck(playerScore, computerScore){
    if (playerScore == computerScore){
        return "The game is a tie!"
    }
    else if (playerScore > computerScore){
        return "Player Wins the game!"
    }
    else {
        return "Computer Wins the game!"
    }
  }
  console.log(gameWinner)
}

game();