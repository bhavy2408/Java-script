# 🎯 Quiz Application

A simple and interactive **Quiz Application** built using **HTML, CSS, and JavaScript**.

Users can start the quiz, answer multiple-choice questions, see correct and incorrect answers highlighted, view their final score and percentage, and reset the quiz.

---

## 🚀 Features

* 🎮 Start Quiz button
* ❓ Multiple-choice questions
* 🟢 Correct answer highlighting
* 🔴 Wrong answer highlighting
* ✅ Automatically shows the correct answer when a wrong answer is selected
* 🔒 Prevents selecting multiple answers for the same question
* ⏭️ Next Question button
* 📊 Final score calculation
* 📈 Percentage calculation
* 🎉 Quiz completion result
* 🔄 Reset Quiz button
* 📱 Responsive design for smaller screens

---

## 🛠️ Technologies Used

| Technology | Purpose                      |
| ---------- | ---------------------------- |
| HTML5      | Structure of the application |
| CSS3       | Styling and layout           |
| JavaScript | Quiz logic and functionality |

---

## 📁 Project Structure

```text
Quiz-Application/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🖥️ How It Works

### 1. Start Page

When the application opens, the user sees:

```text
┌─────────────────────────────┐
│                             │
│     Let's Start Quiz        │
│                             │
└─────────────────────────────┘
```

Clicking **Let's Start Quiz** opens the question page.

---

### 2. Question Page

The application displays a question with four options.

Example:

```text
Which method is used to add an element
at the end of an array?

[ pop()      ]
[ push()     ]
[ shift()    ]
[ unshift()  ]

[ Next Question ]
```

---

### 3. Correct Answer

If the user selects the correct answer, the option becomes **green**.

```text
🟢 push()
```

The score is increased by `1`.

---

### 4. Wrong Answer

If the user selects the wrong answer, the selected option becomes **red**.

The correct answer is automatically highlighted in **green**.

Example:

```text
🔴 pop()
🟢 push()
⚪ shift()
⚪ unshift()
```

---

### 5. Next Question

After selecting an answer, the user can click:

```text
Next Question
```

The application loads the next question.

The user must select an answer before moving to the next question.

---

## 📊 Result Page

After completing all questions, the application displays the final result.

Example:

```text
🎉 Quiz Completed!

Your Score: 4 / 5

Percentage: 80.00%

[ Reset Quiz ]
```

The percentage is calculated using:

```javascript
(Score / questions.length) * 100
```

---

## 🔄 Reset Quiz

Clicking the **Reset Quiz** button resets:

* Current question
* Score
* Answer status
* Result page

The user is returned to the starting page and can take the quiz again.

---

## 🧠 JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

* Arrays
* Objects
* Functions
* Variables
* `forEach()`
* DOM Manipulation
* `getElementById()`
* `querySelectorAll()`
* Event Listeners
* `classList.add()`
* `classList.remove()`
* Conditional Statements
* Template-free string concatenation
* Dynamic content updating

---

## 🎨 CSS Features

The project uses CSS for:

* Flexbox
* Button styling
* Hover effects
* Colors
* Borders
* Border radius
* Shadows
* Responsive layout
* Correct/wrong answer states

Correct answer:

```css
.option.correct {
    background-color: #22c55e;
}
```

Wrong answer:

```css
.option.wrong {
    background-color: #ef4444;
}
```

---

## ▶️ How to Run

### Step 1

Download or clone the project.

### Step 2

Open the project folder in **VS Code**.

### Step 3

Make sure these files are present:

```text
index.html
style.css
script.js
```

### Step 4

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

---

## 📌 Current Quiz Questions

The current application contains **5 JavaScript array-related questions**.

Topics include:

1. `push()`
2. `pop()`
3. Array indexing
4. `length`
5. Accessing array elements

---

## 🔮 Future Improvements

The project can be improved further by adding:

* ⏱️ Quiz timer
* 🔄 Restart Quiz
* 🎲 Random questions
* 📋 Question counter
* 🏆 High score using `localStorage`
* 🌙 Dark mode
* 🔊 Sound effects
* 📱 Better mobile responsiveness
* 🏅 Pass/Fail result
* 📊 Correct and incorrect answer count
* 💾 Save quiz history
* 🎯 Different quiz categories

---

## 👨‍💻 Author

**Bhavy**

A student project created to practice **HTML, CSS, and JavaScript**.

---

## ⭐ Project Goal

The goal of this project is to learn and practice:

> **DOM manipulation + JavaScript logic + CSS styling + Event handling**

This project is suitable for beginners learning JavaScript and frontend web development.

---

## 📄 License

This project is created for **educational and learning purposes**.
