console.log('Hello World!')

const items =  ['Rock','Paper','Scissors']

function getComputerChoice(items) {
    const random = Math.floor(Math.random()*items.length);
  return items[random];
    
}
 let getHumanChoice =  prompt ('Rock Paper or Scissors?')

 