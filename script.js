'use strict';

// define the secret number
let secretNum = Math.trunc(Math.random()*20) + 1;
// define score
let score = 20; // initially 20 (max)
let highscore = 0;
// shorthand for document.querySelector
const el = document.querySelector.bind(document);

// decrement score by 1 and update DOM
function decrementScore() {
    // decrement the score
    score--;
    // show updated score
    el('.score').textContent = score;
}

// perform tasks when game is over (whether loss or win)
function gameOver() {
    // hide the check button and display the again button
    el('.check').style.display = "none";
    el('.again').style.display = "inline-block";
    // display the secret number
    el('.number').textContent = secretNum;
    el('.number').style.width = "30rem";
}


// add event listener for the "check" button
el('.check').addEventListener( 'click', () => {
    // get the guess value, convert to number
    const GUESS = Number(el('.guess').value);
    // check guess
    if (GUESS < 1) {
        // if no guess made, or value lower than 1
        el('.message').textContent = "😵 Not a valid guess!";
    } else if (GUESS == secretNum) {
        el('.message').textContent = "🥳 Correct Number!";
        // change style on success
        el('body').style.backgroundColor = "#60b347";
        // execute game over
        gameOver();
        // update highscore if current score greater than highscore
        if (score > highscore) {
            highscore = score;
            el('.highscore').textContent = highscore;
        } 
    } else {
        // check if user hasn't already lost the game
        if (score > 1) {
            el('.message').textContent = (GUESS > secretNum) ? "📈 Too high!" : "📉 Too low!";
            // decrement the score and display new score
            decrementScore();
        } else {
            // this block executes if user loses the game
            // set score to zero
            decrementScore();
            el('.message').textContent = "😿 You lost the game!";
            // execute game over
            gameOver();
        }    
    }       
}); // click event listener for "check" button

el('.again').addEventListener('click', () => {

    // hide the secret number
    el('.number').textContent = "?";
    // recompute a new secret number
    secretNum = Math.trunc(Math.random()*20) + 1;
    // reset score
    score = 20;
    el('.score').textContent = score;
    el('.message').textContent = "Start guessing...."
    // reset the styles
    el('body').style.backgroundColor = "#222";
    el('.number').style.width = "15rem";
    el('.guess').value = "";
    // show the check button and hide the again button
    el('.check').style.display = "inline-block";
    el('.again').style.display = "none";
});