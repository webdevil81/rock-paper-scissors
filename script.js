/******************************************* 
* SCORE DIV *
*/

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container')

const scoreBoard = document.createElement('div')
scoreBoard.style.border = '5px solid black';

const score = document.createElement('h3');
score.textContent = (`${playerScore} vs ${computerScore}`);

const roundResult = document.createElement('p');
const finalResult = document.createElement('h1');

scoreBoard.appendChild(score);
scoreBoard.appendChild(roundResult);
container.insertBefore(scoreBoard, container.firstChild);

function finalScore() {
    scoreBoard.removeChild(score);
    scoreBoard.removeChild(roundResult);
    if (playerScore > computerScore) {
        finalResult.textContent = `You win! 5 vs ${computerScore}`;
        scoreBoard.appendChild(finalResult);
    } else {
        finalResult.textContent = `You loose! 5 vs ${playerScore}`;
        scoreBoard.appendChild(finalResult);
    }
}

/******************************************* 
* COMPUTER CHOICE *
*/
let computerChoice;

function computerPlay() {
    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/******************************************* 
* PLAYER CHOICE *
*/

let playerChoice;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', play));

function play(e) {
    playRound(e.target.className);
}

/******************************************* 
* PLAY SINGLE ROUND *
*/

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();
    
    playerChoice = playerSelection;
    computerChoice = computerSelection;
     
    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            drawRound();
        } else if(computerSelection === 'paper') {
            computerWinRound();
        } else {
            playerWinRound();
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'paper') {
            drawRound();
        }   else if(computerSelection === 'scissors') {
            computerWinRound();
        } else {
            playerWinRound();
        }
    } else {
        if(computerSelection === 'scissors') {
            drawRound();
        }   else if(computerSelection === 'rock') {
            computerWinRound();
        } else {
            playerWinRound();
        }
    }
}

function playerWinRound() {
    roundResult.textContent = `You win ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    score.textContent = `${playerScore} vs ${computerScore}`;
    if (playerScore === 5) {finalScore();}
}

function computerWinRound() {
    roundResult.textContent = `You loose ${computerChoice} beats ${playerChoice}`;
    computerScore++;
    score.textContent = `${playerScore} vs ${computerScore}`;
    if (computerScore === 5) {finalScore();}
}

function drawRound() {
    roundResult.textContent = `It's a tie ${playerChoice} and ${computerChoice}`;
}