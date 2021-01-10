//create the question object with answers and options
let dunderQuestions = [
    {
        id:1,
        question:"1. What is Dwights middle name?",
        choices:["Danger", "Kirk","Kurt","Belsnickel"],
        correct:"Kurt"   
    } ,
    {
        id:2,
        question:"2. What was Ryan Howard's social app called?",
        choices:["Meow","Chirp","Woof","Bark"],
        correct:"Woof"
    }, 
    {
        id:3,
        question:"3. Would I rather be feared or loved?",
        choices:["Loved","Feared","Hated","Both. I want people to be afraid of how much they love me"],
        correct:"Both. I want people to be afraid of how much they love me"

    },
    {
        id:4,
        question:"4. Michael Scott is...",
        choices:["Tina Turner...always","Superman","Beyonce...always","Whitney...always"],
        correct:"Beyonce...always"
    }

]

//define document elements that will be used 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var endBtn = document.getElementById('end');
var quizEl = document.getElementById('quiz')


// Timer that counts down from 5
function countdown() {
  var timeLeft = 10;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if(timeLeft>1) {
      timeLeft--;
      timerEl.textContent=timeLeft+" seconds remaining";
    } else if (timeLeft===1){
      timeLeft--;
      timerEl.textContent=timeLeft+" second remaining";
    }
    else {
      timerEl.textContent="";
      clearInterval(timeInterval);
      displayMessage();
    
  }
}, 1000);
}

var impishScore=0;
var admirableScore=0;
var counter;

function displayQuiz() {

}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;
