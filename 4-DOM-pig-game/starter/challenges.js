/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// Initializing global variables
let activePlayer, roundScore, playerScores, endScore, gameRun, lastEye;

// Setting to initial state
const init = () => {
  playerScores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  endScore = 30;
  gameRun = true;

  // Reseting DOM scores
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".dice").style.display = "display";

  // Reseting style active
  document
    .querySelector(".player-0-panel")
    .classList.remove("active", "winner");
  document
    .querySelector(".player-1-panel")
    .classList.remove("active", "winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
};
// Calling init
init(); // When loading the page
document.querySelector(".btn-new").addEventListener("click", init); // When "NEW GAME" button is clicked

const rollDice = () => {
  if (gameRun) {
    // Getting random number between 1 - 6 and adding to roundScore
    const randomEye = Math.floor(Math.random() * 6 + 1);

    // Changing dice img according to the random number
    document.querySelector(".dice").src = `dice-${randomEye}.png`;

    // If randomEye is 1, switch the player, else sumup the roundScore
    if (randomEye === 1 || (randomEye === 6 && lastEye === 6)) {
      roundScore = 0;
      document.getElementById(
        `current-${activePlayer}`
      ).textContent = roundScore;
      switchPlayer();
    } else {
      roundScore += randomEye;
      document.getElementById(
        `current-${activePlayer}`
      ).textContent = roundScore;
    }
    lastEye = randomEye;
  }
};
// Calling rollDice with click on "ROLL DICE"
document.querySelector(".btn-roll").addEventListener("click", rollDice);

const switchPlayer = () => {
  if (gameRun) {
    // Updating playerScore with roundScore
    playerScores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      playerScores[activePlayer];

    // Checking if wins
    if (playerScores[activePlayer] >= endScore) {
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.add("winner");
      document.getElementById(`name-${activePlayer}`).textContent = "winner";
      document.querySelector(".dice").style.display = "none";
      gameRun = false;
    } else {
      // Resetting roundScore
      roundScore = 0;
      document.getElementById(`current-${activePlayer}`).textContent = 0;

      // Changing activePlayer
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
    }
  }
};
// Calling swithPlayer
document.querySelector(".btn-hold").addEventListener("click", switchPlayer);
