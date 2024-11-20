let randomeNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Event listener for guessing
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0.');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over! The random number was ${randomeNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check the user's guess
function checkGuess(guess) {
  if (guess === randomeNumber) {
    displayMessage('Congratulations! Your guess is correct!');
    endGame();
  } else if (guess < randomeNumber) {
    displayMessage('The number is higher.');
  } else {
    displayMessage('The number is lower.');
  }
}

// Function to display guesses and remaining attempts
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `Remaining guesses: ${11 - numGuess}`;
}

// Function to display messages
function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

// Function to handle end-of-game logic
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  const newGameButton = document.createElement('button');
  newGameButton.id = 'newGame';
  newGameButton.textContent = 'Start New Game';
  startOver.appendChild(newGameButton);
  playGame = false;

  // Add event listener to the new game button
  newGameButton.addEventListener('click', function () {
    newGame();
  });
}

// Function to start a new game
function newGame() {
  randomeNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = 'Remaining guesses: 10';
  lowOrhi.innerHTML = '';
  userInput.removeAttribute('disabled');
  startOver.innerHTML = ''; // Remove the new game button
  playGame = true;
}