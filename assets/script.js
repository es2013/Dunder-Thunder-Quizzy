//define document elements that will be used (extra fluff from other class examples that i repurposed)
var timerEl = document.getElementById('countdown');
var mainEl = document.querySelector('.main');
var startBtn = document.getElementById('start');
var endBtn = document.getElementById('end');
var quizEl = document.querySelector(".welcome");

//create the question object with answers and options
let dunderQuestions = [
    {
        id: 1,
        question: "1. What is Dwights middle name?",
        choices: ["Danger", "Kirk","Kurt","Belsnickel" ],
        correct: "Kurt"
    },
    {
        id: 2,
        question: "2. What was Ryan Howard's social app called?",
        choices:["Meow", "Chirp","Woof", "Bark" ],
        correct: "Woof"
    },
    {
        id: 3,
        question: "3. Would I rather be feared or loved?",
        choices: ["Loved", "Feared","Hated","Both. I want people to be afraid of how much they love me" ],
        correct: "Both. I want people to be afraid of how much they love me"

    },
    {
        id: 4,
        question: "4. Michael Scott is...",
        choices: ["Tina Turner...always", "Superman", "Beyonce...always", "Whitney...always" ],
        correct: "Beyonce...always"
    }

];





//start button is selected the timer starts counting down
$("#start").on("click", function () {
    //remove little harvey description
    $(".description").hide();
    $(".btn").hide();
    console.log("buttons should be hidden and questions should appear");
    //display quiz question text
    $(".quiz-text").show();
    $("#button-display").show();
    console.log("first question appear?");
    // countdown();
    displayQuestion();




});



// choice selection
// $("#button-choice").on("click", ".correctButton", function (select) {
//     // correctButton.clicked(e); 
//     var selectedAnswer = $(select.target).attr("data-name");
//     console.log(select);
//     console.log($(select.target).attr("data-name"));
//     quizQuestion.checkAnswer(selectedAnswer);
// })
//questions to appear
function displayQuestion() {
    var index = 0
    quizBox = document.createElement("div");
    // quizText.setAttribute("class", "quiz-text");
    quizBox.textContent = dunderQuestions[index].question;
    
    var quizText = document.createElement("h2")
    quizText.textContent = dunderQuestions[index].question;
    console.log(quizText)

    var quizAnswers = document.createElement("ul");
    // quizAnswers.setAttribute("class", "quiz-answers");
    for (var i=0;i<dunderQuestions.length;i++){
        var list = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = dunderQuestions[index].choices[i];
        list.appendChild(buttonEl);
        quizAnswers.appendChild(list);
        console.log(buttonEl);
    }
    quizBox.appendChild(quizText);
    quizBox.appendChild(quizAnswers);
    mainEl.replaceChild(quizBox, quizEl)





  
};

// //button choices display
// function choiceGenerator() {
//     $("#button-choice").empty();
//     for (var i = 0; dunderQuestionsObj.dunderQ[i].length; i++) {
//         $("#button-choice").append("<li>");
//         var answer = $("<button>");
//         answer.attr("data-name", dunderQuestionsObj.dunderQ.correct[i]);
//         answer.text(dunderQuestions.dunderQ.correct[i]);
//         //display button
//         $("button-choice").append(answer);
//         $("button-choice").append("<li>")

//     };
// };








// // Timer function that decreases by second
// function countdown() {
//     var timeLeft = 10;
//     // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//         if (timeLeft > 1) {
//             timeLeft--;
//             timerEl.textContent = timeLeft + " seconds remaining";
//         } else if (timeLeft === 1) {
//             timeLeft--;
//             timerEl.textContent = timeLeft + " second remaining";
//         }
//         else {
//             timerEl.textContent = "";
//             clearInterval(timeInterval);
//             displayMessage();

//         }
//     }, 1000);
// };





// //If the correct answer is selected, then incremement Admirable points by 1
// function correctSelected(correct) {



// }


// // Displays the message one word at a time
// function displayMessage() {
//     var wordCount = 0;

//     // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
//     var msgInterval = setInterval(function () {
//         if (words[wordCount] === undefined) {
//             clearInterval(msgInterval);
//         } else {
//             mainEl.textContent = words[wordCount];
//             wordCount++;
//         }
//     }, 300);
// }