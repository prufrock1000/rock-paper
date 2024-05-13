const choices = ["rock", "paper", "scissors"];

function game(){
  playRound();
}

function playRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner (playerSelection,computerSelection);
console.log(computerSelection)
console.log(playerSelection)
console.log(winner)
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
    return 'Its a Draw!';
  } else if ((choiceP === 'scissors' && choiceC === 'paper') 
    || (choiceP === 'paper' && choiceC === 'rock')
    ||(choiceP === 'rock' && choiceC === 'scissors')){
    return 'Player wins the round!';
  }else {
    return ('Computer wins the round!')
  }
}


game();