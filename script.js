const choices = ["rock", "paper", "scissors"];

function game(){
  playRound();
}

function playRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
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
} 


function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}


game();