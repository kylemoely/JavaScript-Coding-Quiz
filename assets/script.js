var startEl = document.querySelector("#QuizStart");
var titleEl = document.getElementById("Title");
var promptEl = document.getElementById("Prompt");
var highscoresEl = document.getElementById("scoresBtn");
var timeEl = document.getElementById("Timer");


function startQuiz(){
    var timeLeft = 120
    timeEl.innerHTML = "Time: " + timeLeft;
}


startEl.addEventListener("click", startQuiz);