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

function computerPlay() {
    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/******************************************* 
* PLAYER CHOICE *
*/

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
    let player = playerSelection;
    let computer = computerSelection;

   
roundResult.textContent = 'You win!';
     
    if(player === 'rock') {
        if(computer === 'rock') {
            roundResult.textContent = (`It's a tie ${player} and ${computer}`);
        } else if(computer === 'paper') {
            roundResult.textContent = (`You loose ${computer} beats ${player}`);
            ++computerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (computerScore === 5) {finalScore();}
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            ++playerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (playerScore === 5) {finalScore();}
        }
    } else if(player === 'paper') {
        if(computer === 'paper') {
            roundResult.textContent = (`It's a tie ${player} and ${computer}`);
        }   else if(computer === 'scissors') {
            roundResult.textContent = (`You loose ${computer} beats ${player}`);
            ++computerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (computerScore === 5) {finalScore();}
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            ++playerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (playerScore === 5) {finalScore();}
        }
    } else {
        if(computer === 'scissors') {
            roundResult.textContent = (`It's a tie ${player} and ${computer}`);
        }   else if(computer === 'rock') {
            roundResult.textContent = (`You loose ${computer} beats ${player}`);
            ++computerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (computerScore === 5) {finalScore();}
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            ++playerScore;
            score.textContent = (`${playerScore} vs ${computerScore}`);
            if (playerScore === 5) {finalScore();}
        }
    }
}

