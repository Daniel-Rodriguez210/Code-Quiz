// HTML elements getting pulled for JS function
var startButton = document.getElementById("button");
var timer = document.getElementById("timer")
var welcome = document.getElementById("welcome")
var body = document.body;

var secondsLeft = 60;


function startGame() {
question1()
gameTime()

};

function question1(){
    var h1El = document.createElement("h1");
    h1El.textContent = "What is the shorthand term for JavaScript?";
    body.appendChild(h1El);
    h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    startButton = "";
    welcome = "";

}

function gameTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left until game ends";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            leaderBoard();
        }
    }, 1000);
}


var questions = [
    {
        question: "What is the shorthand term for JavaScript?",  // Answer JS
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C",
    }, {
        question: "How many else statements are allowed?",  // Answer Just one
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B",
    }, {
        question: "What are the nouns of programming?",  // Answer variables
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B",
    }, {
        question: "What copies an entire repo?", // Answer git clone
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C",
    }, {
        question: "What does CSS Stand for?", // Answer Cascading Style Sheets
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        correct: "A",
    },
];


// beginning the game with start button
startButton.addEventListener("click", function() {
    startGame();
})  ;










