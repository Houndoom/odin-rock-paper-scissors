function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random()*(options.length))];
}

function capitaliseFirst(string) {
  if (!string) {
    return;
  } else if (string.length === 1) {
    return string.toUpperCase();
  }
  else {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}

function playRound(playerSelection, computerSelection) {
  const options = ['Rock', 'Paper', 'Scissors'];

  playerSelection = capitaliseFirst(playerSelection);
  computerSelection = capitaliseFirst(computerSelection);
  
  if (playerSelection === computerSelection) {
    return ["It's a draw!","Draw"];
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return ["You lose! " + computerSelection + " beats " + playerSelection + ".","Computer"];
  } else {
    return ["You win! " + playerSelection + " beats " + computerSelection + ".","Player"];
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  if (playerScore < 5 && computerScore < 5) {
    playerSelection = this.textContent;
    const result = document.querySelector('#result');
    const outcome = playRound(playerSelection, computerPlay());
    result.textContent = `${outcome[0]}`;
    if (outcome[1] === 'Computer') {
      computerScore += 1;
      const computer = document.querySelector('#computer-score');
      computer.textContent = `Computer score: ${computerScore}`;
      if (computerScore === 5) {
        result.textContent += ' Computer has won!';
      }
    } else if (outcome[1] === 'Player') {
      playerScore += 1;
      const player = document.querySelector('#player-score');
      player.textContent = `Player score: ${playerScore}`;
      if (playerScore === 5) {
        result.textContent += ' Player has won!';
      }
    }
  }
  return;
}

const choice = document.querySelectorAll('.choice');

choice.forEach(e => e.addEventListener('click',game));