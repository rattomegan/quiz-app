const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('save-score-btn');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  // if there is something in the input it will enable the button
  saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
  console.log('clicked the save button');
  // prevents form from automatically taking us to a new page
  e.preventDefault();
}