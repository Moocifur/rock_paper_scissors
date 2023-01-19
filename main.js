//need to create the choices
const choices = [`rock`, `paper`, `scissors`];
//-------------------------------
function playRound() {//play a round!
    const playerSelection = getPlayerChoice(); //get the player choice
    const computerSelection = getComputerChoice(); // get compouters random choice
    const winner = checkWinner(playerSelection, computerSelection); //get both answers, and determine the winner
    console.log(playerSelection); //show players choice
    console.log(computerSelection); //show computers choice
    console.log(winner); //show who won!
}

//selection---------------------------------------------------------------
function getPlayerChoice() {
    let input = prompt ("Please enter Paper, Scissor, Rock.");
    return input;
}

function getComputerChoice() { //throw the choices in this to chur out one of them out randomly
    return choices[Math.floor(Math.random()*choices.length)];
}    

function checkWinner(playerSelection, computerSelection) { //calculate winner
    if (playerSelection===computerSelection) {
        return `It's a tie!`;
    } 
    
    else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
      ){
        return "Playa Won!";
    }

    else {
        return "Robots Take Over!";
    } 
}



//-------------------------------------------------------------------------
playRound() //activates the game, without it, it wont just start