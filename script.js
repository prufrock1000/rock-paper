const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
  playRound();
  for (let i = 0; i < 4; i++){
    playRound(i);
  }
  logWins();
}

function playRound(round) {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner (playerSelection,computerSelection);
winners.push(winner);
logRound(playerSelection,computerSelection,winner,round);
}




function playerChoice() {
  let input = prompt ('select rock, paper or scissors')
  while (input == null){
    input = prompt (' select rock, paper or scissors')
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false){
   input = prompt( 
    'select rock, paper or scissors: double check spelling, capitalisation does not matter'
  );
    while (input == null){
      input = prompt (' select rock, paper or scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input
} 


function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
  if (choiceP === choiceC){
    return 'Draw';
  } else if ((choiceP === 'scissors' && choiceC === 'paper') 
    || (choiceP === 'paper' && choiceC === 'rock')
    ||(choiceP === 'rock' && choiceC === 'scissors'))
    {
    return 'Player';
  } else {
    return ('Computer');
  }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) =>item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Draw').length;
    console.log('Results:');
    console.log('Player Wins', playerWins);
    console.log('Computer Wins', computerWins);
    console.log('Draw', ties)
}
function logRound(playerChoice, computerChoice,winner){
  console.log('Round:', logRound);
  console.log('Player choice:',playerChoice);
  console.log('Computer choice:', computerChoice);
  console.log(winner, 'Won the round');
}
game();