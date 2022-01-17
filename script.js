var quiz = [
    // This is at index 0
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    // This is at index 1
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    // This is at index 2
    {
        title: "String values must be enclosed within _______ when bekng assigned to variables.",
        choices: ["commas", "curly brackes", "quotes", "parenthesis"],
        answer: "curly brackets"
    },
    // This is at index 3
    {
        title: "Arrays in JavaSCript can be used to store_______. ",
        choices: ["nummbers and strings", "other arrays", "booleans", "all the above"],
        answer: "all the above"
    }
]
var timer = 60
var score = 0

// First we GRAB a reference (the element on the HTML page)
var startBtn = document.getElementById("start");
var titleContainer = document.getElementById('title-container');
var choicesContainer = document.getElementById('choices-container');
var timerContainer = document.getElementById('timer container');
var timer = document.getElementById("timer");
var question = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");
var container = document.getElementById("question-container");


// Second we attach an EVENT LISTENER to the element
startBtn.addEventListener('click', funtion() {
    startBtn.setAttribute('class', 'hidden')
    instructions.setAttribute("class", "hidden")
    displayTitleOne()
    displayTime(60)
    startTimer()
})
function displayTime(timeRemaining) {
    timerContainer.innerHTML = timeRemaining
}
function startTimer() {   // What is the function of this method(?)
    console.log("Starting Timer ...")
    var timeLeft = 60;
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
// Define our startQuiz method (function)
function startQuiz() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");
    titleContainer.textContent = quiz[0].title
    for (var i = 0; i < quiz[0].options.length; i++) {
        var choicesBtn = document.ceatedElement('button')
        optionsBtn
    }
    // We start a TIMER
    startTimer();

    // We unhide the questions container
    container.setAttribute("class", "");
    // Present the First Question
    nextQuestion();
    // Defining what the function does

}
function nextQuestion() {

    var currentQuestion = questions[0];    // We grab the First object in the questions Array
    console.log(currentQuestion);


    // We can also pull out each piece of data from the object
    var currentTitle = currentQuestion.title;  // questions[0].title
    console.log(currentTitle);

    // Add Question object content to DOM(Browser Window) --> Document Object Model





}


}


// Check users selectio and compares to the answer
function checkAnswer(choice) {
    // We grab the users choice

    // We grab the current questions answer
    var ans = questions[0].ans;
    // Compare (Conditional Statements)

    // IF users choices is correct --> what happens?
    if (choice == ans) {
        // We add to SCORE
        // Alert user that choice was correct
    } else {
        // IF users choice is incorrect
        // We subtract from score (optional)
        // Alert user that choice was Wrong
        // We subtract time from the TIMER
    }


}
