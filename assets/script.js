const quizContainer = document.getElementById('quiz');
const startButton = document.querySelector('#homepage button');
const timerElement = document.getElementById('timer');
let seconds = 300;

const questions = [
  {
    question: 'Question 1: Inside of what element do you put Javascript',
    options: ['<script>', '<h1>', '<p>', '<link>'],
    answer: '<script>'
  },
  {
    question: 'Question 2: Which way properly declared a variable?',
    options: ['variable = x', 'var = x', 'declare x', 'x = var'],
    answer: 'var = x'
  },
  {
    question: 'Question 3: How do you write a comment in JavaScript',
    options: ['// this is a comment', '<--this is a comment-->', 'comment = this is a comment', '(this is a comment)'],
    answer: '// this is a comment'
  },
  {
    question: 'Question 4: What will the following code log: console.log(2 + "2")',
    options: ['4', '2 + "2"', 'nothing', '22'],
    answer: '22'
  },
  {
    question: 'Question 5: What will the following code log: var x = 10; console.log(x === "10")',
    options: ['error', 'Undefined', 'False', 'True'],
    answer: 'False'
  },
  {
    question: 'Question 6: What method can be used to change a string to upper case letters',
    options: ['toUpperCaseCase()', 'toUppercase()', 'toUpperCase()', 'toUpper()'],
    answer: 'toUpperCase()'
  },
  {
    question: 'Question 7: Which method is used to remove the last element from an array',
    options: ['delete ()', 'pop()', 'shift()', 'remove()'],
    answer: 'pop()'
  },
  {
    question: 'Question 8: What does the typeof operator in JavaScript return for an array',
    options: ['array', 'object', 'array', 'undefined'],
    answer: 'object'
  },
  {
    question: 'Question 9: Which function is used to parse a string and return an intege?',
    options: ['parseInt()', 'stringToInt()', 'toInteger()', 'parseInteger()'],
    answer: 'parseInt()'
  },
  {
    question: 'Question 10: What is the correct syntax to create a function in',
    options: ['function = myFunction()', 'function myFunction()', 'myFunction = function()', 'myFunction() = function'],
    answer: 'function myFunction()'
  },
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  // Hide the homepage and show the quiz
  document.getElementById('homepage').style.display = 'none';
  quizContainer.style.display = 'block';

  // Display the first question
  displayQuestion();
  timerInterval = setInterval(updateTimer, 1000)
}

function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  timerElement.textContent = `Time Remaining: ${formattedTime}`;

  if (seconds === 0) {
      // Time's up, handle accordingly
      clearInterval(timerInterval);
      // Add your code here to handle the time's up event
  } else {
      seconds--; // Decrease the remaining seconds
  }
}


function displayQuestion() {
  const questionData = questions[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.textContent = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.classList.add('options');

  questionData.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => checkAnswer(option, questionData.answer));
    optionsElement.appendChild(optionElement);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  } else {
    seconds -= 20; // Decrement the timer by 20 seconds for incorrect answers
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  quizContainer.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
}

document.addEventListener('DOMContentLoaded', function() {
  startButton.addEventListener('click', startQuiz);
});
