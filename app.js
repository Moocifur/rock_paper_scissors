
//the choices so the computer has a selection
options = ["rock", "paper", "scissors"];

//randomly picks from options variable
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;//you have to return the choice silly
}

//gets users choice
function getPlayerChoice() {
    const choice = prompt("Rock, Paper, or Scissors foo!?");
    const choiceInLower = choice.toLowerCase();
    return choiceInLower;
}

//plays a round------------------------------------------------
function game() {
        function playRound(playerSelection, computerSelection) {//this was once outside
            if (playerSelection == computerSelection) {
                return "It's a Tie!"
            }
            else if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
            ){
                return `You Win! ${playerSelection} beats ${computerSelection}` 
            }
            else {
                return `You Lose! ${computerSelection} beats ${playerSelection}`  
            }
        }
        
        const playerSelection = getPlayerChoice(); //this equals players choice
        const computerSelection = getComputerChoice();//this equals comp choice
        console.log(playRound(playerSelection, computerSelection)); //consoles playRound(), we got the choices above
}

game(); //activates the dominoes above