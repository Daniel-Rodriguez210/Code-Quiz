// HTML elements getting pulled for JS function
var startButton = document.getElementById("button");
var timer = document.getElementById("timer")
var welcome = document.getElementById("welcome")
var scores = document.getElementById("scores")
var body = document.body;
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

var secondsLeft = 60;
document.getElementById("question-container").style.display = "none";

function startGame() {
questionStart()
gameTime()

};

function questionStart(){
    document.getElementById("button").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("question-container").style.display = "inline-grid";
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

function leaderBoard() {

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

for (var i = 0; i < questions.length; i++) {
    //this is gonna be the loop to randomize the quesitons
    questions[Math.floor(Math.random() * questions.length)];
}


// beginning the game with start button
startButton.addEventListener("click", function() {
    startGame();
})  ;




// code for storing the user's initials to the leader board
 var initials = localStorage.getItem("initials");
 localStorage.setItem("initials", initials);







