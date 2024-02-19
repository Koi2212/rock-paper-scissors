function computerChoice() {
  return Math.trunc(Math.random() * 3) - 1;
}

function calWinnerBaseOnUser(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "Tie";
  } else if (
    computerChoice > userChoice ||
    computerChoice - userChoice === -2
  ) {
    return "Lose";
  } else {
    return "Win";
  }
}

let userScore = 0;
let computerScore = 0;

function game() {
  tempResult = document.querySelector(".tempResult");
  tempComScore = document.querySelector(".tempComScore");
  tempUserScore = document.querySelector(".tempUserScore");
  for (let i = 0; i < 5; i++) {
    let result = calWinnerBaseOnUser(computerChoice(), getUserChoice());
    if (result === "Win") {
      userScore++;
      tempUserScore.textContent = "Your Score: " + userScore;
      tempResult.textContent = "You got one more!";
    } else if (result === "Lose") {
      computerScore++;
      tempComScore.textContent = "Computer Score: " + computerScore;
      tempResult.textContent = "Computer got one more!";
    } else {
      tempResult.textContent = "Nothing happen!";
    }
  }
  if (userScore === computerScore) {
    tempResult.textContent = "Tie!";
  } else if (userScore > computerScore) {
    tempResult.textContent = `You are the winner with ${userScore}!`;
  } else {
    tempResult.textContent = `You Lose!`;
  }
}

function getUserChoice() {
  document.querySelector(".choices").addEventListener("click", function (e) {
    if (e.target.className === "keo") {
      return -1;
    }
    if (e.target.className === "bua") {
      return 0;
    }
    if (e.target.className === "bao") {
      return 1;
    }
  });
}

document.querySelector("button").addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  tempComScore.textContent = "Computer Score: " + computerScore;
  tempUserScore.textContent = "Your Score: " + userScore;
  tempResult.textContent = "Let begin the game!";
});

document.querySelector(".choices").addEventListener("click", function () {
  if (userScore + computerScore === 5) {
    return;
  }
  game();
});
