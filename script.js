//creating variables to hold all characters 
var questions

// First we GRAB a reference (the element on the HTML page)
var startButton = document.getElementById("start");
var time = document.getElementById("timer");
console.log(startButton);

//quiz questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "String values must be enclosed within _______ when bekng assigned to variables.",
        choices: ["commas", "curly brackes", "quotes", "parenthesis"],
        answer: "curly brackets"
    },
    {
        title: "Arrays in JavaSCript can be used to store_______. ",
        choices: ["nummbers and strings", "other arrays", "booleans", "all the above"],
        answer: "all the above"
    }
]

// var startBtn = document.querySelector("#start");

// Second we attach an EVENT LISTENER to the element
startButton.addEventListener("click", startQuiz);


// Define our startQuiz method (function)
function startQuiz() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");

    // We start a TIMER
    startTimer();
    // Present the First Question

}

h1El.textContent = "This is a question"

function startTimer() {
    console.log("Starting Timer ...")
    var timeLeft = 100;
    var timer = setInterval(function () {
        timeLeft = timeLeft - 1;
        console.log(timeLeft);
        // Updating the data on the HTML page
        time.textContent = "Timer: " + timeLeft
        if (timeLeft <= 0) {
            console.log("Timer Ended");
            // Clear (End/Stop) Our Timer
            clearInterval(timer);
        }
    }, 1000);
}