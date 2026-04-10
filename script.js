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
    let answer = prompt("Player 1: Pick a number between 0 and 10", "Enter here");
    if (answer <= 10 && answer >= 0){
        return answer;
    } else {
        alert ("This is not a valid input");
        return playerOneGuess();
    }
}

function playerTwoGuess() {
    let answer = prompt("Player 2: Pick a number between 0 and 10", "Enter here");
    if (answer <= 10 && answer >= 0){
        return answer;
    } else {
        alert ("This is not a valid input");
        return playerTwoGuess();
    }
}

// console.log(playerOneGuess());
// console.log(playerTwoGuess());
