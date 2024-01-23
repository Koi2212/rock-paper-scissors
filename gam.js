function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie !";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerCore = 0;
    let computerCore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        let result = playRound(window.prompt("Your choice ?", ""), getComputerChoice());
        if (result.charAt(4) == "w") {
            playerCore++;
        } else if (result.charAt(4) == "l") {
            computerCore++;
        }
        console.log(result);
    }
    if (playerCore > computerCore) {
        console.log("You win the final !");
    } else if (playerCore < computerCore) {
        console.log("You lose the final !");
    } else {
        console.log("Tie game!")
    }
}

let option = document.querySelector(".option");

option.addEventListener = ('click', (e) => {
    switch (e.target.innerText) {
        case "Rock":
            prompt("Rock");
            break;
        case "Paper":
            prompt("Paper");
            break;
        case "Scissors":
            prompt("Scissors");
    }
})