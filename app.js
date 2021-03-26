const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const displayChoice = document.querySelector(".choice");

rockButton.addEventListener("click", () => {
  compareChoices(rockButton.value, computerChoice());
});

paperButton.addEventListener("click", () => {
  compareChoices(paperButton.value, computerChoice());
});

scissorsButton.addEventListener("click", () => {
  compareChoices(scissorsButton.value, computerChoice());
});

// Working on comparing user choice with random computer choice and to output win/lose/tie screen
// Right now, I have the ability to choose rock and display it on both the console and the DOCUMENT
// I'm thinking about just placing a bunch of &&/|| statements in the first if statement to just have one long line of "win" scenarios, "lose" scenarios, and "tie" scenarios
// "WIN" SCENARIOS
// rock vs scissors || paper vs rock || scissors vs paper
// "LOSE" SCENARIOS
// rock vs paper || paper vs scissors || scissors vs rock
// "TIE" SCENARIOS
// rock vs rock || paper vs paper || scissors vs scissors
function compareChoices(user, computer) {
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    displayChoice.textContent = `User: ${user} vs Computer: ${computer}... You win!`;
  } else if (
    (user === "rock" && computer === "paper") ||
    (user === "paper" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    displayChoice.textContent = `User: ${user} vs Computer: ${computer}... You lose...`;
  } else {
    displayChoice.textContent = `User: ${user} vs Computer: ${computer}... It's a tie!`;
  }
}

function computerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (random === 1) {
    choice = "rock";
  } else if (random === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}
