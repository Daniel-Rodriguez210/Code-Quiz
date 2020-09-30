// HTML elements getting pulled for JS function
document.getElementById("button").onclick = function() {beginQuiz();}
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

// Questions to be used for game

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







