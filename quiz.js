const questionOptions = [
    {question: "Which choice is a semantic HTML element?",
        choices: [
            {text: "<article>", correct: true},
            {text: "<div>", correct: false},
            {text: "<class>", correct: false},
            {text: "<span>", correct: false},
        ]
    },
    {question: "How can you make an element invisible in CSS?",
        choices: [
            {text: "display: none;", correct: true},
            {text: "background-color: black;", correct: false},
            {text: "display: flex;", correct: false},
            {text: "display: off;", correct: false},
        ]
    },
    {question: "Which is NOT a value type in JavaScript?",
        choices: [
            {text: "length", correct: true},
            {text: "boolean", correct: false},
            {text: "undefined", correct: false},
            {text: "integer", correct: false},
        ]
    },
    {question: "What does DOM stand for?", 
        choices: [
            {text: "Document Object Model", correct: true},
            {text: "Document Object Method", correct: false},
            {text: "Direct Object Model", correct: false},
            {text: "Major League Baseball", correct: false},
        ]
    },
    {question: "What does CDN stand for?", 
        choices: [
            {text: "Content Delivery Network", correct: true},
            {text: "Content Driver Network", correct: false},
            {text: "Current Data Node", correct: false},
            {text: "Chickens Don't Know", correct: false},
        ]
    },
    {question: "How do you create a new local repository in GIT?", 
        choices: [
            {text: "git init", correct: true},
            {text: "git -lr", correct: false},
            {text: "git clone", correct: false},
            {text: "git new-local", correct: false},
        ]
    },
    {question: "What does HTML stand for?", 
        choices: [
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyper Transfer Markup Language", correct: false},
            {text: "Heuristic Typographic Media Lasagna", correct: false},
            {text: "Hyper Text Markdown Language", correct: false},
        ]
    },
    {question: "What HTML element is used to create a line break?", 
        choices: [
            {text: "<br>", correct: true},
            {text: "<brk>", correct: false},
            {text: "<break>", correct: false},
            {text: "<jump>", correct: false},
        ]
    },
    {question: "What does CSS stand for?", 
        choices: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Color Stuff Simply", correct: false},
            {text: "Computed Style Sheets", correct: false},
            {text: "Common Southern Skylark", correct: false},
        ]
    },
    {question: "Where should an external CSS file be linked in an HTML file?", 
        choices: [
            {text: "In the <head> section", correct: true},
            {text: "At the very end of the <body> section", correct: false},
            {text: "Chef's Choice", correct: false},
            {text: "In the <meta> section", correct: false},
        ]
    },
    {question: "How do you make list bullet points into squares in CSS?", 
        choices: [
            {text: "list-style-type: square;", correct: true},
            {text: "list-style: square;", correct: false},
            {text: "li {style: square;}", correct: false},
            {text: "list-type: square;", correct: false},
        ]
    },
    {question: "How do you make a drop-down list in HTML?", 
        choices: [
            {text: '<input type="dropdown">', correct: true},
            {text: '<input-type:"select">', correct: false},
            {text: '<input="dropdown">', correct: false},
            {text: '<input type="select">', correct: false},
        ]
    },
    {question: 'What is the correct CSS to select an element with id "quiz"?', 
        choices: [
            {text: "#quiz", correct: true},
            {text: ".quiz", correct: false},
            {text: "*quiz", correct: false},
            {text: "~quiz", correct: false},
        ]
    },
    {question: 'What is the HTML attribute "alt" used for?', 
        choices: [
            {text: "Creating the text used to describe an image if it cannot be displayed.", correct: true},
            {text: "Creating text that displays under an image to provide context.", correct: false},
            {text: "Writing the text that appears when hovering the cursor over the image.", correct: false},
            {text: "Providing a placeholder image if the original image fails.", correct: false},
        ]
    },
    {question: "What HTML element is used to play video files?", 
        choices: [
            {text: "<video>", correct: true},
            {text: "<media>", correct: false},
            {text: "<mp4>", correct: false},
            {text: "<file-type: video>", correct: false},
        ]
    },
    {question: "Javascript and Java are versions of the same language.", 
        choices: [
            {text: "False", correct: true},
            {text: "True", correct: false},
        ]
    },
    {question: "How do you write a comment with more than one line in JavaScript?", 
        choices: [
            {text: "/*This is the way.*/", correct: true},
            {text: "//This is the way.//", correct: false},
            {text: "<!--This is the way.-->", correct: false},
            {text: "//Only single line comments allowed.", correct: false},
        ]
    },
    {question: "What are <> called?", 
        choices: [
            {text: "Angle Brackets", correct: true},
            {text: "Corner Brackets", correct: false},
            {text: "carrots", correct: false},
            {text: "Square Brackets", correct: false},
        ]
    },
    {question: "How can you determine if 'x' is a higher number than 'y' in JavaScript?", 
        choices: [
            {text: "Math.max(x, y)", correct: true},
            {text: "Math.top(x, y)", correct: false},
            {text: "if (x > y) {console.log(true)};", correct: false},
            {text: "Ask Javascript nicely.", correct: false},
        ]
    },
    {question: "Which line of HTML will open the link in a new tab/window?", 
        choices: [
            {text: '<a href="url" target="_blank">', correct: true},
            {text: '<a href="url" onclick="new">', correct: false},
            {text: '<link="url" page="open-new">', correct: false},
            {text: '<a link="url" target="new">', correct: false},
        ]
    },
    {question: 'In HTML, <meta charset="UTF-8" tells the page to display in English.', 
        choices: [
            {text: "False", correct: true},
            {text: "True", correct: false},
        ]
    },
    {question: 'The HTML attribute <style> creates an inline style.', 
        choices: [
            {text: "True", correct: true},
            {text: "False", correct: false},
        ]
    },
    {question: 'Negative values are accepted for the padding property.', 
        choices: [
            {text: "False", correct: true},
            {text: "True", correct: false},
        ]
    },
    {question: 'The default value of the position property is "static".', 
        choices: [
            {text: "True", correct: true},
            {text: "False", correct: false},
        ]
    },
]

var questionNumber = document.getElementById('q-number')
var questionTitle = document.getElementById('q-title')
var countDown = document.getElementById('count')



function generateQuestionCard() {
    for (i=0; i<10; i++) {
        qOptionsShuffle();
        questionNumber.innerText = i + 1;
        questionTitle.innertext = questionOptions.question;
        
    }
}

function qOptionsShuffle(questionOptions) {
    let currentIndex = questionOptions.length, randomIndex;

    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [questionOptions[currentIndex], questionOptions[randomIndex]] = [questionOptions[randomIndex], questionOptions[currentIndex]];
    }
    return questionOptions;
}