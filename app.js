// import functions and grab DOM elements
import { compareNumbers, inputResponse, guessCount } from './utils.js';

const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('user-input');
const guessHint = document.getElementById('guess-hint');
const guessDisplay = document.getElementById('guess-checker');
// initialize state
let guessesLeft = 4;
let realNumber = Math.ceil(Math.random() * 20);
// set event listeners to update state and DOM
guessButton.addEventListener('click', () =>{
    const inputNumber = Number(userInput.value);
    --guessesLeft;
    guessDisplay.textContent = guessCount(guessesLeft);
    guessHint.textContent = inputResponse(compareNumbers(inputNumber, realNumber));
    if (guessesLeft === 0 || compareNumbers(inputNumber, realNumber) === 0){
        guessButton.style.display = 'none';
        if (compareNumbers(inputNumber, realNumber) === 0){
            guessHint.textContent = 'You guessed correct!!';
        }
        else {
            guessHint.textContent = 'Out of guesses! Thanks for playing!';
        }
    }
    console.log(realNumber);
});