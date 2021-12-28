const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem("mostRecentScore");

// if local storage is empty, initialize an empty array so we are not receiveing a null value for highScores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  // if there is something in the input it will enable the button
  saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
  // prevents form from automatically taking us to a new page
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);

  // sort scores from highest to lowest
  highScores.sort( (a, b) => b.score - a.score);

  highScores.splice(5);
  // saves the high scores even after a refresh
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
}