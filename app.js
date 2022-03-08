console.log("Loaded");

computerPlay = () => {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random(1) * 3)];
};

const playerSelection = "RoCk";

function playRound(playerSelection, computerSelection) {
  console.log(`${playerSelection} vs ${computerSelection}`);
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    console.log("win");
    return "win";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    console.log("win");
    return "win";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    console.log("win");
    return "win";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    console.log("draw");
    return "draw";
  } else {
    console.log("loss");
    return "loss";
  }
}

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

game();
