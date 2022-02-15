let startBtn=document.querySelector('.start-btn');
let nextBtn=document.querySelector('.next-btn');
let questionContainer=document.querySelector('.question')
let questionElement=document.querySelector('#question')
let answerContainer=document.querySelector('.answer')
let shuffleQuestions, currentQuestion;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', ()=>{
    currentQuestion++;
    // added this to clear the next button 
    nextBtn.classList.add('question')
    setNextQuestion();
});

//function to start the game

function startGame(){
    startBtn.classList.add('question');
    questionContainer.classList.remove('question');
    // for shffling the questions
    shuffleQuestions=questions.sort(()=> Math.random() - .5);
    currentQuestion=0;
    setNextQuestion()
}

// function to set the next question

function setNextQuestion(){
    
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
    clearStatus(document.body)
}

//function to show questions

function showQuestion(question){
    questionElement.textContent=question.question;
    // loop through the answer
    question.answer.forEach(answer=>{
        const button=document.createElement('button');
        button.textContent=answer.text;
        button.classList.add('btn');
        if(answer.correct){

            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerContainer.appendChild(button);
    })

}

//function to perform a task when an answer is click

function selectAnswer(e){
   let selectedButton=e.target;
   const correct=selectedButton.dataset.correct;
   setStatus(document.body, correct)
   // make the answer container an array
   Array.from(answerContainer.children).forEach(button=>{
       setStatus(button, button.dataset.correct)
   })
   // check if this is the last question
   if(shuffleQuestions.length > currentQuestion + 1){

       nextBtn.classList.remove('question');
   }else{
       startBtn.textContent='Restart';
       startBtn.classList.remove('question')
   }
}

// function to setStatus whether the answer is correct or not

function setStatus(element, correct){
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

// Function to clear the status

function clearStatus(element){

    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

//function to clear the previous question

function resetState(){
    
     while(answerContainer.firstChild){
         answerContainer.removeChild(answerContainer.firstChild)
     }
}

// questions container

let questions=[
    {
        question:'Who program this?',
        answer:[
            {text:'Olaitan', correct: true},
            {text:'Bisi', correct: false},
            {text:'Babatunde', correct: true},
            {text:'Bayo', correct: false},
        ]
    },
    {
        question:'Who is the greatest rapper in Nigeria?',
        answer:[
            {text:'Olamide', correct: true},
            {text:'Jude Okeye', correct: false},
            {text:'M I', correct: false},
            {text:'Ice prince', correct: false},
        ]
    },
    {
        question:'What is the highest mountain?',
        answer:[
            {text:'Everest', correct: true},
            {text:'Kilomanjaro', correct: false},
            {text:'Spring', correct: false},
            {text:'Waterfall', correct: false},
        ]
    },
    {
        question:'Best learnning code website',
        answer:[
            {text:'MDN', correct: true},
            {text:'w3school', correct: true}
        ]
    },
    {
        question:'Who is the man',
        answer:[
            {text:'Bola', correct: true},
            {text:'Bisi', correct: false},
            {text:'Bami', correct: false},
            {text:'Bayo', correct: false},
        ]
    }
]