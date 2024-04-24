'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage( '⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🍕 Correct Number!');
    displayNumber( secretNumber);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage( guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore ( score );
    } else {
      displayMessage( '💀 You lost the game!');
      displayScore ( 0 );
      document.querySelector('body').style.backgroundColor = '#963535';
      displayNumber( '💀');
    }
  }
  
 
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage( 'Start guessing...');
  displayScore ( score );
  displayNumber( '?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});




 
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💀 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#963535';
  //     document.querySelector('.number').textContent = '💀';
  //   }
    
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💀 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#963535';
  //     document.querySelector('.number').textContent = '💀';
  //   }
  // }
