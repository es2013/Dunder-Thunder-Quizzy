
//create the question object with answers and options
let dunderQuestions = [
    {
        id: 1,
        question: "1. What is Dwights middle name?",
        choices: ["Danger", "Kirk", "Kurt", "Belsnickel"],
        correct: "Kurt"
    },
    {
        id: 2,
        question: "2. What was Ryan Howard's social app called?",
        choices: ["Meow", "Chirp", "Woof", "Bark"],
        correct: "Woof"
    },
    {
        id: 3,
        question: "3. Would I rather be feared or loved?",
        choices: ["Loved", "Feared", "Hated", "Both. I want people to be afraid of how much they love me"],
        correct: "Both. I want people to be afraid of how much they love me"

    },
    {
        id: 4,
        question: "4. Michael Scott is...",
        choices: ["Tina Turner...always", "Superman", "Beyonce...always", "Whitney...always"],
        correct: "Beyonce...always"
    }

];

//define document elements that will be used (extra fluff from other class examples that i repurposed)
var timerEl = document.getElementById('countdown');
var mainEl = document.querySelector('.main');
var startBtn = document.getElementById('start');
var endBtn = document.getElementById('end');
var quizEl = document.querySelector(".welcome");
var admirableEl = document.getElementById('admirableScore');
var impishEl = document.getElementById('impishScore');
var impishScore = 0;
var admirableScore = 0;
var finished;





//start button is selected the timer starts counting down
$("#start").on("click", function () {
    //remove little harvey description
    $(".description").hide();
    $(".btn").hide();
    displayQuestion();
    countdown();

});
//check to see if button selection matches correct value for that question[i]
function check(qIndex, choiceText) {
    var selectChoice = (choiceText === dunderQuestions[qIndex].correct);
    console.log(selectChoice)
    if (selectChoice) {
        alert("Admirable, friend!")
        admirableScore++;
        admirableEl.textContent = admirableScore;
        timeLeft -= 1;
    } else {
        alert("Impish! WRONG")
        impishScore++;
        impishEl.textContent = impishScore;
        console.log(choiceText)
        timeLeft -= 15;

    }
}

function displayQuestion() {
    var qIndex = 0
    quizBox = document.createElement("div");
    quizBox.setAttribute("id", dunderQuestions)

    // quizBox.textContent = dunderQuestions[index].question;

    var quizText = document.createElement("h2")
    quizText.textContent = dunderQuestions[qIndex].question;
    console.log(quizText)

    var quizAnswers = document.createElement("ul");
    // quizAnswers.setAttribute("class", "quiz-answers");

    for (var i = 0; i < dunderQuestions[qIndex].choices.length; i++) {
        var list = document.createElement("li");

        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("answer-content", dunderQuestions[qIndex].choices[i]);

        buttonEl.textContent = dunderQuestions[qIndex].choices[i];
        list.appendChild(buttonEl);
        quizAnswers.appendChild(list);
        console.log(buttonEl);
    }

    quizBox.appendChild(quizText);
    quizBox.appendChild(quizAnswers);
    mainEl.replaceChild(quizBox, quizEl)


    //assign the selected button to choiceText and compare that to correctSelected function
    var choiceList = quizAnswers.querySelectorAll("button");
    quizAnswers.addEventListener("click", function (e) {
        var el = e.target;
        if (el.matches("button")) {
            var choiceText = el.getAttribute("answer-content")
            console.log(el.getAttribute("answer-content"));
            check(qIndex, choiceText);
            qIndex++;
            if (qIndex === dunderQuestions.length) {
                quizComplete();
                clearInterval(timeInterval);
                return null;
            }
            quizText.textContent = dunderQuestions[qIndex].question;
            for (var j = 0; j < dunderQuestions[qIndex].choices.length; j++) {
                choiceList[j].textContent = dunderQuestions[qIndex].choices[j];
                choiceList[j].setAttribute("answer-content", dunderQuestions[qIndex].choices[j]);
            }
        }
    })
};


function quizComplete() {
    // if (index === dunderQuestions.length) {
    finished = document.createElement("div");
    var message1 = document.createElement("h1");
    message1.textContent = "You are finished.";
    var message2 = document.createElement("h3");
    message2.textContent = "...That's what she said. or he said..."
    var score = document.createElement("p");
    score.textContent = "You earned " + admirableScore + " admirable point(s) and " + impishScore + " impish points"
    finished.appendChild(message1);
    finished.appendChild(message2);
    finished.appendChild(score);
    //replace current quizbox text with the new finished message
    mainEl.replaceChild(finished, quizBox);


}

function countdown() {
    timeLeft = 100;
    // time interval using setInterval method for countdown
    var timeInterval = setInterval(function () {
        //for loop conditions for when to apply which message
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            quizComplete();
            // Call the `displayMessage()` function
            alert("Time is up!");
        }

    }, 1000);
};

















