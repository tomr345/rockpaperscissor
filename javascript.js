let userScore = 0;
let computerScore = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[getRandomInt(0, 2)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        // return "You Lose! Paper beats Rock";
        setResults("You Lose! Paper beats Rock", "red");
        computerScore++;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        // return "You Win! Rock beats Scissors!";
        setResults("You Win! Rock beats Scissors!", "green");
        userScore++;
    }
    
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        // return "You Win! Scissors beats Paper!";
        setResults("You Win! Scissors beats Paper!", "green");
        userScore++;
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        // return "You Lose! Rock beats Scissors!";
        setResults("You Lose! Rock beats Scissors!", "red");
        computerScore++;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        // return "You Lose! Scissors beats Paper!";
        setResults("You Lose! Scissors beats Paper!", "red");
        computerScore++;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        // return "You Win! Paper beats Rock!";
        setResults("You Win! Paper beats Rock!", "green");
        userScore++;
    }

    else {
        // return "It's a draw!"
        setResults("It's a draw!", "orange");
    }
}

function setResults(entry, colour) {
    const resultString = entry;
    const newColour = colour;

    const p = document.getElementById('results');
    p.textContent = resultString;
    p.style.color = newColour;    
}

function updateScore(winner) {
    const player = winner;
    const userLabel = document.getElementById('userLabel');
    const computerLabel = document.getElementById('computerLabel');
    
    if (winner == "user") {
        userScore++;
        userLabel.textContent = userScore;
    }
    else {
        computerScore++;
        computerLabel.textContent = computerScore;
    }
} 

function game() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            playRound(e.target.id, computerPlay());
        })
    })

    
    // for (let i = 0; i < 5; i++) {
    //     // const userInput = prompt('Choose Rock, Paper or Scissors: ');
    //     console.log(playRound(userInput, computerPlay()));
    // }
    // userScore = 0;
    // computerScore = 0;
}

game();

