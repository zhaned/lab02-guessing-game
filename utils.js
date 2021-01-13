export function compareNumbers(guess, correctNumber){
    if (guess < correctNumber){
        return -1;
    }
    else if (guess > correctNumber){
        return 1;
    }
    else {
        return 0;
    }
}

export function inputResponse(results){
    if (results === 0){
        return 'You did it! You guessed right!';
    }
    else if (results > 0){
        return 'Your guess was too high!';
    }
    else {
        return 'Your guess was too low!';
    }
}

export function guessCount(guessesLeft){
    let string = 'Guesses left: ';
    string += guessesLeft;
    return string;
}
