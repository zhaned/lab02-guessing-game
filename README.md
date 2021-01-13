# EDIT-THIS-README


1) Button
2) Numerical Input
3) Remaining guesses
4) how close they are
*5) reset button


1) DOM elements
2) Initialize state ('let')
    - Random Number
    - Remaining guesses: 4
3) event listener for button
    - On click
        - check guess against number
            -store user input in a variable ('number(input.value)')
        - VIEW:
            - Too high/low response
            - If equal, congratulate
                -disable input
        - VIEW: disable input if there's no guesses left, 
4) add event listener for reset button
    - On click
        - reset remaining guesses
        - get new random number
        - re-enable input
