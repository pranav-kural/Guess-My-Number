'use strict';

// define the secret number
let secretNum = Math.trunc(Math.random()*20) + 1;
// define score
let score = 20; // initially 20 (max)

// TEST
document.querySelector('.number').textContent = secretNum;

// decrement score by 1 and update DOM
function decrementScore() {
    // decrement the score
    score--;
    // show updated score
    document.querySelector('.score').textContent = score;
}


// add event listener for the "check" button
document.querySelector('.check').addEventListener( 'click', (e) => {
    // get the guess value, convert to number
    const GUESS = Number(document.querySelector('.guess').value);
    // TEST
    console.log("Guess: " + GUESS);
    // check if user hasn't already lost the game
    if (score > 1) {
        // check guess
        if (!GUESS) {
            // if no guess made, or value 0
            document.querySelector('.message').textContent = "😵 No valid number guessed!";
        } else if (GUESS == secretNum) {
            document.querySelector('.message').textContent = "🥳 Correct Number!";
        } else if (GUESS > secretNum) {
            document.querySelector('.message').textContent = "📈 Too high!";
            // decrement the score and display new score
            decrementScore();
        } else if (GUESS < secretNum) {
            document.querySelector('.message').textContent = "📉 Too low!";
            // decrement the score and display new score
            decrementScore();
        }
    } else {
        // set score to zero
        decrementScore();
        document.querySelector('.message').textContent = "😿 You lost the game!";
    }

});