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

function getPlayerChoice() {
  console.log("Choose your weapon");
  let ans = prompt("Enter your choice (Rock, Paper, Scissors):");
  return ans;
}

function determineWinner(PcChoice, UserChoice) {
  if (PcChoice === UserChoice) {
    return "Tie!";
  } else if (
    (PcChoice === "Rock" && UserChoice === "Scissors") ||
    (PcChoice === "Scissors" && UserChoice === "Paper") ||
    (PcChoice === "Paper" && UserChoice === "Rock")
  ) {
    return "Opponent wins!";
  } else {
    return "You win!";
  }
}

function playGame() {
  let PcChoice = getComputerChoice();
  let UserChoice = getPlayerChoice();

  console.log("You chose " + UserChoice);
  console.log("Your opponent chose " + PcChoice);

  let result = determineWinner(PcChoice, UserChoice);
  console.log(result);
}

let times = prompt("Number of rounds")
for (let i = 0; i < times; i++){
  playGame();
}
