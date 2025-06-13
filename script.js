
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    /*
    Write the code so that getComputerChoice will randomly return one of the following string values:
    “rock”, “paper” or “scissors”.

    Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1.
    Think about how you can use this to conditionally return one of the multiple choices.

    Note: Some learners might think that arrays are necessary for this problem, but they aren’t.
    If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
    Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
    */


}

function getHumanChoice() {
    /*
    Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

    Hint: Use the prompt method to get the user’s input.

    You do not need to handle reprompting if the user enters an invalid input,
    as that would require things we will teach later. For now, just assume the user will always enter a valid choice.

    Test what your function returns by using console.log.
    */
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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
}