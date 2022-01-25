'use strict';

// define the secret number
let secretNum = Math.trunc(Math.random()*20) + 1;
// define score
let score = 20; // initially 20 (max)

// decrement score by 1 and update DOM
function decrementScore() {
    // decrement the score
    score--;
    // show updated score
    document.querySelector('.score').textContent = score;
}


// add event listener for the "check" button
document.querySelector('.check').addEventListener( 'click', () => {
    // get the guess value, convert to number
    const GUESS = Number(document.querySelector('.guess').value);
    // TEST
    console.log("Guess: " + GUESS);
    // check if user hasn't already lost the game
    if (score > 1) {
        // check guess
        if (!GUESS) {
            // if no guess made, or value 0
            document.querySelector('.message').textContent = "😵 Not a valid guess!";
        } else if (GUESS == secretNum) {
            document.querySelector('.message').textContent = "🥳 Correct Number!";
            // display the secret number
            document.querySelector('.number').textContent = secretNum;
            // change style on success
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            // hide the check button and display the again button
            document.querySelector('.check').style.display = "none";
            document.querySelector('.again').style.display = "inline-block";
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
}); // click event listener for "check" button

document.querySelector('.again').addEventListener('click', () => {

    // hide the secret number
    document.querySelector('.number').textContent = "?";
    // recompute a new secret number
    secretNum = Math.trunc(Math.random()*20) + 1;
    // reset the styles
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = "";
    // show the check button and hide the again button
    document.querySelector('.check').style.display = "inline-block";
    document.querySelector('.again').style.display = "none";
});