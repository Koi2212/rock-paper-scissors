let userScore = 0;
let computerScore = 0;
let tmpComScore = document.querySelector(".tmpComScore");
let tmpUserScore = document.querySelector(".tmpUserScore");
let tmpResult = document.querySelector(".tmpResult");
let computer = document.querySelector(".computer div");
let user = document.querySelector(".you div");
let userChoice;
let comChoice;

function computerChoice() {
  let tmp = Math.trunc(Math.random() * 3) - 1;
  if (tmp === -1) {
    computer.textContent = "✌️";
    computer.style.display = "flex";
  } else if (tmp === 0) {
    computer.textContent = "✊";
    computer.style.display = "flex";
  } else {
    computer.textContent = "🖐";
    computer.style.display = "flex";
  }
  return tmp;
}

function calWinnerBaseOnUser(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "Tie";
  } else if (computerChoice - userChoice === 2) {
    return "Win";
  } else if (
    computerChoice > userChoice ||
    computerChoice - userChoice === -2
  ) {
    return "Lose";
  }
  return "Win";
}

document.querySelector(".choices").addEventListener("click", function (e) {
  if (e.target.className === "keo") {
    userChoice = -1;
    user.textContent = "✌️";
    user.style.display = "flex";
    game();
  } else if (e.target.className === "bua") {
    userChoice = 0;
    user.textContent = "✊";
    user.style.display = "flex";
    game();
  } else if (e.target.className === "bao") {
    userChoice = 1;
    user.textContent = "🖐";
    user.style.display = "flex";
    game();
  }
});

function game() {
  if (userScore + computerScore === 5) {
    return;
  }
  comChoice = computerChoice();
  let result = calWinnerBaseOnUser(comChoice, userChoice);
  if (result === "Win") {
    userScore++;
    tmpUserScore.textContent = "Your Score: " + userScore;
    tmpResult.textContent = "You get one plus!";
  } else if (result === "Lose") {
    computerScore++;
    tmpComScore.textContent = "Computer Score: " + computerScore;
    tmpResult.textContent = "Try again!";
  } else {
    tmpResult.textContent = "Tie!!!";
  }
  if (userScore + computerScore === 5) {
    if (userScore > computerScore) {
      tmpResult.textContent = "You Win!";
    } else {
      tmpResult.textContent = "You Lose";
    }
  }
}

document.querySelector("button").addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  tmpUserScore.textContent = "Your Score: " + userScore;
  tmpComScore.textContent = "Computer Score: " + computerScore;
  tmpResult.textContent = "Let begin new game!";
});
