
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
                // alert("You clicked submit!");
                // NOW check if answer is correct:
                checkAnswer(); //needs no parameters
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    // for users who wnat to use the enter key instead of the submit button:
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
    
    runGame("addition");
});

/**
 * JSDOC Comment: create with "/**" // it will be displayed while hovering over the following code !!
 * The main game loop will be called after the users anser has been processed
 */
function runGame(gameType) {
    // so users do not have to delete their previous answer = setting value to empty string:
    document.getElementById("answer-box").value = "";
    // mouse cursor already inside the answer box:
    document.getElementById("answer-box").focus();
    // creates random numbers between 0 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
       
    } 
    else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
       
    }
    else {
        // always inform user if sth is going wrong
        alert(`Unknown Game Type: ${gameType}`);  //backquote !!
        // will stop the game from running and will print it to console for debugging !
        throw `Unknown game type ${gameType} ! Aborting !`;
    }
}

/**
 * Checks the answer agaist the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    // REMEMBER: it is an easy way to check first in DevTools console
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();   //this is an array !! [correctAnswer, gameType]
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);  //to run another game
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // we need parseInt to get numbers, bc by default variabls called for the dom are string !!!
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    }
    else if 
        (operator === "x") {
            return [operand1 * operand2, "multiply"];
    } 
    else if 
        (operator === "-") {
            return [operand1 - operand2, "subtract"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}


/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;    // similar to oldscore+1

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

// ?? why are the parameters calles operand1, operand2 and not num1 and num2 ??
function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion(operand1, operand2) {
    // here we have to check that operand is > than operand 2, bc we do not want to have negtive numbers answer
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
    
}

