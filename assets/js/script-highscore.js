var score = localStorage.getItem("score");
var user = localStorage.getItem("user");
var savedScores = document.getElementById("saved-scores");
var clearButton = document.getElementById("clear-scores");

var scoreArray = score.split(",");
var userArray = user.split(",");

//prints scores
function printScores() {
    for (var i = 0; i < (scoreArray.length - 1); i++) {
        var newScore = document.createElement("p");
        newScore.textContent = userArray[i] + "-" + scoreArray[i];
        savedScores.appendChild(newScore);
        
    } 
}

printScores();

//clears scores
clearButton.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});



