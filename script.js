'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '🚫 You must enter a number';
  } else if (guess === secret) {
    setMessage('🎉 Correct number!');
    setNumber(secret);
    setBodyBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secret) {
    console.log(score);
    if (score > 1) {
      setMessage(guess > score ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('💥 You lost the game!');
      setScore(0);
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;

    setMessage('Start guessing...');
    setScore(score);
    setNumber('?');
    document.querySelector('.guess').value = '';
    setBodyBackgroundColor('#222');
  });
});
