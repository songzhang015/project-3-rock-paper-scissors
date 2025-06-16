
function getComputerChoice() {
    // Generates a random choice of "rock", "paper", or "scissors" to be used by the computer.
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (humanSelection, computerSelection) {
    // Iterates over a round and modifying the text field from HTML
    const text = document.querySelector("#text");
    if (humanSelection == "rock" && computerSelection == "rock") {
        text.textContent = "You tied! Rock ties Rock."
        return 0;
    }
    if (humanSelection == "rock" && computerSelection == "paper") {
        text.textContent = "You lose! Paper beats Rock."
        return -1;
    }
    if (humanSelection == "rock" && computerSelection == "scissors") {
        text.textContent = "You win! Rock beats Scissors."
        return 1;
    }

    if (humanSelection == "paper" && computerSelection == "rock") {
        text.textContent = "You win! Paper beats Rock."
        return 1;
    }
    if (humanSelection == "paper" && computerSelection == "paper") {
        text.textContent = "You tied! Paper ties Paper."
        return 0;
    }
    if (humanSelection == "paper" && computerSelection == "scissors") {
        text.textContent = "You lose! Scissors beats Paper."
        return -1;
    }

    if (humanSelection == "scissors" && computerSelection == "rock") {
        text.textContent = "You lose! Rock beats Scissors."
        return -1;
    }
    if (humanSelection == "scissors" && computerSelection == "paper") {
        text.textContent = "You win! Scissors beats Paper."
        return 1;
    }
    if (humanSelection == "scissors" && computerSelection == "scissors") {
        text.textContent = "You tied! Scissors ties Scissors."
        return 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Once website loads, initialize variables and adds listeners to buttons
    // When selection is made, modify corresponding text fields from HTML
    let humanScore = 0;
    let computerScore = 0;
    let result;

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const humanText = document.querySelector("#human");
    const computerText = document.querySelector("#computer");

    rockButton.addEventListener("click", () => {
        result = playRound("rock", getComputerChoice());
        if (result == -1) {
            computerScore++;
        }
        if (result == 1) {
            humanScore++;
        }

        humanText.textContent = ("Your score: " + humanScore);
        computerText.textContent = ("Computer score: " + computerScore);
    });
    
    paperButton.addEventListener("click", () => {
        result = playRound("paper", getComputerChoice());
        if (result == -1) {
            computerScore++;
        }
        if (result == 1) {
            humanScore++;
        }

        humanText.textContent = ("Your score: " + humanScore);
        computerText.textContent = ("Computer score: " + computerScore);
    });

    scissorsButton.addEventListener("click", () => {
        result = playRound("scissors", getComputerChoice());
        if (result == -1) {
            computerScore++;
        }
        if (result == 1) {
            humanScore++;
        }

        humanText.textContent = ("Your score: " + humanScore);
        computerText.textContent = ("Computer score: " + computerScore);
    });
});