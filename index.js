moves = ["rock", "paper", "scissors"];
let roundResult = 0;
let playerPoints = 0;
let computerPoints = 0;
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerSelect = document.getElementById('playerSelect');
const computerSelect = document.getElementById('computerSelect');

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

function displayOption (playerSelection, computerSelection) {

  const playerOption = document.createElement('img');
  const computerOption = document.createElement('img');
  playerSelect.innerHTML = '';
  computerSelect.innerHTML = '';
  switch (playerSelection) {
  case 'rock':
    playerOption.src= './images/rock.png';
    break;
  case 'paper':
    playerOption.src= './images/paper.png';
    break;
  case 'scissors':
    playerOption.src= './images/scissors.png';
    break;
  default:
    playerOption.src= '';
    break;
  }

  switch (computerSelection) {
    case 'rock':
      computerOption.src= './images/rock.png';
      break;
    case 'paper':
      computerOption.src= './images/paper.png';
      break;
    case 'scissors':
      computerOption.src= './images/scissors.png';
      break;
    default:
      computerOption.src= '';
      break;
    }
  playerSelect.appendChild(playerOption);
  computerSelect.appendChild(computerOption);
}

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = getComputerChoice();
  computerSelection = computerSelection.toLowerCase();

  displayOption(playerSelection, computerSelection);

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

rockBtn.addEventListener('click', () => {
  roundResult = playRound('rock');
  playGame()
});

paperBtn.addEventListener('click', () => {
  roundResult = playRound('paper');
  playGame()
});

scissorsBtn.addEventListener('click', () => {
  roundResult = playRound('scissors');
  playGame()
});

const reset = document.getElementById('resetBtn');
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled=true;
  scissorsBtn.disabled = true;
  reset.classList.toggle('hide');
}

function enableButtons(){
  roundResult = 0;
  playerPoints = 0;
  computerPoints = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  document.getElementById('roundResult').innerHTML = ''; 
  document.getElementById('score').innerHTML = ''; 
  playerSelect.innerHTML = '';
  computerSelect.innerHTML = '';
  document.getElementById('result').innerHTML = '';
}


reset.addEventListener('click', () => { 
  enableButtons();
  reset.classList.add('hide')
});

function playGame() {  
  if (roundResult.includes('win')) {
    playerPoints ++;
  } else if (roundResult.includes('lose')){
    computerPoints ++;
  }
  document.getElementById('roundResult').innerHTML = roundResult; 
  document.getElementById('score').innerHTML = `<span>${playerPoints}</span><span>${computerPoints}</span>`; 

  if (playerPoints === 5) {
    document.getElementById('result').innerHTML = "Congratulations, you win the game!";
    disableButtons();
  } else if (computerPoints === 5) {
    document.getElementById('result').innerHTML = "Sorry, you lose the game!";
    disableButtons();
  }
}