// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
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