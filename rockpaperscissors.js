let ans = ' ';
let userScore = 0;
let opponentScore = 0;

document.getElementById("rockbtn").addEventListener('click', () => {
   ans = "Rock";
   compareChoice(ans);
});
document.getElementById("paperbtn").addEventListener('click', () => {
   ans = "Paper";
   compareChoice(ans);
});
document.getElementById("scissorsbtn").addEventListener('click', () => {
   ans = "Scissors";
   compareChoice(ans);
});

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return "Paper"; 
  } else if (x === 1) {
    return "Rock";
  } else {
    return "Scissors";
  } 
}

function compareChoice(UserChoice) {
  let PcChoice = getComputerChoice();
  let resultText = "";
  
  if (UserChoice === PcChoice) {
    resultText = "It's a tie!";
  } else if (UserChoice === "Rock" && PcChoice === "Paper") {
    resultText = "Opponent wins!";
    opponentScore++;
  } else if (UserChoice === "Paper" && PcChoice === "Rock") {
    resultText = "User wins!";
    userScore++;
  } else if (UserChoice === "Rock" && PcChoice === "Scissors") {
    resultText = "User wins!";
    userScore++;
  } else if (UserChoice === "Scissors" && PcChoice === "Paper") {
    resultText = "User wins!";
    userScore++;
  } else if (UserChoice === "Scissors" && PcChoice === "Rock") {
    resultText = "Opponent wins!";
    opponentScore++;
  } else if (UserChoice === "Paper" && PcChoice === "Scissors") {
    resultText = "Opponent wins!";
    opponentScore++;
  }

  // Update result and scores
  updateDisplay(resultText);

  // Check for game end
  if (opponentScore === 5) {
    displayWinner("YOU LOSE!");
    disableGame();
  } else if (userScore === 5) {
    displayWinner("YOU WIN!");
    disableGame();
  }
}

function updateDisplay(resultText) {
  // Update result text
  let resultPara = document.getElementById('resultPara');
  if (!resultPara) {
    resultPara = document.createElement('p');
    resultPara.id = 'resultPara';
    document.body.appendChild(resultPara);
  }
  resultPara.textContent = resultText;

  // Update scores
  let userScoreDisplay = document.getElementById('userScoreDisplay');
  let opponentScoreDisplay = document.getElementById('opponentScoreDisplay');
  
  if (!userScoreDisplay) {
    userScoreDisplay = document.createElement('div');
    userScoreDisplay.id = 'userScoreDisplay';
    document.body.appendChild(userScoreDisplay);
  }
  if (!opponentScoreDisplay) {
    opponentScoreDisplay = document.createElement('div');
    opponentScoreDisplay.id = 'opponentScoreDisplay';
    document.body.appendChild(opponentScoreDisplay);
  }

  userScoreDisplay.textContent = "User score is " + userScore;
  opponentScoreDisplay.textContent = "Opponent score is " + opponentScore;
}

function displayWinner(message) {
  let winner = document.getElementById('winner');
  if (!winner) {
    winner = document.createElement('h1');
    winner.id = 'winner';
    document.body.appendChild(winner);
  }
  winner.textContent = message;
}

function disableGame() {
  document.getElementById("rockbtn").disabled = true;
  document.getElementById("paperbtn").disabled = true;
  document.getElementById("scissorsbtn").disabled = true;
}

function reEnableGame() {
  document.getElementById("rockbtn").disabled = false;
  document.getElementById("paperbtn").disabled = false;
  document.getElementById("scissorsbtn").disabled = false;
  opponentScore = 0;
  userScore = 0;
  updateDisplay(""); // Clear scores and result display
}

document.getElementById("replaybtn").addEventListener('click', () => {
  reEnableGame();
});
