const choices = ["rock", "paper", "scissors"];

function game(){
  playRound();
}

function playRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
}




function playerChoice() {
  let humanChoice = prompt('rock, paper or scissors?');
  let input = prompt ('select rock, paper or scissors')
  while (input == null){
    input = promt (' select rock, paper or scissors')
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  if (check == true){
    console.log(input);
  }
}  

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)){
    return true;
}
{
  return false;
}


game();