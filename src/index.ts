function generateRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min )) + min;
}

function getComputerChoice(): string {

  let choice = "rock";

  let randomNum = generateRandom(1, 4);

  switch(randomNum) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice="scissors"
      break;
    case 3:
      choice="paper";
      break;
    default:
      console.log("Error");
      break;
  }
  return choice;

}

function playRound(computerChoice: string, playerChoice: string): string {
  if(computerChoice===playerChoice) {
    return "tie";
  }else if(computerChoice==="rock"&&playerChoice==="scissors") {
    return "You lose. Rock beats scissors";
  }else if(computerChoice==="paper"&&playerChoice==="rock") {
    return "You lose. Paper beats rock";
  }else if(computerChoice==="scissors"&&playerChoice==="paper"){
    return "You lose. Scissors beats paper";
  }else{
    return "You win";
  }

  return "error";
}

function game() {
  let playerChoice = "rock";
  for(let i = 0; i<5; i++){
    playerChoice = prompt("Chose rock, paper or scissors");
    console.log(playRound(getComputerChoice(), playerChoice.toLowerCase()));
  }
}

game();

