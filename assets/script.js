const quizContainer = document.getElementById('quiz');
const startButton = document.querySelector('#homepage button');
const questions = [
  {
    question: 'Question 1: What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Question 2: Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  // Hide the homepage and show the quiz
  document.getElementById('homepage').style.display = 'none';
  quizContainer.style.display = 'block';

  // Display the first question
  displayQuestion();
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