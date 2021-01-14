//create the question object with answers and options
let dunderQuestions = [
    {
        id:1,
        question:"1. What is Dwights middle name?",
        choices:{a:"Danger", b:"Kirk",c:"Kurt",d:"Belsnickel"},
        correct: "c" 
    } ,
    {
        id:2,
        question:"2. What was Ryan Howard's social app called?",
        choices:{a:"Meow",b:"Chirp",c:"Woof",d:"Bark"},
        correct:"c"
    }, 
    {
        id:3,
        question:"3. Would I rather be feared or loved?",
        choices:{a:"Loved",b:"Feared",c:"Hated",d:"Both. I want people to be afraid of how much they love me"},
        correct:"d"

    },
    {
        id:4,
        question:"4. Michael Scott is...",
        choices:{a:"Tina Turner...always",b:"Superman",c:"Beyonce...always",d:"Whitney...always"},
        correct:"c"
    } 

]



//define document elements that will be used 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var endBtn = document.getElementById('end');
var submitBtn = document.getElementById('submit');
var quizEl = document.getElementById('quiz');
var choiceList = document.getElementById('choices')
var impishScore=0;
var admirableScore=0;
var counter;

//start button is selected the timer starts counting down
$("#start").on("click", function() {
    //remove little harvey description
    $(".description").hide();
    console.log("quiz start button tracking?");

});


//start button is selected the timer starts counting down
// startBtn.onclick = countdown;

// Timer function that decreases by second
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

  

//function that will look at my dunderquestions array 
function showQuestions(){
   
}
//If the correct answer is selected, then incremement Admirable points by 1
function correctSelected(correct){
    


}










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

