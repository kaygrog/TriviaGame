// Create counter variables
var secondsCount = 10;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

// Grab counter text from HTML
var secondsText = document.querySelector("#seconds-count");
var correctText = document.querySelector("#correct-count");
var incorrectText = document.querySelector("#incorrect-count");
var unansweredText = document.querySelector("#unanswered-count");

// Grab buttons from HTML
var startBtn = document.querySelector("#start-button");
var doneBtn = document.querySelector("#done-button");

// Grab pages from HTML
var startPage = document.querySelector("#start-page");
var triviaPage = document.querySelector("#trivia-page");
var donePage = document.querySelector("#done-page");

// Grab radio buttons for correct answers from HTML
var firstNameAnswer = document.querySelector("#kayla");
var lastNameAnswer = document.querySelector("#grogan");
var ageAnswer = document.querySelector("#age26");
var birthdayAnswer = document.querySelector("#feb-23-1994");

// Initialize variable that will hold the counter
var id;

// Function to decrement the timer
function countdown() {
    secondsText.innerHTML = secondsCount-=1;

    // When the timer gets to 0, end the game
    if (secondsCount === 0) {
        endGame()
    }
}

// When Start button is clicked...
startBtn.onclick = function() {
    // Hide Start page and show Trivia page
    startPage.classList.add("hide");
    triviaPage.classList.remove("hide");

    // Initialize the timer
    secondsText.innerHTML = secondsCount;

    // Run the countdown function every 1000 milliseconds
    id = setInterval(countdown, 1000);
}

// When Done button is clicked, end the game
doneBtn.onclick = function() {
    endGame();
}

// Function that runs when either the Done button is clicked or the timer runs out
function endGame() {
    // Stop the timer
    clearInterval(id);

    // Hide Trivia page and show Done page
    triviaPage.classList.add("hide");
    donePage.classList.remove("hide");

    // Grab the checked radio button from all the questions
    var firstNameGuess = document.querySelector("input[name='first-name']:checked");
    var lastNameGuess = document.querySelector("input[name='last-name']:checked");
    var ageGuess = document.querySelector("input[name='age']:checked");
    var birthdayGuess = document.querySelector("input[name='birthday']:checked");

    // Call function to check whether guesses were correct
    checkGuesses(firstNameGuess, firstNameAnswer);
    checkGuesses(lastNameGuess, lastNameAnswer);
    checkGuesses(ageGuess, ageAnswer);
    checkGuesses(birthdayGuess, birthdayAnswer);

    // Update counters in HTML
    correctText.innerHTML = correctCount;
    incorrectText.innerHTML = incorrectCount;
    unansweredText.innerHTML = unansweredCount;
}

function checkGuesses(guess, answer) {
    // Check whether any radio button was checked in the group
    if (guess != null) {
        // If a radio button was checked, see if it matches the correct answer
        // Update the appropriate counter accordingly
        if (guess.value === answer.value) {
            correctCount++;
        }
        else {
            incorrectCount++;
        }
    }
    // If no radio button was checked in the group, increment the unanswered counter
    else {
        unansweredCount++;
    }
}
