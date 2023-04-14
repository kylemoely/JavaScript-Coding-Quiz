// HTML elements
var startEl = document.querySelector("#QuizStart");
var titleEl = document.getElementById("Title");
var promptEl = document.getElementById("Prompt");
var highscoresEl = document.getElementById("scoresBtn");
var timeEl = document.getElementById("Timer");
var welcomes = document.querySelectorAll(".welcome");
var mainEl = document.getElementById("main");
var timeLeft = 0;
var answerEl

// Questions

var Q1 = ["What does HTML stand for?", "Hot-transfer mimicking losers", 
"Hyper-text markup lagnuage","Hot tamales muck less", "Heavy tonal makes losses"];

var Q2 = ["How do you select an HTML element by its class in CSS?", ".", "#", "~", "<p>"];

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
var questions = [Q1, Q2, Q3, Q4, Q5, Q6];
var qIndex = 0;


// Functions

function evalAnswer(event){
    if(event.target.className==="correct"){
        // display a correct signal and display a next question button
        console.log("correct");
    } else{
        // display a wrong signal, take ten seconds off the timer, and display the next question
        console.log("wrong");
    }
}

function changeQuestion(){
    var currentQ = questions[qIndex];
    promptEl.innerHTML = currentQ[0];
    for(x=1;x<5;x++){
        var NewAns = document.createElement("button");
        NewAns.innerHTML = currentQ[x];
        if(corrects.includes(NewAns.innerHTML)){
            NewAns.setAttribute("class", "correct");
        } else{
            NewAns.setAttribute("class", "wrong");
        }
        document.body.children[1].appendChild(NewAns);
        NewAns.addEventListener("click", evalAnswer);
    }
    qIndex++;
}

function startTimer(){
    var timerInterval = setInterval(function(){
    timeLeft--;
    timeEl.innerHTML = "Time: " + timeLeft;
    if(timeLeft===0){
        clearInterval(timerInterval);
    }
    }, 1000);
}

function startQuiz(){
    timeLeft = 120;
    timeEl.innerHTML = "Time: " + timeLeft;
    for(x=0;x<welcomes.length;x++){
        welcomes[x].style.display = "none";
    }
    changeQuestion();
    startTimer();
}



startEl.addEventListener("click", startQuiz);