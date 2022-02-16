'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guessNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
const scoreNumber = function (value) {
  document.querySelector('.score').textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please, insert a number!');
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      scoreNumber(score);
    } else {
      displayMessage('You lost the game!');
    }
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    guessNumber(guess);
    document.body.style.backgroundColor = '#60b347';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreNumber(score);
  displayMessage('Start guessing...');
  guessNumber('?');
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
});
