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
        return "You Lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors!";
        userScore++;
    }
    
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper!";
        userScore++;
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You Lose! Rock beats Scissors!";
        computerScore++;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper!";
        computerScore++;
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock!";
        userScore++;
    }

    else {
        return "It's a draw!"
        userScore++;
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const userInput = prompt('Choose Rock, Paper or Scissors: ');
        console.log(playRound(userInput, computerPlay()));
    }
    userScore = 0;
    computerScore = 0;
}

game();

