// HTML elements
var startEl = document.querySelector("#QuizStart");
var titleEl = document.getElementById("Title");
var promptEl = document.getElementById("Prompt");
var highscoresEl = document.getElementById("scoresBtn");
var timeEl = document.getElementById("Timer");
var welcomes = document.querySelectorAll(".welcome");
var mainEl = document.getElementById("main");
var timeLeft = 0;
var nextEl = document.getElementById("Next");
var answers = document.querySelectorAll(".answer");
var quizOver = false;

// Questions

var Q1 = ["What does HTML stand for?", "Hot-transfer mimicking losers", 
"Hyper-text markup lagnuage","Hot tamales muck less", "Heavy tonal makes losses"];

var Q2 = ["How do you select an HTML element by its class in CSS?", ".", "#", "~", "&lt;p&gt;"];

var Q3 = ["What does the .push() method return?","The length of a new array","A new string",
"A new array","The length of the HTML document"];

var Q4 = ["What array method would you use to delete the last item in an array?",
".querySelectorAll()",".getElementById()",".push()",".pop()"];

var Q5 = ["What CSS property do I need to assign flexbox properties to a container?", 
"flex:yes","visibility:flex","display:flex","make:flexbox"];

var Q6 = ["Which of the following attributes assigns a hyperlink to an HTML element?","class","href","id","data"];

var Q7 = ["What does CSS stand for?", "Cascading Style Sheets", "Counter-Strike: Source", 
"Cuando sin sal", "Computer Says So"]
 
var corrects = ["Hyper-text markup lagnuage", ".", "The length of a new array", ".pop()", "display:flex", "href", "Cascading Style Sheets",]
var questions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7];
var qIndex = 0;


// Functions

function reset(){
    var scorecards = document.querySelectorAll(".scorecard");
    for(x=0;x<scorecards.length;x++){
        scorecards[x].remove();
    }
    titleEl.innerHTML = "Coding Quiz Challenge";
    titleEl.style.display = "block";
    promptEl.innerHTML = "Try to answer the following code-related questions.<br>Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    promptEl.style.display = "block";
    startEl.style.display = "block";
    highscoresEl.style.display = "block";
    highscoresEl.addEventListener("click", showScores);
    startEl.addEventListener("click", startQuiz);
    nextEl.innerHTML = "Next Question";
    nextEl.removeEventListener("click", leaveQuiz);
    nextEl.addEventListener("click", changeQuestion);
    quizOver = false;
    timeLeft = 0;
    qIndex = 0;
}

function clearHighScores(){
    localStorage.clear();
    var scorecards = document.querySelectorAll(".scorecard");
    for(x=0;x<scorecards.length-1;x++){
        scorecards[x].remove();
    }
}

function showScores(){
    // hide all main elements
    if(document.querySelector("form")){
        document.querySelector("form").remove();
    }
    promptEl.style.display = "none";
    startEl.style.display = "none";
    // prompt text High Scores
    titleEl.innerHTML = "High Scores";
    
    // for each item in array of keys
    if(localStorage.length>0){
        // set variable for array of local storage keys
        var highScores = Object.keys(localStorage);
        for(x=0;x<highScores.length;x++){
            // create score div
            var score = document.createElement("div");
            score.className = "scorecard";
            // create name div
            var name = document.createElement("div");
            // create number div
            var number = document.createElement("div");
            // score div styling flexbox justify space between width 300px alignitems center
            score.setAttribute("style", "display:flex; margin-bottom:10px; height: 40px; justify-content:space-between; align-items:center; width:300px; background-color:rgba(156, 156, 156, 0.596);")
            // name div styling
            name.setAttribute("style", "font-size:20px; margin: 10px;");
            // number div styling
            number.setAttribute("style", "font-size:25px; margin: 10px;");
            // append score div to main
            mainEl.appendChild(score);
            // append name and number divs to score div
            score.appendChild(name);
            score.appendChild(number);
            // name div html = localstorage[x]
            name.innerHTML = highScores[x];
            // number div html = localstorage.getitem[x]
            number.innerHTML = localStorage.getItem(highScores[x]);
        }
    }
    var buttons = document.createElement("div");
    buttons.setAttribute("style", "display:flex; justify-content:space-around; align-items:center; width: 300px;")
    var goBack = document.createElement("button");
    goBack.innerHTML = "Go Back";
    goBack.addEventListener("click", reset);
    mainEl.appendChild(buttons);
    buttons.appendChild(goBack);
    var clearScores = document.createElement("button");
    clearScores.innerHTML = "Clear High Scores";
    buttons.appendChild(clearScores);
    buttons.className = "scorecard";
    clearScores.addEventListener("click", clearHighScores);
        

}

function saveScore(event){
    event.preventDefault();
    var inputEl = document.querySelector("input");
    localStorage.setItem(inputEl.value, timeLeft);
    showScores();
}

function leaveQuiz(){
    // Hide answers
    nextEl.style.display = "none";
    for(x=0;x<4;x++){
        answers[x].setAttribute("style", "display:none;")
    }
    // Create input box
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style = "width:150px;";
    // show title
    titleEl.style.display = "block";
    // title says All Done!
    titleEl.innerHTML = "All Done!";
    // Prompt says Your score is timeleft
    promptEl.innerHTML = "Your score is " + timeLeft;
    // Create flexbox div
    var formEl = document.createElement("form");
    formEl.style = "display:flex; justify-content:space-between; width:420px; align-items:center;";
    mainEl.appendChild(formEl);
    // Add Enter initials div, input box, and submit button
    var textEl = document.createElement("div");
    textEl.innerHTML = "Enter initials:";
    textEl.style = "font-size:25px;";
    formEl.appendChild(textEl);
    formEl.appendChild(newInput);
    var submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit";
    formEl.appendChild(submitBtn);
    // add event listener to submit form to saveScore
    formEl.addEventListener("submit", saveScore);
}

function endQuiz(){
    shownextButton();
    nextEl.innerHTML = "End Quiz -->";
    nextEl.removeEventListener("click", changeQuestion);
    nextEl.addEventListener("click", leaveQuiz);
}
function shownextButton(){
    nextEl.setAttribute("style", "display:block;")
}

function hidenextButton(){
    nextEl.setAttribute("style", "display:none;");
}

function evalAnswer(event){
    var targ = event.target;
    var buttons = document.querySelectorAll("button");
    if(targ.className==="correct"){
        // display a correct signal and display a next question button
        targ.setAttribute("style", "background-color: green; text-decoration:underline; text-align: center;");
        targ.innerHTML = "Correct!";
        } else{
        // display a wrong signal, take ten seconds off the timer, and display the next question button
        targ.setAttribute("style", "background-color: red; text-decoration:underline; text-align: center;");
        targ.innerHTML = "Wrong.";
        document.querySelector(".correct").setAttribute("style", "background-color:green; text-decoration:underline;")
        timeLeft-=10;
    }
    for(x=0;x<buttons.length;x++){
            buttons[x].removeEventListener("click", evalAnswer);
    }
    if(qIndex===questions.length){
        quizOver = true;
        endQuiz();
    } else{
        shownextButton();
    }
}

function changeQuestion(){
    for(x=0;x<4;x++){
        answers[x].setAttribute("style", "display:block; background-color:  rgb(74, 17, 128); min-width:250px; text-align:left;")
    }
    hidenextButton();

    var currentQ = questions[qIndex];
    promptEl.innerHTML = currentQ[0];
    for(x=0;x<answers.length;x++){
        answers[x].innerHTML=  currentQ[x+1];
        if(corrects.includes(currentQ[x+1])){
            answers[x].setAttribute("class", "correct");
        } else{
            answers[x].setAttribute("class", "wrong");
        }
        answers[x].addEventListener("click", evalAnswer);
    }
    qIndex++;
}

function startTimer(){
    var timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.innerHTML = "Time: " + timeLeft;
    if(timeLeft<=0){
        clearInterval(timerInterval);
        timeLeft = 0;
        // end quiz and time's up message
        for(x=0;x<4;x++){
            answers[x].setAttribute("style", "display:none;")
        }
        promptEl.innerHTML = "Oops! Time's up!";
        endQuiz();
    }
    if(quizOver===true){
        clearInterval(timerInterval);
    }
    }, 1000);
}

function startQuiz(){
    timeLeft = 120;
    highscoresEl.style.display = "none";
    timeEl.innerHTML = "Time: " + timeLeft;
    for(x=0;x<welcomes.length;x++){
        welcomes[x].style.display = "none";
    }
    changeQuestion();
    startTimer();
}


highscoresEl.addEventListener("click", showScores);
startEl.addEventListener("click", startQuiz);
nextEl.addEventListener("click", changeQuestion);