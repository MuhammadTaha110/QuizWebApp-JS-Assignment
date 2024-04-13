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

//var to hold temporary value for elements
var index = 0;

//Array of Questions
const questions = [
  'HTML Stands for?',
  'Who is making the Web standards?',
  'Choose the correct HTML element for the largest heading:',
  'What is the correct HTML element for inserting a line break?',
  'Choose the correct HTML element to define important text?'

]

//Array of Objects for Options
const options = [{
  optionA: 'HyperText MakeUp Language',
  optionB: 'HyperText MarkUp Language',
  optionC: 'HyperTextLink MakeUp Language',
  optionD: 'HyperText Website MakeUp Language',
},
{
  optionA: 'Google',
  optionB: 'Mozilla',
  optionC: 'Safari',
  optionD: 'World Wide Web Consortium',
},
{
  optionA: '<h1>',
  optionB: '<head>',
  optionC: '<header>',
  optionD: '<h6>',
},
{
  optionA: '<lineBreak>',
  optionB: '</br>',
  optionC: '<break>',
  optionD: '<lb>',
},
{
  optionA: '<b>',
  optionB: '<strong>',
  optionC: '<important>',
  optionD: '!important',
},

]

//Array for Correct options
const correctOptions = [
  'HyperText Markup Language', 'World Wide Web Consortium',
  '<h1>', '</br>', '<strong>'
]


//function for html questions
function htmlQuizStart() {

  var Quizsection = document.querySelector('.quiz-section');
  var QuizQuestionNum = document.querySelector('.question-num');
  var QuizQuestion = document.querySelector('.question');
  var A = document.querySelector('.A');
  var B = document.querySelector('.B');
  var C = document.querySelector('.C');
  var D = document.querySelector('.D');
  //var timerMins = document.querySelector('.timer-mins');
  //var timerSec = document.querySelector('.timer-sec');


  QuizQuestionNum.innerHTML = index + 1;
  QuizQuestion.innerHTML = questions[index];
  A.innerText = options[index].optionA;
  B.innerText = options[index].optionB;
  C.innerText = options[index].optionC;
  D.innerText = options[index].optionD;


}


//variables for timer
var timerSeconds = 60;
var timerMinutes = 14;


//function for timer
function timerSec() {
  if (timerSeconds > 0) {
    timerSeconds--;
  }

  else {
    timerMinutes--;
    timerSeconds = 59;
  }

  document.querySelector('.timer-sec').innerHTML = timerSeconds;
  document.querySelector('.timer-mins').innerHTML = timerMinutes;

}



htmlQuizStart();

function nextButton() {
  if (index < questions.length - 1) {
    index++;
    htmlQuizStart();
  }

}

function previousButton() {
  if (index > 0) {
    index--;
    htmlQuizStart();
  }

}


let intervalID;

//function to show quiz-section
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
  document.querySelector('.custom-quiz').style.display = 'none';

  intervalID = setInterval(timerSec, 1000);
}

//function to hide quiz-section
function hideDetails() {

  // Display the quiz section
  document.querySelector('.quiz-section').style.display = 'none';

  document.querySelector('.quiz-cards').style.display = 'flex';
  document.querySelector('.custom-quiz').style.display = 'block';

  stopInterval(intervalID);
}

//function to hold user-choice
function userChoice() {
  var userChose = document.querySelector('.option-card').innerText;
  alert(userChose);
}

//document.querySelector('.option-card').addEventListener('clicked',userChoice());

/*
// Get all option cards
const optionCards = document.querySelectorAll('.option-card');

// Define a variable to store the choice
let choice = '';

// Add event listener to each option card
optionCards.forEach(option => {
    option.addEventListener('click', function() {
        // Retrieve the value of the clicked option
        choice = this.classList[0]; // Assuming the class names are A, B, C, D
        //console.log('Choice:', choice);
        // You can perform further actions here based on the choice

        let text = '.'+choice;
        let test = '';
        test = document.querySelector(text).innerText;

        document.querySelector(text).style.backgroundColor = ' #22a247';
        document.querySelector(text).style.borderColor = ' #000000';
        document.querySelector(text).style.color = ' #000000';
        console.log(test);
    });
});
*/

// Get all option cards
const optionCards = document.querySelectorAll('.option-card');

// Store the state of each option
const optionStates = {
  A: false,
  B: false,
  C: false,
  D: false
};


// Add event listener to each option card
optionCards.forEach(option => {
  option.addEventListener('click', function () {
    const optionClass = this.classList[0]; // Get the class name of the clicked option
    const isSelected = optionStates[optionClass]; // Get the current state of the option

    let text = '.' + optionClass;
    let userChoose = '';
    userChoose = document.querySelector(text).innerText;

    //console.log(test);

    // Toggle the state of the option
    optionStates[optionClass] = !isSelected;

    // Change the color based on the state
    if (isSelected) {
      // Revert color if clicked twice
      this.style.backgroundColor = ''; // Set background color to default (or remove inline style)
      document.querySelector(text).style.borderColor = ' #22a247';
      document.querySelector(text).style.color = '#000000';
    } else {
      // Change color if clicked once
      this.style.backgroundColor = '#22a247'; // Set background color to desired color
      document.querySelector(text).style.borderColor = ' #000000';
      document.querySelector(text).style.color = ' #000000';
    }

    // Change the color of other options if needed
    for (const key in optionStates) {
      if (key !== optionClass && optionStates[key]) {
        document.querySelector(`.${key}`).style.backgroundColor = ''; // Revert color of other selected options
        document.querySelector(`.${key}`).style.borderColor = ' #22a247';
        document.querySelector(`.${key}`).style.color = '#00000';
        optionStates[key] = false; // Reset state of other selected options
      }
    }

    //console.log(optionClass + ' selected:', optionStates[optionClass]);
  });
});


