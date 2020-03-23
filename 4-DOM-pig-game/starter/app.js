/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Setting to initial state
const init = () => {
  // Reseting scores
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  // Reseting style active
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
};

// Calling init
init(); // When loading the page
document.querySelector(".btn-new").addEventListener("click", init); // When "NEW GAME" button is clicked

const updateScore = () => {
  const randomEye = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".dice").src = `dice-${randomEye}.png`;
};

document.querySelector(".btn-roll").addEventListener("click", updateScore);
