const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

// Enable the save button only if username is not empty
username.addEventListener('input', () => {
  saveScoreBtn.disabled = !username.value.trim();
});

function saveHighScore(event) {
  event.preventDefault();
  const usernameValue = username.value.trim();

  if (!usernameValue) return;

  // Example: Save score logic (replace with your own implementation)
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const mostRecentScore = localStorage.getItem('mostRecentScore');

  const newScore = {
    score: mostRecentScore,
    name: usernameValue
  };

  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5); // Keep top 5

  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Redirect to home or scores page
  window.location.assign('/');
}
