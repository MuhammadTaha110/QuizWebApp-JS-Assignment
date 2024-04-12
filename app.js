// Add your custom JavaScript here
let lastScrollTop = 0;

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop) {
    // Downscroll code
    $('header').addClass('hide');
  } else {
    // Upscroll code
    $('header').removeClass('hide');
  }
  lastScrollTop = scrollTop;
});

var index = 0 ;
const questions = [
  'HTML Stands for?' ,
  'Who is making the Web standards?' ,
  'Choose the correct HTML element for the largest heading:' ,
  'What is the correct HTML element for inserting a line break?' ,
  'Choose the correct HTML element to define important text?' 

]

const options = [{
optionA:'HyperText MakeUp Language',
optionB:'HyperText MarkUp Language',
optionC:'HyperTextLink MakeUp Language',
optionD:'HyperText Website MakeUp Language',
},
{
optionA:'Google',
optionB:'Mozilla',
optionC:'Safari',
optionD:'World Wide Web Consortium',
},
{
optionA:'<h1>',
optionB:'<head>',
optionC:'<header>',
optionD:'<h6>',
},
{
optionA:'<lineBreak>',
optionB:'</br>',
optionC:'<break>',
optionD:'<lb>',
},
{
optionA:'<b>',
optionB:'<strong>',
optionC:'<important>',
optionD:'!important',
},

]

const correctOptions = [
'HyperText Markup Language', 'World Wide Web Consortium' , 
'<h1>' , '</br>', '<strong>' 
]

function htmlQuizStart(){

var Quizsection = document.querySelector('.quiz-section');
var QuizQuestionNum = document.querySelector('.question-num');
var QuizQuestion = document.querySelector('.question');
var A = document.querySelector('.A');
var B = document.querySelector('.B');
var C = document.querySelector('.C');
var D = document.querySelector('.D');

QuizQuestionNum.innerHTML = index+1;
QuizQuestion.innerHTML = questions[index];
A.innerText = options[index].optionA;
B.innerText = options[index].optionB;
C.innerText = options[index].optionC;
D.innerText = options[index].optionD;
}

htmlQuizStart();

function nextButton(){
  if(index < questions.length-1){
    index++;
    htmlQuizStart();
  }

}

function previousButton(){
  if(index > 0){
    index--;
    htmlQuizStart();
  }
  
}




function displayDetails() {
  var section = document.querySelector('.quiz-section');

  // Display the quiz section
  section.style.display = 'block';

  // Calculate the vertical middle of the screen
  var middleOfScreen = window.innerHeight / 2 - section.clientHeight / 2;

  // Set the top position of the section to the calculated middle
  section.style.top = middleOfScreen + 'px';

  // Hide other sections if needed
  document.querySelector('.quiz-cards').style.display = 'none';
  document.querySelector('.play-quiz').style.display = 'none';
  document.querySelector('.custom-quiz').style.display = 'none';


}

