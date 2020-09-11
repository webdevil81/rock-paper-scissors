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

scoreBoard.appendChild(score);
scoreBoard.appendChild(roundResult);
container.insertBefore(scoreBoard, container.firstChild);


/*
function game() {
    
    let round = 0;
    while(round < 5) {
        let playerSelection = playerPlay;
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore}
Computer Score: ${computerScore}`);
        round++
}
    if(playerScore > computerScore) {
        console.log(`You win!`);
    } else if(playerScore < computerScore) {
        console.log(`You lose!`);
    } else {
        console.log(`You draw`);
    }
}


game();
*/
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
            computerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            playerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        }
    } else if(player === 'paper') {
        if(computer === 'paper') {
            roundResult.textContent = (`It's a tie ${player} and ${computer}`);
        }   else if(computer === 'scissors') {
            roundResult.textContent = (`You loose ${computer} beats ${player}`);
            computerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            playerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        }
    } else {
        if(computer === 'scissors') {
            roundResult.textContent = (`It's a tie ${player} and ${computer}`);
        }   else if(computer === 'rock') {
            roundResult.textContent = (`You loose ${computer} beats ${player}`);
            computerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        } else {
            roundResult.textContent = (`You win ${player} beats ${computer}`);
            playerScore++;
            score.textContent = (`${playerScore} vs ${computerScore}`);
        }
    }
}


/******************************************* 
* SCORE DIV *
*/



/*
function game() {
    
    let round = 0;
    while(round < 5) {
        let playerSelection = playerPlay;
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore}
Computer Score: ${computerScore}`);
        round++
}
    if(playerScore > computerScore) {
        console.log(`You win!`);
    } else if(playerScore < computerScore) {
        console.log(`You lose!`);
    } else {
        console.log(`You draw`);
    }
}


game();
*/