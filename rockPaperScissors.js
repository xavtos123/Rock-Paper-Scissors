const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
 } else {
    console.log('Error! please choose correct selection')
  }
  
};
const getComputerChoice = () =>{ 
  const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors'
}
};
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === 'bomb') {
    if (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
      return 'Cheat code activated! CPU destroyed! Player 1 WINS!';
    }
} 
  if(userChoice === computerChoice){
    return 'This game is a TIE'
  }
if(userChoice === "paper") {
  if(computerChoice === "scissors"){
    return 'Better luck next time, CPU WINS!';
  } else {
    return 'Good Job! Player 1 WINS!'
  }
};
if (userChoice === "rock") {
  if(computerChoice === "paper"){
    return 'Better luck next time, CPU WINS!';
  } else {
    return 'Good Job! Player 1 WINS!'
  }
};
if (userChoice === "scissors") {
  if(computerChoice === "rock"){
    return 'Better luck next time, CPU WINS!';
  } else {
    return 'Good Job! Player 1 WINS!'
  }
  };
}
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You Threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};
playGame()
