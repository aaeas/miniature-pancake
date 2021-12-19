// First we GRAB a reference (the element on the HTML page)
var startButton = document.getElementById("start");
var time = document.getElementById("timer");
console.log(startButton);
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

h1El.textContent= "This is a question"

function startTimer() {
    console.log("Starting Timer ...")
    var timeLeft = 10;
    var timer = setInterval(function() {
        timeLeft = timeLeft - 1;
        console.log(timeLeft);
        // Updating the data on the HTML page
        time.textContent = "Timer: " + timeLeft
        if(timeLeft <= 0) {
            console.log("Timer Ended");
            // Clear (End/Stop) Our Timer
            clearInterval(timer);
        }
    }, 1000);
}