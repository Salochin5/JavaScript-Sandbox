/* 
GAME FUNCTION
    - Player must guess a number between  a min and max
    - PLayer get a certain amoun  t of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if they loose
    - Let the player choose to play again.
*/

// Game values
let min = 15,
    max = 25,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event Listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if Won
    if (guess === winningNum) {
        // Game Over Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

        // Change Button.


    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game Over - Lost
            gameOver(false, `Game Over, YOU LOST! The correct number was ${winningNum}`);

        } else {
            // Game Continues - answer wrong
            // Change Border Color
            guessInput.style.borderColor = 'red';
            // Clear Input and focus
            guessInput.value = '';
            guessInput.focus();
            // Tell User its wrong
            setMessage(`Failed, You have ${guessesLeft} attempts remaining`, 'red');
        }
    }
});

// Game Over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set Text Color
    message.style.color = color;
    // Set Message
    setMessage(msg);

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
    guessInput.focus();

}

// Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}