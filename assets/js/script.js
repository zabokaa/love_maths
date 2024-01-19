
// wait for DOM to finish loading before running the game 
document.addEventListener("DOMContentLoaded", function() {
    // event listeners and event handler
    // getting all buttons as an array:
    let buttons = document.getElementsByTagName("button");
// iterate through array
    // for (let i = 0, i < buttons.length, i++)
    // MORE MODERN ALTERNATIVE:
    for (let button of buttons) {
        // button now is individual button event 
        button.addEventListener("click", function() {
            // this = referring to specific button that is clicked and checking the data-type of it
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
})

/**
 * JSDOC Comment: create with "/**" // it will be displayed while hovering over the following code !!
 * The main game loop will be called after the users anser has been processed
 */
function runGame(gameType) {
    // creates random numbers between 0 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        // always inform user if sth is going wrong
        alert(`Unknown Game Type: ${gameType}`);  //backquote !!
        // will stop the game from running and will print it to console for debugging !
        throw `Unknown game type ${gameType} ! Aborting !`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// ?? why are the parameters calles operand1, operand2 and not num1 and num2 ??
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

