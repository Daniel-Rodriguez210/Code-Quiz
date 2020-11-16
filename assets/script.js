// HTML elements getting pulled for JS function
var startButton = document.getElementById("button");
var timer = document.getElementById("timer")
var welcome = document.getElementById("welcome")
var scores = document.getElementById("scores")
var body = document.body;
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')

// Variables created for usage throughout js code
var secondsLeft = 60;
document.getElementById("question-container").style.display = "none";
var currentQuestionIndex = 0;
var score = 0;
var incorrectAnswerTimePenalty = 15;
var answerList = document.createElement("ul");
var timerInterval = 0;

 
// this function is beginning of the quiz it is triggered by the user pressing the start button and calls the gameTime function
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

// this function is looping through the questions array and checking the answers the user submits and verifying if they're correct. 

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

// this function keeps track of the clock for the quiz. If the user misses a question they're penalized, and it also calls the render function for continued gameplay or ends the game once the all questions answered

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

// This function is the last page for the quiz where the user sees their score and can place their initials into the user input. 

function endQuiz() {
    questionEl.innerHTML = "";
    timer.innerHTML = "";

    var newHeading = document.createElement("h1");
    newHeading.setAttribute("id", "createH1");
    newHeading.textContent = "All Done!"

    questionEl.appendChild(newHeading);

    var newParagraph = document.createElement("p");
    newParagraph.setAttribute("id", "createP");

    questionEl.appendChild(newParagraph)

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var secondParagraph = document.createElement("p");
        clearInterval(timerInterval);
        newParagraph.textContent = "Your final score is: " + timeRemaining;

        questionEl.appendChild(secondParagraph)
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionEl.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionEl.appendChild(createInput);

    var createSubmitButton = document.createElement("button");
    createSubmitButton.setAttribute("type", "submit");
    createSubmitButton.setAttribute("id", "Submit");
    createSubmitButton.textContent = "Submit";

    questionEl.appendChild(createSubmitButton);

    // Event listener to capture initials and local storage for initials and score
    createSubmitButton.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("Please Input Your Initials!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var leaderboard = localStorage.getItem("leaderboard");
            if (leaderboard === null) {
                leaderboard = [];
            } else {
                leaderboard = JSON.parse(leaderboard);
            }
            leaderboard.push(finalScore);
            var newScore = JSON.stringify(leaderboard);
            localStorage.setItem("leaderboard", newScore);
            
            window.location.replace("index.html");
        }
    });

}



//Questions array for the quiz game
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











