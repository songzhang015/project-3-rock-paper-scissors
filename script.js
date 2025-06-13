
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

function getHumanChoice() {
    // Prompts for the human's input to be returned. Case-insensitive but no checks.
    let humanSelection = prompt("Input: 'Rock', 'Paper' or 'Scissors'");
    return humanSelection.toLowerCase();
}

function playRound (humanSelection, computerSelection) {
    if (humanSelection == "rock" && computerSelection == "rock") {
        console.log("You tied! Rock ties Rock.")
        return 0;
    }
    if (humanSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock.")
        return -1;
    }
    if (humanSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors.")
        return 1;
    }

    if (humanSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock.")
        return 1;
    }
    if (humanSelection == "paper" && computerSelection == "paper") {
        console.log("You tied! Paper ties Paper.")
        return 0;
    }
    if (humanSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper.")
        return -1;
    }

    if (humanSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors.")
        return -1;
    }
    if (humanSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper.")
        return 1;
    }
    if (humanSelection == "scissors" && computerSelection == "scissors") {
        console.log("You tied! Scissors ties Scissors.")
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);
        if (result == -1) {
            computerScore++;
        }
        if (result == 1) {
            humanScore++;
        }

        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("<-------->")
        console.log("<-------->")
        console.log("<-------->")
    }
}

playGame();