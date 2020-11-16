// HTML elements getting pulled for JS function
var startButton = document.getElementById("button");
var timer = document.getElementById("timer")
var welcome = document.getElementById("welcome")
var scores = document.getElementById("scores")
var body = document.body;
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')


var secondsLeft = 60;
document.getElementById("question-container").style.display = "none";
var currentQuestionIndex = 0;
var score = 0;
var incorrectAnswerTimePenalty = 15;
var answerList = document.createElement("ul")

function startGame() {
gameTime()
};

function render(currentQuestionIndex){
    document.getElementById("button").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("question-container").style.display = "inline-grid";
    questionEl.innerHTML = ""
    answerList.innerHTML = "";
//this is gonna be the loop to set the quesitons
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[currentQuestionIndex].name;
        var answerChoices = questions[currentQuestionIndex].choices;
        questionEl.textContent = userQuestion;
    }

    answerChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionEl.appendChild(answerList);
        answerList.appendChild(listItem);
        listItem.addEventListener("click", (answerCheck));
    })

}

function answerCheck(event) {
    var main = event.target;

    if (main.matches("li")) {
        var createDiv = document.createElement("div");
        if (main.textContent === questions[currentQuestionIndex].correct) {
            score++;
            createDiv.textContent = "Correct!" ;
            
        } else {
            secondsLeft = secondsLeft - incorrectAnswerTimePenalty;
            createDiv.textContent = "Wrong!" ;
        }
        
    }
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        createDiv.textContent = "You Finished!";
    } else {
        render(currentQuestionIndex);
    }
    questionEl.appendChild(createDiv);
};

function endQuiz() {

}

function gameTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left until game ends";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
            timer.textContent = "Game Time Ended"
        }
    }, 1000);
    render(currentQuestionIndex);
};



var questions = [
    {
        name: "What is the shorthand term for JavaScript?",  // Answer JS
        choices: ["CSS", "HTML", "JS", "C++"],
        correct: "JS"
    }, {
        name: "How many else statements are allowed?",  // Answer Just one
        choices: ["One", "Infinite", "None", "Three"],
        correct: "One"
    }, {
        name: "What are the nouns of programming?",  // Answer variables
        choices: ["Strings", "Variables", "Objects", "Booleans"],
        correct: "Variables"
    }, {
        name: "What copies an entire repo?", // Answer git clone
        choices: ["Git Clone", "Git Push", "Git Add", "Git Commit"],
        correct: "Git Clone"
    }, {
        name: "What does CSS Stand for?", // Answer Cascading Style Sheets
        choices: ["Clear Script Stature", "Creepy Stats Signals", "Java Script", "Cascading Style Sheets"],
        correct: "Cascading Style Sheets"
    },
];




// beginning the game with start button
startButton.addEventListener("click", function() {
    startGame();
})  ;











