// quiz questions

var questions = [
    {
        question: "in what country did jiujitsu originate?",
        answers: ["Brazil", "USA", "Japan", "China"],
        correct: "Japan"
    },
    {
        question: "what's the highest rank in jiujitsu?",
        answers: ["yellow", "red", "blue", "black"],
        correct: "red"
    }
]
    // for (i = 0; i < questions.length; i++) {
    //     console.log(questions[i].question)
    // }

// quiz variables
var currentQuestion = 0 
var timer = questions.length *20

// DOM variables
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var startBtnEl = document.getElementById("start-btn");

function startQuiz() {
    /* make start buton dissapear
    make question and answers show up on page
    start countdown timer */
}

/* INSTRUCTIONS FOR QUIZ

1. Quiz should be created using DOM manipulation.

2. Create an array of questions and answer selections.

3. Create functions to call on question array.
    a. Use for loop to iterate through questions?

4. Possible structure for quiz:
    a. Quiz question div.
    b. Answer choice div(s) with buttons.
    c. Identify correct vs. incorrect answers using class attributes on the buttons?

5. Deduct points (add to timer?) for wrong answers.

6. Add timer function.

7. Use local storage to save timer high scores.

    a. Add option to enter name for high scores.
8. Create high score list by loading saved storage data.

9. Add styles to quiz.
    a. Hover effects for answer choices.
    b. General styles, time permitting.
    
10. Other considerations:
    a. Start/re-start quiz?
    b. Make a static mock-up of the HTML elements needed to structure the quiz first.

/* END */