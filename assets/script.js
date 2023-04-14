// HTML elements
var startEl = document.querySelector("#QuizStart");
var titleEl = document.getElementById("Title");
var promptEl = document.getElementById("Prompt");
var highscoresEl = document.getElementById("scoresBtn");
var timeEl = document.getElementById("Timer");
var welcomes = document.querySelectorAll(".welcome");
var mainEl = document.getElementById("main");

// Questions

var Q1 = ["What does HTML stand for?", "Hyper-text markup lagnuage",
 "Hot-transfer mimicking losers", "Hot tamales muck less", "Heavy tonal makes losses"];

var Q2 = ["How do you select an HTML element by its class in CSS?", ".", "#", "~", "<p>"];

var Q3 = ["What does the .push() method return?","The length of a new array","A new string",
"A new array","The length of the HTML document"];

var Q4 = ["What array method would you use to delete the last item in an array?",".pop()",
".querySelectorAll()",".getElementById()",".push()"];

var Q5 = ["What CSS property do I need to assign flexbox properties to a container?", 
"display:flex","flex:yes","visibility:flex","make:flexbox"];

var Q6 = ["Which of the following attributes assigns a hyperlink to an HTML element?","href","class","id","data"];
 

var questions = [Q1, Q2, Q3, Q4, Q5, Q6];
var qIndex = 0;


// Functions

function changeQuestion(){
    var currentQ = questions[qIndex];
    promptEl.innerHTML = currentQ[0];
    for(x=1;x<5;x++){
        var NewAns = document.createElement("button");
        NewAns.innerHTML = currentQ[x];
        document.body.children[1].appendChild(NewAns);
    }
}

// function changeQuestion(){
//     currentQ = questions[qIndex];
//     promptEl.innerHTML = currentQ.Question;
//     // Ans1 = document.createElement("button");
//     // Ans1.innerHTML = questions[qIndex].Correct;
//     // document.body.children[1].appendChild(Ans1);
//     for(x=1;x<5;x++){
//         NewAns = document.createElement("button");
//         NewAns.innerHTML = currentQ[x];
//         console.log(currentQ)
//         document.body.children[1].appendChild(NewAns);
//     }
    
// }

function startQuiz(){
    var timeLeft = 120
    timeEl.innerHTML = "Time: " + timeLeft;
    for(x=0;x<welcomes.length;x++){
        welcomes[x].style.display = "none";
    }
    changeQuestion();
}


startEl.addEventListener("click", startQuiz);