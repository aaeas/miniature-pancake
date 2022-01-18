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
var questionContainer = document.getElementById('question-container');
var time = document.getElementById("timer");
var question = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");
var container = document.getElementById("question-container");


// Second we attach an EVENT LISTENER to the element
startBtn.addEventListener('click', function () {
    startBtn.setAttribute('class', 'hidden')
    instructions.setAttribute("class", "hidden")
    questionContainer.removeAttribute("class")
    displayTitleOne()
    displayTime(60)
    startTimer()
});

function displayTime(timeRemaining) {
    time.textContent = `Timer: ${timeRemaining}`;
}

function startTimer() {   // What is the function of this method(?)
    console.log("Starting Timer ...")
    var timeLeft = 60;
    var counter = setInterval(function () {
        timeLeft = timeLeft - 1;
        console.log(timeLeft);
        // Updating the data on the HTML page
        time.textContent = "Timer: " + timeLeft
        if (timeLeft <= 0) {
            console.log("Timer Ended");
            // Clear (End/Stop) Our Timer
            clearInterval(counter);
        }
    }, 1000);

}
// Define our startQuiz method (function)
function displayTitleOne() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");
    question.textContent = quiz[0].title

    // clear the contents of the "answer-buttons" container
    answerButtons.innerHTML = "";

    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choicesBtn = document.createElement('button')
        choicesBtn.setAttribute('id', quiz[0].choices[i])
        choicesBtn.textContent = quiz[0].choices[i]

        choicesBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[0].answer) {
                score += 20
                console.log('correct');
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayTitleTwo()
        });

        answerButtons.append(choicesBtn);
    }
}


function displayTitleTwo() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");
    question.textContent = quiz[1].title

    // clear the contents of the "answer-buttons" container
    answerButtons.innerHTML = "";

    for (var i = 0; i < quiz[1].choices.length; i++) {
        var choicesBtn = document.createElement('button')
        choicesBtn.setAttribute('id', quiz[1].choices[i])
        choicesBtn.textContent = quiz[1].choices[i]

        choicesBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[1].answer) {
                score += 20
                console.log('correct');
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayTitleThree()

        });

        answerButtons.append(choicesBtn);
    }
}


function displayTitleThree() {
    console.log("Button Clicked, Start Game ...");
    question.textContent = quiz[2].title;

    // clear the contents of the "answer-buttons" container
    answerButtons.innerHTML = "";



    for (var i = 0; i < quiz[0].choices.length; i++) {
        var choicesBtn = document.createElement('button')
        choicesBtn.setAttribute('id', quiz[2].choices[i])
        choicesBtn.textContent = quiz[2].choices[i]

        choicesBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[2].answer) {
                score += 20
                console.log('correct');
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayTitleFour()
        });
        answerButtons.append(choicesBtn);
    }
}

function displayTitleFour() {
    console.log("Button Clicked, Start Game ...");
    question.textContent = quiz[3].title

    // clear the contents of the "answer-buttons" container
    answerButtons.innerHTML = "";

    for (var i = 0; i < quiz[3].choices.length; i++) {
        var choicesBtn = document.createElement('button')
        choicesBtn.setAttribute('id', quiz[3].choices[i])
        choicesBtn.textContent = quiz[3].choices[i]

        choicesBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[3].answer) {
                score += 20
                console.log('corect');
            } else {
                timer -= 10
                console.log('incorrect');
            }
            endQuiz()
        });
        answerButtons.append(choicesBtn);
    }
};

function endQuiz() {

    clearInterval(time)
    questionContainer.textContent = ''
    container.textContent = ''
    questionContainer.textContent = 'Your Final Score Is: ' + score

    var input = document.createElement('input')
    input.setAttribute('placehold', 'What is your name?')
    questionContainer.append(input)
    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    questionContainer.append(submitBtn)

    submitBtn.addEventListener('click', function () {

        var storage = JSON.parse(localStorage.getItem('highscore'))
        if (storage === null) {
            storage = []
        }
        var user = {
            name: input.value,
            currentScore: score
        }
        console.log(user)
        storage.push(user)
        localStorage.setItem('highscore', JSON.stringify(storage))
    });
}