var startQuiz = document.querySelector(".start-button");
var titleScreen = document.getElementById("title-screen");

var firstQuestion = document.getElementById("first-question");
var wrongButton = document.querySelectorAll(".wrong-button");
var rightButton = document.querySelector(".right-button");

var secondQuestion = document.getElementById("second-question");
var wrongButton2 = document.querySelectorAll(".wrong-button-2");
var rightButton2 = document.querySelector(".right-button-2");

var thirdQuestion = document.getElementById("third-question");
var wrongButton3 = document.querySelectorAll(".wrong-button-3");
var rightButton3 = document.querySelector(".right-button-3");

var fourthQuestion = document.getElementById("fourth-question");
var wrongButton4 = document.querySelectorAll(".wrong-button-4");
var rightButton4 = document.querySelector(".right-button-4");

var fifthQuestion = document.getElementById("fifth-question");
var wrongButton5 = document.querySelectorAll(".wrong-button-5");
var rightButton5 = document.querySelector(".right-button-5");

var questions = document.querySelectorAll(".questions");

var youLose = document.getElementById("you-lose");
var tryAgain = document.getElementById("try-again");

var youWin = document.getElementById("you-win");
var confirmWin = false;
var yourScore = document.getElementById("your-score");
var playAgain = document.getElementById("play-again");

var userInitials = document.getElementById("initials");
var score;
var submitScore = document.getElementById("submit-score");

var timeEl = document.getElementById("timer");
var secondsLeft = 30;

var wrongSound = document.getElementById("wrong-sound");
var rightSound = document.getElementById("correct-sound");

startQuiz.addEventListener("click", function() {
    confirmWin = false;
    titleScreen.style.display = "none";
    firstQuestion.style.display = "block";
    console.log(secondsLeft);
    setTime();
});

function setTime() {
    var timerInterval = setInterval(function() {
        timeEl.style.display = "block";
        timeEl.textContent = secondsLeft + " seconds left!";
        secondsLeft--;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            secondsLeft = 30;
            questions.forEach(function(question){
                question.style.display = "none";
            });
            losingScreen();
        } else if (confirmWin === true) {
            clearInterval(timerInterval);
            secondsLeft = 30;
            timeEl.style.display = "none";
            questions.forEach(function(question){
                question.style.display = "none";
            });
        }
        return;
    }, 1000);
}

wrongButton.forEach(function(event) {
    event.addEventListener("click", function() {
        wrongSound.play();
        secondsLeft = (secondsLeft - 5);
    });
});


rightButton.addEventListener("click", function() {
    rightSound.play();
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";
});

wrongButton2.forEach(function(event) {
    event.addEventListener("click", function() {
        wrongSound.play();
        secondsLeft = (secondsLeft - 5);
    });
});

rightButton2.addEventListener("click", function() {
    rightSound.play();
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";
});

wrongButton3.forEach(function(event) {
    event.addEventListener("click", function() {
        wrongSound.play();
        secondsLeft = (secondsLeft - 5);
    });
});

rightButton3.addEventListener("click", function() {
    rightSound.play();
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = "block";
});

wrongButton4.forEach(function(event) {
    event.addEventListener("click", function() {
        wrongSound.play();
        secondsLeft = (secondsLeft - 5);
    });
});

rightButton4.addEventListener("click", function() {
    rightSound.play();
    fourthQuestion.style.display = "none";
    fifthQuestion.style.display = "block";
});

wrongButton5.forEach(function(event) {
    event.addEventListener("click", function() {
        wrongSound.play();
        secondsLeft = (secondsLeft - 5);
    });
});

rightButton5.addEventListener("click", function() {
    rightSound.play();
    confirmWin = true;
    score = secondsLeft;
    fifthQuestion.style.display = "none";
    youWin.style.display = "block";
    yourScore.textContent = "Your score is: " + secondsLeft + ".";
    playAgain.addEventListener("click", replay);

function replay() {
    youWin.style.display = "none";
    titleScreen.style.display = "block";
}

});

function losingScreen() {
    timeEl.style.display = "none";
    youLose.style.display = "block";
    tryAgain.addEventListener("click", function() {
        youLose.style.display = "none";
        titleScreen.style.display = "block";
    });

}

submitScore.addEventListener("click", function() {
    var oldUser = localStorage.getItem("user");
    var oldScore = localStorage.getItem("score");
    var user = userInitials.value;

    score = [score, oldScore];
    user = [user, oldUser];

  
    localStorage.setItem("user", user);
    localStorage.setItem("score", score);
});


