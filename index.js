moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerSelection = '';
  let rnd = Math.floor(Math.random() * 3);

  if (rnd === 0) {
    computerSelection = "rock";
  } else if (rnd === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
} 

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
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

function playGame() {
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your move (rock/paper/scissors):");
    let computerSelection = getComputerChoice();
    let roundResult =  playRound(playerSelection, computerSelection);
    if (roundResult.includes('win')) {
      playerPoints ++;
    } else if (roundResult.includes('lose')){
      computerPoints ++;
    }

    document.getElementById('result').innerHTML += roundResult + ' The score is: ' + playerPoints + ' to ' + computerPoints  + '<br />';
  }

  if (playerPoints > computerPoints) {
    document.getElementById('result').innerHTML += 'You win the game! ' + playerPoints + ' to ' + computerPoints;
  } else if (playerPoints < computerPoints) {
    document.getElementById('result').innerHTML += 'You lose the game! ' + playerPoints + ' to ' + computerPoints;
  } else {
    document.getElementById('result').innerHTML += "It's a tie match!"
  }
}

playGame()