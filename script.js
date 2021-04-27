let randomNumber = Math.floor(Math.random() * 100) + 1;

//guesses, lastResult, lowOrHigh, guessField, guessSubmit

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

//functionality to button
guessSubmit.addEventListener('click', checkGuess);

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount==1){
        guesses.textContent = 'Previous Guesses: ';
    }
    guesses.textContent += userGuess + ' '; 
    

    if(userGuess==randomNumber){
        lastResult.textContent="Congratulations! You guessed the correct number!";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent=" ";
        startGameOver();
    } 
    else if(guessCount==10){
        lastResult.textContent="!!!Game over!!!"
        startGameOver();
    }
    else {
        lastResult.textContent="Wrong!"
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHigh.textContent = "You guess is too low!"
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = "Your guess is too high!"
        }
    }
    guessCount++;
    guessField.value=" ";
    guessField.focus();

    function startGameOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = "Start New Game!";
        document.body.append(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
    function resetGame(){
        guessCount = 1;

        const resetParas = document.querySelectorAll('.result p');
        for(let i =0; i<resetParas.length; i++){
            resetParas[i].textContent=" ";
        }

        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = " ";
        guessField.focus();

        lastResult.style.backgroundColor = "white";

        randomNumber = Math.floor(Math.random() * 100) + 1;

    }
}
