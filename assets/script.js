// HTML elements getting pulled for JS function
var startButton = document.getElementById("button");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timer = document.getElementById("timer")

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// Questions to be used for game
var startQuiz = () => {
console.log("hello world")

};

var questions = [
    {
        question : "What is the shorthand term for JavaScript?",  // Answer JS
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C",
    },{
        question : "How many else statements are allowed?",  // Answer Just one
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },{
        question : "What are the nouns of programming?",  // Answer variables
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B",
    },{
        question : "What copies an entire repo?", // Answer git clone
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C",
    },{
        question : "What does CSS Stand for?", // Answer Cascading Style Sheets
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A",
    },
];

// beginning the game with start button
startButton.addEventListener("click", startQuiz) 










