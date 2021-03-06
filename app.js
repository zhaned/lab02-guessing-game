import { compareNumbers, inputResponse, guessCount } from './utils.js';

const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('user-input');
const guessHint = document.getElementById('guess-hint');
const guessDisplay = document.getElementById('guess-checker');
const restartButton = document.getElementById('restart-button');

let guessesLeft = 4;
let realNumber = Math.ceil(Math.random() * 20);

guessButton.addEventListener('click', () =>{
    const inputNumber = Number(userInput.value);

    --guessesLeft;
    guessDisplay.textContent = guessCount(guessesLeft);
    guessHint.textContent = inputResponse(compareNumbers(inputNumber, realNumber));

    if (guessesLeft === 0 || compareNumbers(inputNumber, realNumber) === 0){
        guessButton.style.display = 'none';
        if (compareNumbers(inputNumber, realNumber) === 0){
            guessHint.textContent = 'You guessed correct!! Thanks for playing!';
            restartButton.style.display = 'flex';
        }
        else {
            guessHint.textContent = 'Out of guesses! Thanks for playing!';
            restartButton.style.display = 'flex';
        }
    }
});
