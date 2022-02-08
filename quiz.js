let startBtn=document.querySelector('.start-btn');
let nextBtn=document.querySelector('.next-btn');
let questionBox=document.getElementById("question-box");
startBtn.addEventListener('click',()=>{
    console.log('click');
    questionBox.style.display='block';
})