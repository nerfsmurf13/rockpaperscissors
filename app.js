console.log("Loaded");

computerPlay = () => {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random(1) * 3)];
};

let scores = [0, 0, 0];

const playerSelection = "RoCk";
const playRock = document
  .getElementById("play-rock")
  .addEventListener("click", () => {
    console.log("rock");
    playRound("rock", computerPlay());
  });

const playPaper = document
  .getElementById("play-paper")
  .addEventListener("click", () => {
    console.log("paper");
    playRound("paper", computerPlay());
  });

const playScissors = document
  .getElementById("play-scissors")
  .addEventListener("click", () => {
    console.log("scissors");
    playRound("scissors", computerPlay());
  });

let gameOver = false;

const gameStatus = document.getElementById("game-status");

const playerScore = document.getElementById("player-score");
const cpuScore = document.getElementById("cpu-score");
const gameLog = document.getElementById("game-log");

const gameWinner = document.getElementById("game-winner");
const gameOverStat = document.getElementById("game-over");

function playRound(playerSelection, computerSelection) {
  if (gameOver) return;
  gameLog.innerText = `${playerSelection} vs ${computerSelection}`;
  console.log(`${playerSelection} vs ${computerSelection}`);
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    gameStatus.innerText = "Win!";
    console.log("win");
    scores[0]++;
    playerScore.innerText = scores[0];
    checkWin();
    return "win";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    gameStatus.innerText = "Win!";
    console.log("win");
    scores[0]++;
    playerScore.innerText = scores[0];
    checkWin();
    return "win";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    gameStatus.innerText = "Win!";
    console.log("win");
    scores[0]++;
    playerScore.innerText = scores[0];
    checkWin();
    return "win";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    console.log("draw");
    gameStatus.innerText = "Draw!";
    scores[2]++;
    checkWin();
    return "draw";
  } else {
    console.log("loss");
    gameStatus.innerText = "Loss!";
    scores[1]++;
    cpuScore.innerText = scores[1];
    checkWin();
    return "loss";
  }
}

checkWin = () => {
  if (scores[0] >= 5 || scores[1] >= 5) {
    gameOver = true;
    gameOverStat.innerText = "!!!GAME OVER!!!";
    if (scores[0] > scores[1]) {
      gameWinner.innerText = "Human Wins!";
    } else gameWinner.innerText = "CPU Wins!";
  }
};
// console.log(playRound(playerSelection, computerSelection));

game = () => {
  scores = [0, 0, 0];
  rounds = 5;
  for (let index = 0; index < rounds; index++) {
    match = playRound(prompt(), computerPlay());
    if (match == "win") {
      scores[0]++;
    } else if (match == "loss") {
      scores[1]++;
    } else scores[2]++;
    console.log(index);
  }
  console.log(scores);
};

// game();
