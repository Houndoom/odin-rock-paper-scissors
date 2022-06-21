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
  if (!playerSelection && !computerSelection) {
    return "Please enter player and computer selections!";
  }
  if (!playerSelection) {
    return "Please enter player selection";
  }
  if (!computerSelection) {
    return "Please enter computer selection";
  }
  playerSelection = capitaliseFirst(playerSelection);
  computerSelection = capitaliseFirst(computerSelection);
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
}