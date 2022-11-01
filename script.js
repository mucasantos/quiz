const quizData = [ 
  {
    question: "Qual o seu nome?",
    a: "Samuel",
    b: "Juca",
    c: "Joaquim",
    d: "Maria",
    correct: "b",
  },
  {
    question: "Qual o seu nome?",
    a: "Samuel",
    b: "Juca",
    c: "Joaquim",
    d: "Maria",
    correct: "b",
  },
  {
    question: "Qual o seu nome?",
    a: "Samuel",
    b: "Juca",
    c: "Joaquim",
    d: "Maria",
    correct: "b",
  },
  {
    question: "Qual a sua idade?",
    a: "14",
    b: "16",
    c: "56",
    d: "45",
    correct: "d",
  },
  {
    question: "Onde Você mora?",
    a: "Barueri",
    b: "Caracas",
    c: "Jandira",
    d: "Itapevi",
    correct: "b",
  },
  {
    question: "Qual o nome do boi?",
    a: "Juca",
    b: "Bla",
    c: "Blevle",
    d: "Flubi",
    correct: "d",
  },
  {
    question: "Qual o o nome do cara?",
    a: "Samuel",
    b: "Mina",
    c: "Mino",
    d: "CArinha",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

const counter = document.getElementById("counter");


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
 deleteAnswer();
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  counter.innerText = `Pergunta ${currentQuestion + 1}/${quizData.length} ` 
}

function deleteAnswer() {
  answerElements.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answerUser;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
     
      answerUser = answerEl.id;
    }
  });

  return answerUser;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>Você acertou ${score}/${quizData.length}
        <button onclick= "location.reload()">Reload</button>
        `;
    }
  }
});
