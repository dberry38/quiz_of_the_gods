const questionOptions = [
  {
    question: "Which choice is a semantic HTML element?",
    choices: [
      { text: "<article>", correct: true },
      { text: "<div>", correct: false },
      { text: "<class>", correct: false },
      { text: "<span>", correct: false },
    ],
  },
  {
    question: "How can you make an element invisible in CSS?",
    choices: [
      { text: "display: none;", correct: true },
      { text: "background-color: black;", correct: false },
      { text: "display: flex;", correct: false },
      { text: "display: off;", correct: false },
    ],
  },
  {
    question: "Which is NOT a value type in JavaScript?",
    choices: [
      { text: "length", correct: true },
      { text: "boolean", correct: false },
      { text: "undefined", correct: false },
      { text: "integer", correct: false },
    ],
  },
  {
    question: "What does DOM stand for?",
    choices: [
      { text: "Document Object Model", correct: true },
      { text: "Document Object Method", correct: false },
      { text: "Direct Object Model", correct: false },
      { text: "Major League Baseball", correct: false },
    ],
  },
  {
    question: "What does CDN stand for?",
    choices: [
      { text: "Content Delivery Network", correct: true },
      { text: "Content Driver Network", correct: false },
      { text: "Current Data Node", correct: false },
      { text: "Chickens Don't Know", correct: false },
    ],
  },
  {
    question: "How do you create a new local repository in GIT?",
    choices: [
      { text: "git init", correct: true },
      { text: "git -lr", correct: false },
      { text: "git clone", correct: false },
      { text: "git new-local", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Heuristic Typographic Media Lasagna", correct: false },
      { text: "Hyper Text Markdown Language", correct: false },
    ],
  },
  {
    question: "What HTML element is used to create a line break?",
    choices: [
      { text: "<br>", correct: true },
      { text: "<brk>", correct: false },
      { text: "<break>", correct: false },
      { text: "<jump>", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Color Stuff Simply", correct: false },
      { text: "Computed Style Sheets", correct: false },
      { text: "Common Southern Skylark", correct: false },
    ],
  },
  {
    question: "Where should an external CSS file be linked in an HTML file?",
    choices: [
      { text: "In the <head> section", correct: true },
      { text: "At the very end of the <body> section", correct: false },
      { text: "Chef's Choice", correct: false },
      { text: "In the <meta> section", correct: false },
    ],
  },
  {
    question: "How do you make list bullet points into squares in CSS?",
    choices: [
      { text: "list-style-type: square;", correct: true },
      { text: "list-style: square;", correct: false },
      { text: "li {style: square;}", correct: false },
      { text: "list-type: square;", correct: false },
    ],
  },
  {
    question: "How do you make a drop-down list in HTML?",
    choices: [
      { text: '<input type="dropdown">', correct: true },
      { text: '<input-type:"select">', correct: false },
      { text: '<input="dropdown">', correct: false },
      { text: '<input type="select">', correct: false },
    ],
  },
  {
    question: 'What is the correct CSS to select an element with id "quiz"?',
    choices: [
      { text: "#quiz", correct: true },
      { text: ".quiz", correct: false },
      { text: "*quiz", correct: false },
      { text: "~quiz", correct: false },
    ],
  },
  {
    question: 'What is the HTML attribute "alt" used for?',
    choices: [
      {
        text: "Creating the text used to describe an image if it cannot be displayed.",
        correct: true,
      },
      {
        text: "Creating text that displays under an image to provide context.",
        correct: false,
      },
      {
        text: "Writing the text that appears when hovering the cursor over the image.",
        correct: false,
      },
      {
        text: "Providing a placeholder image if the original image fails.",
        correct: false,
      },
    ],
  },
  {
    question: "What HTML element is used to play video files?",
    choices: [
      { text: "<video>", correct: true },
      { text: "<media>", correct: false },
      { text: "<mp4>", correct: false },
      { text: "<file-type: video>", correct: false },
    ],
  },
  {
    question:
      "Which is NOT correct syntax to assign a variable called 'example' in Javascript?",
    choices: [
      { text: "set example", correct: true },
      { text: "var example", correct: false },
      { text: "let example", correct: false },
      { text: "const example", correct: false },
    ],
  },
  {
    question:
      "How do you write a comment with more than one line in JavaScript?",
    choices: [
      { text: "/*This is the way.*/", correct: true },
      { text: "//This is the way.//", correct: false },
      { text: "<!--This is the way.-->", correct: false },
      { text: "//Only single line comments allowed.", correct: false },
    ],
  },
  {
    question: "What are '<>' called?",
    choices: [
      { text: "Angle Brackets", correct: true },
      { text: "Corner Brackets", correct: false },
      { text: "Angel Brackets", correct: false },
      { text: "Square Brackets", correct: false },
    ],
  },
  {
    question:
      "How can you determine if 'x' is a higher number than 'y' in JavaScript?",
    choices: [
      { text: "Math.max(x, y)", correct: true },
      { text: "Math.top(x, y)", correct: false },
      { text: "if (x > y) {console.log(true)};", correct: false },
      { text: "Ask Javascript nicely.", correct: false },
    ],
  },
  {
    question: "Which line of HTML will open the link in a new tab/window?",
    choices: [
      { text: '<a href="url" target="_blank">', correct: true },
      { text: '<a href="url" onclick="new">', correct: false },
      { text: '<link="url" page="open-new">', correct: false },
      { text: '<a link="url" target="new">', correct: false },
    ],
  },
  {
    question: "In HTML, which line tells the page to display in English?",
    choices: [
      { text: '<html lang="en">', correct: true },
      {
        text: '<meta name="viewport" content="English, initial-scale=1.0">',
        correct: false,
      },
      {
        text: '<meta http-equiv="north_america" content="english">',
        correct: false,
      },
      { text: '<meta charset="UTF-8">', correct: false },
    ],
  },
  {
    question: "Which HTML attribute creates an inline style?",
    choices: [
      { text: "<style>", correct: true },
      { text: "<inlineCSS>", correct: false },
      { text: "<css>", correct: false },
      { text: "<stylesheet>", correct: false },
    ],
  },
  {
    question:
      "Which is NOT a CSS property for adjusting the space around a content box?",
    choices: [
      { text: "justify-content", correct: true },
      { text: "margin", correct: false },
      { text: "border", correct: false },
      { text: "padding", correct: false },
    ],
  },
  {
    question: "What is the default value of the CSS position property?",
    choices: [
      { text: "Static", correct: true },
      { text: "Relative", correct: false },
      { text: "Default", correct: false },
      { text: "Horizontal", correct: false },
    ],
  },
];



const questionNumber = document.getElementById("q-number");
const questionTitle = document.getElementById("q-title");

const countDown = document.getElementById("count-down");
const timerMsg = document.getElementById("count-msg");

const choiceTabs = document.getElementsByClassName("answer");
const whoops = document.getElementById("whoops");


var picked = [];

// This is essentially an initialize function that begins when the user lands on the quiz page.
const qPicker = (questionOptions) => {
  // randomize the questions array without having repeats.
  for (var i = 0; i < 24; i++) {
    let rando = Math.floor(Math.random() * questionOptions.length);
    picked.push(questionOptions[rando]);
    questionOptions.splice(rando, 1);
  }
  // Pass the randomized questions to be generated, while also starting the countdown.
  generateCard(picked);
  timerCountDown();
};



var timeLeft = 61;

const timerCountDown = () => {
  let timeInterval = setInterval(function () {
    if (timeLeft === 61) {
      countDown.innerHTML = ` `;
      timerMsg.innerHTML = `START`;
      timeLeft--;
    } else if (timeLeft > 1) {
      countDown.innerHTML = `${timeLeft}`;
      timerMsg.innerHTML = `seconds left`;
      timeLeft--;
    } else if (timeLeft > 0) {
      countDown.innerHTML = `${timeLeft}`;
      timerMsg.innerHTML = `second left`;
      timeLeft--;
    } else if (timeLeft === 0) {
      countDown.innerHTML = ` `;
      timerMsg.innerHTML = `END`;
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};


var index = 0;

// populates the question card based on index number and assigns event listeners based on whether the selected answer is correct.
const generateCard = (picked) => {
  questionNumber.innerHTML = "#" + [index + 1];
  questionTitle.innerText = picked[index].question;

  let rndChoice = picked[index].choices.sort(func);
  function func(a, b) {
    return 0.5 - Math.random();
  }


  // this loop assigns the answers to different listeners for correct or bad answers. The listeners need to be removed to prevent having both listeners stack and run together, causing issues.
  for (var i = 0; i < rndChoice.length; i++) {
    choiceTabs[i].innerText = rndChoice[i].text;

    if (rndChoice[i].correct) {
      choiceTabs[i].removeEventListener("click", badChoice);
      choiceTabs[i].addEventListener("click", correctChoice);
    } else {
      choiceTabs[i].removeEventListener("click", correctChoice);
      choiceTabs[i].addEventListener("click", badChoice);
    };
  };
};


var score = 0;
// increase score count, increment index, display correct message and run generateCard again
const correctChoice = (event) => {
  console.log("winner winner chicken dinner");
  index++;
  score++;
  console.log(score);
  generateCard(picked);
  
  whoops.style.color = "rgb(0, 132, 255)";
  whoops.innerText = "CORRECT";

  let a = 1;
  let correctMessage = setInterval(function () {
    if (a > 0) {
      a--;
    } else {
      whoops.innerText = "";
      clearInterval(correctMessage);
    };
  }, 1000);
};

// hold for 3 seconds, display wrong answer message, increment index, run generateCard again
const badChoice = (event) => {
  console.log("i cant believe youve done this");
  console.log(score);
  let b = 3;
  whoops.style.color = "red";
  whoops.innerText = "WRONG ANSWER";
  let penaltyCount = setInterval(function () {
    if (b > 0) {
      whoops.innerText = "TIME PENALTY"
      b--;
    } else {
      whoops.innerText = "";
      clearInterval(penaltyCount);
      index++;
      generateCard(picked);
    }
  }, 1000);
};


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const userScore = document.getElementById("score-total");
const submitBtn = document.getElementById("submit-btn");
const homeReturn = document.getElementById("homepage-btn");

const endGame = () => {
  console.log("time's up, score: ", score);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  userScore.innerText = score;
};

const submitScore = () => {

}

submitBtn.addEventListener("click", submitScore);

homeReturn.onclick = function () {
  location.href = "/home-menu.html";
}


qPicker(questionOptions);
