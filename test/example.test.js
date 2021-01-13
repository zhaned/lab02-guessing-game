// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers, guessCount, inputResponse } from '../utils.js';
const test = QUnit.test;

test('function should return 0 because the guess is equal', (expect) => {
    const expected = 0;
    const actual = compareNumbers(5, 5);

    expect.equal(actual, expected);
});

test('function should return -1 because the guess is less', (expect) => {
    const expected = -1;
    const actual = compareNumbers(3, 5);
    
    expect.equal(actual, expected);
});

test('function should return 1 because the guess is greater', (expect) => {
    const expected = 1;
    const actual = compareNumbers(6, 5);
    
    expect.equal(actual, expected);
});

test('returns a string with the guess amount left', (expect) => {
    const expected = 'Guesses left: 3';
    const actual = guessCount(3);
    
    expect.equal(actual, expected);
});

test('returns response based on the difference in user input and actual', (expect) => {
    const expected = 'Your guess was too high!'; // the response when guess is higher than actual
    const actual = inputResponse(1);
    
    expect.equal(actual, expected);
});

