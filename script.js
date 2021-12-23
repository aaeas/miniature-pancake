// First we GRAB a reference (the element on the HTML page)
var startButton = document.getElementById("start");
var time = document.getElementById("timer");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var question = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");


//quiz questions --> Beginning of using DATA (Database)  Arrays are zero indexed
var questions = [
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

// var startBtn = document.querySelector("#start");

// Second we attach an EVENT LISTENER to the element
startButton.addEventListener("click", startQuiz);
nextBtnButton.addEventListener("click," nextQuestion);



// Define our startQuiz method (function)
function startQuiz() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");

    // We start a TIMER
    startTimer();
    // Present the First Question
    nextQuestion();    // <--- Calling/Invoking the function
}

//h1El.textContent = "This is a question"

function startTimer() {   // What is the function of this method(?)
    console.log("Starting Timer ...")
    var timeLeft = 10;
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

// Defining what the function does
function nextQuestion() {
    // Let's Grab our Question Object 
    // Create a variable to hold data --> Current Data (How do we grab this data)
    var currentQuestion = questions[0];    // We grab the First object in the questions Array
    console.log(currentQuestion);

    // Above (in line 79) we have a static iterator
    // !!!! ***** What can we use to "change the index" value we grab from our data Array(?)   <-- ???
    // WE can use a counter to keep track of something --> var counter = ?;
    // Question  --> How and when does the counter change?`


    // We can also pull out each piece of data from the object
    var currentTitle = currentQuestion.title;  // questions[0].title
    console.log(currentTitle);

    // Add Question object content to DOM(Browser Window) --> Document Object Model

    // Grab a reference to all our buttons and Question Title
    // These were added at the top of the file --> Done
    // Update the content with our question data
    console.log(question);
    question.textContent = currentTitle;
    btn1.textContent = questions[0].choices[0];
    console.log("Button one is: ", btn1);
    btn2.textContent = questions[0].choices[1];
    console.log("Button two is: ", btn2);
    btn3.textContent = questions[0].choices[2];
    btn4.textContent = questions[0].choices[3];


    // Update the DOM(the HTML page)
}


