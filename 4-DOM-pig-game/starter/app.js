/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let activePlayer, roundScore, playerScores, endScore, gameRun;

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
    if (randomEye === 1) {
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
