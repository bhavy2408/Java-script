const questions = [
  {
    question:
      "1. Which method is used to add an element at the end of an array?",
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
    question:
      "4. Which property is used to find the number of elements in an array?",
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

// Elements:

const screenpage = document.getElementById("screenpage");
const Start_btn = document.getElementById("Start_btn");
const Questions = document.getElementById("Questiontext");
const option = document.querySelectorAll(".option");
const next_btn = document.getElementById("next_btn");
const displayscore = document.getElementById("score");
const result = document.getElementById("result");

// Function:-

function showquestion() {
    Questions.innerHTML = questions[currentquestion].question;

    option[0].textContent = questions[currentquestion].options[0];
    option[1].textContent = questions[currentquestion].options[1];
    option[2].textContent = questions[currentquestion].options[2];
    option[3].textContent = questions[currentquestion].options[3];
}

Start_btn.addEventListener("click", function () {
  screenpage.style.display = "none";
  Qpage.style.display = "flex";

  showquestion();

  
});

// Select The Option

option.forEach(function (button) {
  button.addEventListener("click", function () {
    let selectedAnswer = button.textContent;

    console.log(selectedAnswer);

    if (selectedAnswer === questions[currentquestion].answer) {
      console.log("Correct Answer !");
      Score++;
    } else {
      console.log("InCorrect Answer !");
    }

  });
});

// Next Button click 
next_btn.addEventListener("click" , function(){
    currentquestion++;
    showquestion();

    displayscore.textContent = "Score: " + Score + " / " + questions.length;
})



