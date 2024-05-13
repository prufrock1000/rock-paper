
const choices = ["rock", "paper", "scissors"];

let humanScore = 0
let computerScore = 0
let turns = 0

const playRound()

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
let humanChoice = prompt('rock, paper or scissors?');

}
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){

  if (humanChoice === computerChoice){
    console.log('Draw Game! Both' + `${humanChoice}`)
  }
  if (humanChoice = 'paper', computerChoice = 'rock'){
    console.log('Player wins! Paper beats Rock')
    if (humanChoice = 'scissors')
  }
}