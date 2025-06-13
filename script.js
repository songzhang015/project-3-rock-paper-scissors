
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
    let humanChoice = prompt("Input: 'Rock', 'Paper' or 'Scissors'");
    return humanChoice;
}

function playRound () {
    /*
    Define two parameters for playRound: humanChoice and computerChoice.
    Use these two parameters to take the human and computer choices as arguments.

    Make your function’s humanChoice parameter case-insensitive so that
    players can input “rock”, “ROCK”, “RocK”, or other variations.

    Write the code for your playRound function to console.log a string
    value representing the round winner, such as: “You lose! Paper beats Rock”.

    Increment the humanScore or computerScore variable based on the round winner.
    */

    
}

function playGame() {
    /*
    Move your playRound function and score variables so that they’re declared inside of the new playGame function

    Play 5 rounds by calling playRound 5 times.

    Hint: When you assign a function call to a variable, the return value
    of that function is assigned to the variable. Accessing the variable
    afterward will only provide the assigned value; it doesn’t recall the function.
    You need to recall the choice functions to get new choices for each round.

    Re-work your previous functions or create more helper functions if necessary.
    Specifically, you may want to change the return values to something more useful.
    If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
    */
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}