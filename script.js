/* PSEUDOCODE 
Computer will randomly return a secret number between 1 - 10
Player 1 will be prompted to pick a number
Player 2 will be prompted to pick a number
both number will be compared against the computer's number
Ranking will be "exact", "close", and "miss"
    exact = correct number from computer
    close = off by 1
    miss = off by 2
        exact > close > miss
Award 1 point to player that wins that round
Allow for 5 rounds */

function computerRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 11);
    return randomNumber;
}

// console.log(computerRandomNumber());

function playerOneGuess() {
    let answer = Number(prompt("Player 1: Pick a number between 0 and 10", "Enter here"));
    if (answer <= 10 && answer >= 0){
        return answer;
    } else {
        alert ("This is not a valid input");
        return playerOneGuess();
    }
}

function playerTwoGuess() {
    let answer = Number(prompt("Player 2: Pick a number between 0 and 10", "Enter here"));
    if (answer <= 10 && answer >= 0){
        return answer;
    } else {
        alert ("This is not a valid input");
        return playerTwoGuess();
    }
}

// console.log(playerOneGuess());
// console.log(playerTwoGuess());

function guessResult(computerGuess, playerGuess) {
    let scoreResult = Math.abs(computerGuess - playerGuess);
    return scoreResult;
}

// console.log(guessResult(computerRandomNumber(),playerOneGuess()));

let playerOneScore = 0;
let playerTwoScore = 0;

function playRound(computerNumber, playerOneNumber, playerTwoNumber) {
    if(guessResult(computerNumber, playerOneNumber) === 0 && guessResult(computerNumber, playerTwoNumber) === 0){
        playerOneScore++;
        playerTwoScore++;
        console.log("It's a tie. Both guesses were exact")
    } else if(guessResult(computerNumber, playerOneNumber) === 0){
        playerOneScore++;
        console.log("Player One wins")
    } else if(guessResult(computerNumber, playerTwoNumber) === 0){
        playerTwoScore++;
        console.log("Player Two wins")
    } else if(guessResult(computerNumber, playerOneNumber) === 1 && guessResult(computerNumber, playerTwoNumber) === 1){
        playerOneScore++;
        playerTwoScore++;
        console.log("It's a tie. Both guesses were off by 1.")
    } else if(guessResult(computerNumber, playerOneNumber) === 1){
        playerOneScore++;
        console.log("Player One wins")
    } else if(guessResult(computerNumber, playerTwoNumber) === 1){
        playerTwoScore++;
        console.log("Player Two wins")
    } else {
        console.log("No one wins. Both guesses were off by 2 or more")
    }
}

/* console.log(playRound(5,playerOneGuess(), playerTwoGuess()));
console.log(playerOneScore);
console.log(playerTwoScore); */

function playGame(){

    playRound(computerRandomNumber(), playerOneGuess(), playerTwoGuess());
    playRound(computerRandomNumber(), playerOneGuess(), playerTwoGuess());
    playRound(computerRandomNumber(), playerOneGuess(), playerTwoGuess());
    playRound(computerRandomNumber(), playerOneGuess(), playerTwoGuess());
    playRound(computerRandomNumber(), playerOneGuess(), playerTwoGuess());

    if(playerOneScore === playerTwoScore){
        console.log("It's a tie!")
    } else if (playerOneScore > playerTwoScore){
        console.log("Player One wins! " + playerOneScore + " out of 5 rounds")
    } else {
        console.log("Player Two wins! " + playerTwoScore + " out of 5 rounds")
    }

}

playGame();