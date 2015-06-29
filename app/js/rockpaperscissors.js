////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`.
      // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    var something = move;
    if (move !== undefined) {
        return something;
    } else {
        return getInput();
    }
  }

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var something = move;
    if (move !== undefined) {
        return something;
    } else {
        return randomPlay();
    }
    
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove == computerMove) {
        winner = "tie";
    } else if (playerMove == "rock") {
        if (computerMove == "scissors") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove == "paper") {
        if (computerMove == "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove == "scissors") {
        if (computerMove == "paper") {
            winner = "player";
        } else {
            winner = "computer";
        }
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var winCounter = function(userInput, computerInput) {
        if (getWinner(userInput, computerInput) == "player") {
            playerWins += 1;
        } else if (getWinner(userInput, computerInput) == "computer") {
            computerWins += 1;
        };    
    }

    var gameOver = function() {
        if (playerWins > 5 || computerWins > 5) {
            return alert("game over");
        } else {
            var userInput = getPlayerMove();
            var computerInput = getComputerMove();
            
            console.log(userInput);
            console.log(computerInput);

            winCounter(userInput, computerInput);
        }
    }

    gameOver();

    return [playerWins, computerWins];

}


(function RunGame() {
    var playerScore = 0;
    var computerScore = 0;

    var init = function() {
        if(playerScore != 5 && computerScore != 5) {
            var result = playToFive();
            playerScore += result[0];
            computerScore += result[1];

            console.log(playerScore);
            console.log(computerScore);

            init();
        }
    }

    init();
})();


