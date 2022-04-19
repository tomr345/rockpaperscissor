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
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors!";
    }
    
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper!";
    }

    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You Lose! Rock beats Scissors!";
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper!";
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock!";
    }

    else {
        return "It's a draw!"
    }
}

function game() {
    
}


