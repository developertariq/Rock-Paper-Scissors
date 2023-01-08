moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerSelection = Math.random();

  if (computerSelection < 0.34) {
    computerSelection = "rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
} 

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  // Check for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  
  // Check for rock
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return "You win! Rock beats Scissors";
    } else {
      return "You lose. Paper beats Rock";
    }
  }
  
  // Check for paper
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return "You win! Paper beats Rock";
    } else {
      return "You lose. Scissors beats Paper";
    }
  }
  
  // Check for scissors
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return "You win! Scissors beats Paper";
    } else {
      return "You lose. Rock beats Scissors";
    }
  }
}

async function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your move (rock/paper/scissors):");
    let computerSelection = getComputerChoice();
    
    document.getElementById('result').innerHTML += playRound(playerSelection, computerSelection) + '<br />';
  }
}

// Start the game
  playGame()