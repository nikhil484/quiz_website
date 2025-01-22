const questions = [{
    question : "Which is the largest animal in the world?",
    answers: [
        {text:"Shark", correct:false},
        {text:"Blue whale", correct:true},
        {text:"Elephant", correct:false},
        {text:"Girrafe", correct:false},
        
    ]
},
{
    question : "Which is the largest continent in the world?",
    answers: [
        {text:"Asia", correct:true},
        {text:"Africa", correct:false},
        {text:"Europe", correct:false},
        {text:"Austraila", correct:false},
        
    ]
},

{
    question : "Which is the smallest country in the world?",
    answers: [
        {text:"India", correct:false},
        {text:"England", correct:false},
        {text:"Vatican City", correct:true},
        {text:"Austraila", correct:false},
        
    ]
},

{
    question: "What is the capital of France?",
    answers: [
        {text: "Paris", correct: true},
        {text: "Rome",  correct: false},
        {text: "Madrid",correct: false},
        {text: "Berlin",correct: false}
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        {text: "Mars",    correct: true},
        {text: "Earth",   correct: false},
        {text: "Jupiter", correct: false},
        {text: "Saturn",  correct: false}
    ]
},
{
    question: "What is the largest ocean in the world?",
    answers: [
        {text: "Pacific Ocean",  correct: true},
        {text: "Atlantic Ocean", correct: false},
        {text: "Indian Ocean",   correct: false},
        {text: "Arctic Ocean",   correct: false}
    ]
},
{
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
        {text: "William Shakespeare", correct: true},
        {text: "Charles Dickens",     correct: false},
        {text: "Jane Austen",         correct: false},
        {text: "Mark Twain",          correct: false}
    ]
},
{
    "question": "What is the smallest prime number?",
    "answers": [
        {text: "2", correct: true},
        {text: "1", correct: false},
        {text: "3", correct: false},
        {text: "0", correct: false}
    ]
},
{
    question: "What is the chemical symbol for water?",
    answers: [
        {text: "H2O", correct: true},
        {text: "O2",  correct: false},
        {text: "CO2", correct: false},
        {text: "HO",  correct: false}
    ]
},
{
    question: "Which country has the largest population in the world?",
    answers: [
        {text: "China", correct : false},
        {text: "India", correct : true},
        {text: "USA",   correct : false},
        {text: "Russia",correct : false}
    ]
},
{
    question: "What is the hardest natural substance on Earth?",
    answers: [
        {text: "Diamond", correct: true},
        {text: "Gold",    correct: false},
        {text: "Iron",    correct: false},
        {text: "Platinum",correct: false}
    ]
},
{
    question: "Who is known as the Father of Computers?",
    answers: [
        {text: "Charles Babbage", correct: true},
        {text: "Alan Turing",     correct: false},
        {text: "Ada Lovelace",    correct: false},
        {text: "John von Neumann",correct: false}
    ]
},
{
    question: "Which gas do plants use for photosynthesis?",
    answers: [
        {text: "Carbon Dioxide", correct: true},
        {text: "Oxygen",         correct: false},
        {text: "Nitrogen",       correct: false},
        {text: "Hydrogen",       correct: false}
    ]
}

];


const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +  1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function  selectAnswer(e){
    const selectedBtn =e.target
    const isCorrect=selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }   
    
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
    nextButton.style.display="block";

                 
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You  scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
       handleNextButton(); 
    }
    else{
        startQuiz()
    }
})
startQuiz();