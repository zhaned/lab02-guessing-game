// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('user-input');
// initialize state
let guessesLeft = 4;
let realNumber = Math.ceil(Math.random() * 20);
// set event listeners to update state and DOM
guessButton.addEventListener('click', () =>{
    const inputNumber = Number(userInput.value);
    compareNumbers(inputNumber, realNumber);
    console.log(inputNumber, realNumber, guessesLeft);
});