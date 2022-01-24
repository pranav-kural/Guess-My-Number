'use strict';

// define the secret number
let secretNum = Math.trunc(Math.random()*20) + 1;

// TEST
document.querySelector('.number').textContent = secretNum;

