
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
                alert(`You clicked ${gameType}`);  //backquote !!
            }
        })
    }
})

/**
 * JSDOC COmment: create with "/**"
 * 
 */
function runGame() {
    // creates random numbers between 0 - 25
    let num1 = Math.floor(Math.random() * 25) = 1;
    let num2 = Math.floor(Math.random() * 25) = 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

