'use strict';

// define the secret number
let secretNum = Math.trunc(Math.random()*20) + 1;

// TEST
document.querySelector('.number').textContent = secretNum;

// add event listener for the "check" button
document.querySelector('.check').addEventListener( 'click', (e) => {
    // get the guess value, convert to number
    const GUESS = Number(document.querySelector('.guess').value);
    // TEST
    console.log("Guess: " + GUESS);
    // check guess
    if (!GUESS) {
        // if no guess made, or value 0
        document.querySelector('.message').textContent = "😿 No valid number guessed!";
    } else if (GUESS == secretNum) {
        document.querySelector('.message').textContent = "🥳 Correct Number!";
    } else if (GUESS > secretNum) {
        document.querySelector('.message').textContent = "📈 Too high!";
    } else if (GUESS < secretNum) {
        document.querySelector('.message').textContent = "📉 Too low!";
    }

});