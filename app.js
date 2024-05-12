// Prompt for user to set target
var target = prompt("Enter the target value:");
document.getElementById("target").textContent = target;

var leftScore = 0;
var rightScore = 0;

// Update left side score
document.getElementById("leftAddBtn").addEventListener("click", function() {
    leftScore++;
    document.getElementById("leftScore").textContent = leftScore;
    checkTarget();
});

document.getElementById("leftLessBtn").addEventListener("click", function() {
    leftScore--;
    document.getElementById("leftScore").textContent = leftScore;
    checkTarget();
});

// Update right side score
document.getElementById("rightAddBtn").addEventListener("click", function() {
    rightScore++;
    document.getElementById("rightScore").textContent = rightScore;
    checkTarget();
});

document.getElementById("rightLessBtn").addEventListener("click", function() {
    rightScore--;
    document.getElementById("rightScore").textContent = rightScore;
    checkTarget();
});

// Reset scores
document.getElementById("resetBtn").addEventListener("click", function() {
    leftScore = 0;
    rightScore = 0;
    document.getElementById("leftScore").textContent = leftScore;
    document.getElementById("rightScore").textContent = rightScore;
});

// Check if target is reached
function checkTarget() {
    if (leftScore == target) {
        alert("Left side wins!");
    } else if (rightScore == target) {
        alert("Right side wins!");
    }
}