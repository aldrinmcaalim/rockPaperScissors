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
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    displayChoice.textContent = `${user} vs. ${computer}... You win!`;
  } else if (
    (user === "Rock" && computer === "Paper") ||
    (user === "Paper" && computer === "Scissors") ||
    (user === "Scissors" && computer === "Rock")
  ) {
    displayChoice.textContent = `${user} vs. ${computer}... You lose...`;
  } else {
    displayChoice.textContent = `${user} vs. ${computer}... It's a tie!`;
  }
}

function computerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (random === 1) {
    choice = "Rock";
  } else if (random === 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}
