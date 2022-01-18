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
function displayTitleOne() {
    // Define the logic of our game
    console.log("Button Clicked, Start Game ...");
    titleContainer.textContent = quiz[0].title
    for (var i = 0; i < quiz[0].options.length; i++) {
        var choicesBtn = document.ceatedElement('button')
        choicesBtn.setAttribute('id', quiz[1].choices[i])
        choicesBtn.text.Content = quiz[1].options[i]
        choicesContainer.append(choicesBtn)

        optionBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[0].answer) {
                score += 20
                console.log('corect');
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayTitleTwo()

        })
    }
    function displayTitleTwo() {
        // Define the logic of our game
        console.log("Button Clicked, Start Game ...");
        titleContainer.textContent = quiz[0].title
        for (var i = 0; i < quiz[0].options.length; i++) {
            var choicesBtn = document.ceatedElement('button')
            choicesBtn.setAttribute('id', quiz[1].choices[i])
            choicesBtn.text.Content = quiz[1].options[i]
            choicesContainer.append(choicesBtn)

            optionBtn.addEventListener('click', function (event) {
                if (event.target.id === quiz[0].answer) {
                    score += 20
                    console.log('corect');
                } else {
                    timer -= 10
                    console.log('incorrect');
                }
                displayTitleThree()

            })
            function displayTitleThree() {
                console.log("Button Clicked, Start Game ...");
                titleContainer.textContent = quiz[0].title
                for (var i = 0; i < quiz[0].options.length; i++) {
                    var choicesBtn = document.ceatedElement('button')
                    choicesBtn.setAttribute('id', quiz[1].choices[i])
                    choicesBtn.text.Content = quiz[1].options[i]
                    choicesContainer.append(choicesBtn)

                    optionBtn.addEventListener('click', function (event) {
                        if (event.target.id === quiz[0].answer) {
                            score += 20
                            console.log('corect');
                        } else {
                            timer -= 10
                            console.log('incorrect');
                        }
                        displayTitleFour()

                    })
                    function displayTitleFour() {
                        console.log("Button Clicked, Start Game ...");
                        titleContainer.textContent = quiz[0].title
                        for (var i = 0; i < quiz[0].options.length; i++) {
                            var choicesBtn = document.ceatedElement('button')
                            choicesBtn.setAttribute('id', quiz[1].choices[i])
                            choicesBtn.text.Content = quiz[1].options[i]
                            choicesContainer.append(choicesBtn)

                            optionBtn.addEventListener('click', function (event) {
                                if (event.target.id === quiz[0].answer) {
                                    score += 20
                                    console.log('corect');
                                } else {
                                    timer -= 10
                                    console.log('incorrect');
                                }
                                endQuiz()

                            })

                            function endQuiz() {

                                clearInterval(timerInterval)
                                questionContainer.textContent = ''
                                optionsContainer.textContent = ''
                                questionContainer.textContent = 'Your Final Score Is: ' + score



                                var input = document.createElement('input')
                                input.setAttribute('placehold', 'What is your name?')
                                optionsContainer.append(input)
                                var submitBtn = document.createElement('button')
                                submitBtn.textContent = 'Submit'
                                optionsContainer.append(submitBtn)



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
                                })



