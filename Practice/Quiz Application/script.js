const questions = [
  {
    question: "1. Which method is used to add an element at the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "2. Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "remove()"],
    answer: "pop()",
  },
  {
    question: "3. What is the index of the first element in a JavaScript array?",
    options: ["0", "1", "-1", "10"],
    answer: "0",
  },
  {
    question: "4. Which property is used to find the number of elements in an array?",
    options: ["size", "count", "length", "total"],
    answer: "length",
  },
  {
    question:
      '5. What is the output of: let fruits = ["Apple", "Banana", "Mango"]; console.log(fruits[1]);',
    options: ["Apple", "Banana", "Mango", "Undefined"],
    answer: "Banana",
  },
];

let currentquestion = 0;
let Score = 0;
let answered = false;

// Elements
const screenpage = document.getElementById("screenpage");
const Start_btn = document.getElementById("Start_btn");
const Questions = document.getElementById("Questiontext");
const option = document.querySelectorAll(".option");
const next_btn = document.getElementById("next_btn");
const displayscore = document.getElementById("score");
const Qpage = document.getElementById("Qpage");
const result = document.getElementById("Quizbox");
const percentage = document.getElementById("percentage");
const resetQuiz = document.getElementById("resetQuiz");

// Show Question
function showquestion() {

  Questions.textContent = questions[currentquestion].question;

  option.forEach(function (button, index) {
    button.textContent = questions[currentquestion].options[index];

    // Remove previous classes
    button.classList.remove("correct");
    button.classList.remove("wrong");

    // Enable buttons
    button.disabled = false;
  });

  answered = false;
}

// Start Quiz
Start_btn.addEventListener("click", function () {

  screenpage.style.display = "none";
  Qpage.style.display = "flex";
  result.style.display = "none";

  showquestion();
});

// Select Option
option.forEach(function (button) {

  button.addEventListener("click", function () {

    // Prevent selecting multiple answers
    if (answered) {
      return;
    }

    answered = true;

    let selectedAnswer = button.textContent;
    let correctAnswer = questions[currentquestion].answer;

    if (selectedAnswer === correctAnswer) {

      // Correct answer
      button.classList.add("correct");

      Score++;

    } else {

      // Wrong answer
      button.classList.add("wrong");

      // Show correct answer
      option.forEach(function (btn) {

        if (btn.textContent === correctAnswer) {
          btn.classList.add("correct");
        }

      });
    }

    // Disable all options
    option.forEach(function (btn) {
      btn.disabled = true;
    });

  });
});

// Next Button
next_btn.addEventListener("click", function () {

  if (!answered) {
    alert("Please select an answer!");
    return;
  }

  currentquestion++;

  if (currentquestion < questions.length) {

    showquestion();

  } else {

    Qpage.style.display = "none";
    result.style.display = "flex";

    displayscore.textContent =
      "Your Score: " + Score + " / " + questions.length;

    let finalPercentage =
      (Score / questions.length) * 100;

    percentage.textContent =
      "Percentage: " + finalPercentage.toFixed(2) + "%";
  }
});

// Reset Quiz
resetQuiz.addEventListener("click", function () {

  currentquestion = 0;
  Score = 0;
  answered = false;

  result.style.display = "none";
  Qpage.style.display = "none";
  screenpage.style.display = "flex";

});