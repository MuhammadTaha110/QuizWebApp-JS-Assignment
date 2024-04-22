//Alert Function


function Alert(){
  Swal.fire({
    title: "Are you sure you want to quit?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#22a247",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Quit it!"
  }).then((result) => {
    if (result.isConfirmed) {
      clearInterval(intervalID);
      hideDetails();
    }
  });


}

function quizStartAlert(){
  Swal.fire({
    title: "25 Questions | 15 Minutes",
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Start Quiz",
    confirmButtonColor: "#22a247",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      displayDetails();
    } 
  });
}

function loginForm(){
  document.querySelector('.login-form').style.display='block';
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.quiz-cards').style.display = 'none';
  document.querySelector('.custom-quiz').style.display = 'none';
  document.querySelector('.result').style.display = 'none';
}

function signupForm(){
  document.querySelector('.signup-form').style.display='block';
  document.querySelector('.login-form').style.display='none';
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.quiz-cards').style.display = 'none';
  document.querySelector('.custom-quiz').style.display = 'none';
  document.querySelector('.result').style.display = 'none';
}

//making login button to left

let navbar = document.querySelector('.navbar-toggler');
let displayStyle = window.getComputedStyle(navbar).display;


if(displayStyle=='none'){
  document.querySelector('.login-btn').style.position = 'absolute';
  document.querySelector('.login-btn').style.left = '85vw';

}

else{
  document.querySelector('.login-btn').style.position = 'static';

}


//Global Variables
let lastScrollTop = 0;
let intervalID;
//var to hold temporary value for elements
var index = 0;

//Function to get and set window position

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

//********************************************* */

/*
const mcqs = {
  question1 : 'HTML Stands for?',
  options : {
    optionA: 'HyperText MakeUp Language',
    optionB: 'HyperText MarkUp Language',
    optionC: 'HyperTextLink MakeUp Language',
    optionD: 'HyperText Website MakeUp Language',
  }
}

*/
//Version 1.0********************************************

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
  'HyperText MarkUp Language', 'World Wide Web Consortium',
  '<h1>', '</br>', '<strong>'
]


//Version 1.0********************************************


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

//function for html questions
function htmlQuizStart() {
  flag = 0;
  intervalID = setInterval(timerSec, 1000);


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


function clearSelectedOptions(){
  document.querySelector('.A').style.backgroundColor = '#ffffff';
  document.querySelector('.A').style.borderColor = ' #22a247';
  document.querySelector('.A').style.color = '#000000';

  document.querySelector('.B').style.backgroundColor = '#ffffff';
  document.querySelector('.B').style.borderColor = ' #22a247';
  document.querySelector('.B').style.color = '#000000';

  document.querySelector('.C').style.backgroundColor = '#ffffff';
  document.querySelector('.C').style.borderColor = ' #22a247';
  document.querySelector('.C').style.color = '#000000';

  document.querySelector('.D').style.backgroundColor = '#ffffff';
  document.querySelector('.D').style.borderColor = ' #22a247';
  document.querySelector('.D').style.color = '#000000';

  a=0;
  b=0;
  c=0;
  d=0;


}


//htmlQuizStart();
let p;
function nextButton() {
  if (index < questions.length - 1) {

    clearSelectedOptions();

    if (p == 1) {
      let selectedOption = userSelected[index + 1];
      document.querySelector(selectedOption).style.backgroundColor = '#22a247';
      document.querySelector(selectedOption).style.borderColor = ' #000000';
      document.querySelector(selectedOption).style.color = '#000000';

      p = 0;
    }
    index++;
    idx++;
    a = 0;
    b = 0;
    c = 0;
    d = 0;

    htmlQuizStart();

  }


}

function previousButton() {
  if (index > 0) {
    index--;
    idx--;
    document.querySelector('.A').style.backgroundColor = '#ffffff';
    document.querySelector('.A').style.borderColor = ' #22a247';
    document.querySelector('.A').style.color = '#000000';

    document.querySelector('.B').style.backgroundColor = '#ffffff';
    document.querySelector('.B').style.borderColor = ' #22a247';
    document.querySelector('.B').style.color = '#000000';

    document.querySelector('.C').style.backgroundColor = '#ffffff';
    document.querySelector('.C').style.borderColor = ' #22a247';
    document.querySelector('.C').style.color = '#000000';

    document.querySelector('.D').style.backgroundColor = '#ffffff';
    document.querySelector('.D').style.borderColor = ' #22a247';
    document.querySelector('.D').style.color = '#000000';

    let selectedOption = userSelected[index];

    document.querySelector(selectedOption).style.backgroundColor = '#22a247';
    document.querySelector(selectedOption).style.borderColor = ' #000000';
    document.querySelector(selectedOption).style.color = '#000000';






    //alert((userSelected[index+1]));
    //document.querySelector(userSelected[index+1])
    p = 1;
    htmlQuizStart();


  }



}

//

//function to show quiz-section
function displayDetails() {

  htmlQuizStart();
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

}

//function to hide quiz-section
function hideDetails() {


  
  clearSelectedOptions();

  index=0;

  // Display the quiz section
  document.querySelector('.quiz-section').style.display = 'none';

  document.querySelector('.quiz-cards').style.display = 'flex';
  document.querySelector('.custom-quiz').style.display = 'block';
  

 
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

let userChosenOption = [];
let userSelected = [];

/*
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

      //pop insertion in an array
      userChosenOption.pop();
      console.log(userChosenOption);
      test = 1;

    } else {
      // Change color if clicked once
      this.style.backgroundColor = '#22a247'; // Set background color to desired color
      document.querySelector(text).style.borderColor = ' #000000';
      document.querySelector(text).style.color = ' #000000';

      //push useroption in an array
      userChosenOption.push(userChoose);
      console.log(userChosenOption);
      test = 2;



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

*/


let test = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;


let A = document.querySelector('.A');
let B = document.querySelector('.B');
let C = document.querySelector('.C');
let D = document.querySelector('.D');

var idx = index;


A.addEventListener('click', function () {
  let userChoose = A.innerText;
  let selectedOption = userSelected[index];

  if (p == 1) {
    document.querySelector(selectedOption).style.borderColor = ' #22a247';
    document.querySelector(selectedOption).style.color = '#000000';
    document.querySelector(selectedOption).style.backgroundColor = '#ffffff';

    switch (selectedOption) {
      case b:
        b--;
        break;
      case c:
        c--;
        break;
      case d:
        d--;
        break;
    }


  }


  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    A.style.borderColor = ' #000000';
    A.style.color = '#000000';
    A.style.backgroundColor = '#22a247';
    a++;

    //userChosenOption.push(userChoose);

    userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 0, '.A'); // Replaced 'index' with 'idx'
    //userSelected.push('.A');
    //console.log(userChosenOption);
  }


  else if (a % 2 != 0) {
    A.style.borderColor = ' #22a247';
    A.style.color = '#000000';
    A.style.backgroundColor = '#ffffff';
    a--;
    userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 1); // Replaced 'index' with 'idx'



  }

  else {
    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'


      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.A'); // Replaced 'index' with 'idx'
      //console.log(userChosenOption);
    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.push(userChoose);
      userSelected.push('.A');
      //console.log(userChosenOption);
    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.push(userChoose);
      userSelected.push('.A')
      console.log(userChosenOption);
    }
  }
})


B.addEventListener('click', function () {
  let userChoose = B.innerText;

  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    B.style.borderColor = ' #000000';
    B.style.color = '#000000';
    B.style.backgroundColor = '#22a247';
    b++;
    userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 0, '.B'); // Replaced 'index' with 'idx'

    //console.log(userChosenOption);
  }

  else if (b % 2 != 0) {
    B.style.borderColor = ' #22a247';
    B.style.color = '#000000';
    B.style.backgroundColor = '#ffffff';
    b--;
    userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 1); // Replaced 'index' with 'idx'
  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.B'); // Replaced 'index' with 'idx'

      console.log(userChosenOption);
    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.B'); // Replaced 'index' with 'idx'

      console.log(userChosenOption);
    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.B'); // Replaced 'index' with 'idx'

      console.log(userChosenOption);
    }
  }
})

C.addEventListener('click', function () {
  let userChoose = C.innerText;

  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    C.style.borderColor = ' #000000';
    C.style.color = '#000000';
    C.style.backgroundColor = '#22a247';
    c++;
    userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 0, '.C'); // Replaced 'index' with 'idx'

    //console.log(userChosenOption)


  }

  else if (c % 2 != 0) {
    C.style.borderColor = ' #22a247';
    C.style.color = '#000000';
    C.style.backgroundColor = '#ffffff';
    c--;
    userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
    //console.log(userChosenOption);
    userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.C'); // Replaced 'index' with 'idx'


    }

    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.C'); // Replaced 'index' with 'idx'


    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.C'); // Replaced 'index' with 'idx'

    }
  }
})


D.addEventListener('click', function () {
  let userChoose = D.innerText;
  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    D.style.borderColor = ' #000000';
    D.style.color = '#000000';
    D.style.backgroundColor = '#22a247';
    d++;
    userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
    //console.log(userChosenOption);
    userSelected.splice(idx, 0, '.D'); // Replaced 'index' with 'idx'

  }

  else if (d % 2 != 0) {
    D.style.borderColor = ' #22a247';
    D.style.color = '#000000';
    D.style.backgroundColor = '#ffffff';
    d--;
    userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
    userSelected.splice(idx, 1); // Replaced 'index' with 'idx'
    //console.log(userChosenOption)
  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.D'); // Replaced 'index' with 'idx'
    }

    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.D'); // Replaced 'index' with 'idx'
    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.splice(idx, 1); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 1); // Replaced 'index' with 'idx'

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.splice(idx, 0, userChoose); // Replaced 'index' with 'idx'
      userSelected.splice(idx, 0, '.D'); // Replaced 'index' with 'idx'
    }
  }
})



/*
A.addEventListener('click', function () {
  //alert(a)
  let userChoose = A.innerText;
  index++;
  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    A.style.borderColor = ' #000000';
    A.style.color = '#000000';
    A.style.backgroundColor = '#22a247';
    a++;
    //userChosenOption.push(userChoose);

    userChosenOption.splice(index, 0, userChoose);
    userSelected.splice(index, 0, '.A');
    //userSelected.push('.A');
    //console.log(userChosenOption);
  }


  else if (a % 2 != 0) {
    A.style.borderColor = ' #22a247';
    A.style.color = '#000000';
    A.style.backgroundColor = '#ffffff';
    a--;
    userChosenOption.splice(index, 1);
    userSelected.splice(index, 1);
  }

  else {
    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.splice(index, 1);
      userSelected.splice(index, 1);


      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.splice(index, 0, userChoose);
      userSelected.splice(index, 0, '.A');
      //console.log(userChosenOption);
    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.splice(index, 1);
      userSelected.splice(index, 1);

      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.push(userChoose);
      userSelected.push('.A');
      //console.log(userChosenOption);
    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.pop();
      userSelected.pop()

      A.style.borderColor = ' #000000';
      A.style.color = '#000000';
      A.style.backgroundColor = '#22a247';
      a++;

      userChosenOption.push(userChoose);
      userSelected.push('.A')
      console.log(userChosenOption);
    }
  }
})

B.addEventListener('click', function () {
  //alert(a)
  let userChoose = B.innerText;

  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    B.style.borderColor = ' #000000';
    B.style.color = '#000000';
    B.style.backgroundColor = '#22a247';
    b++;
    userChosenOption.push(userChoose);
    userSelected.push('.B');

    //console.log(userChosenOption);
  }

  else if (b % 2 != 0) {
    B.style.borderColor = ' #22a247';
    B.style.color = '#000000';
    B.style.backgroundColor = '#ffffff';
    b--;
    userChosenOption.pop();
    userSelected.pop();
  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userChosenOption.pop();
      userSelected.pop()

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.push(userChoose);
      userSelected.push('.B');

      console.log(userChosenOption);
    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.pop();
      userSelected.pop()

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.push(userChoose);
      userSelected.push('.B');

      console.log(userChosenOption);
    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.pop();
      userSelected.pop()

      B.style.borderColor = ' #000000';
      B.style.color = '#000000';
      B.style.backgroundColor = '#22a247';
      b++;

      userChosenOption.push(userChoose);
      userSelected.push('.B');

      console.log(userChosenOption);
    }
  }
})

C.addEventListener('click', function () {
  let userChoose = C.innerText;


  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    C.style.borderColor = ' #000000';
    C.style.color = '#000000';
    C.style.backgroundColor = '#22a247';
    c++;
    userChosenOption.push(userChoose);
    userSelected.push('.C');

    //console.log(userChosenOption)


  }

  else if (c % 2 != 0) {
    C.style.borderColor = ' #22a247';
    C.style.color = '#000000';
    C.style.backgroundColor = '#ffffff';
    c--;
    userChosenOption.pop();
    //console.log(userChosenOption);
    userSelected.pop();

  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userSelected.pop();
      userChosenOption.pop();

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.push(userChoose);
      userSelected.push('.C');


    }

    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.pop();
      userSelected.pop()

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.push(userChoose);
      userSelected.push('.C');


    }

    if (d % 2 != 0) {
      D.style.borderColor = ' #22a247';
      D.style.color = '#000000';
      D.style.backgroundColor = '#ffffff';
      d--;
      userChosenOption.pop();
      userSelected.pop()

      C.style.borderColor = ' #000000';
      C.style.color = '#000000';
      C.style.backgroundColor = '#22a247';
      c++;

      userChosenOption.push(userChoose);
      userSelected.push('.C');

    }
  }
})

D.addEventListener('click', function () {

  let userChoose = D.innerText;
  if ((b % 2 == 0) && (a % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
    D.style.borderColor = ' #000000';
    D.style.color = '#000000';
    D.style.backgroundColor = '#22a247';
    d++;
    userChosenOption.push(userChoose);
    //console.log(userChosenOption);
    userSelected.push('.D');



  }

  else if (d % 2 != 0) {
    D.style.borderColor = ' #22a247';
    D.style.color = '#000000';
    D.style.backgroundColor = '#ffffff';
    d--;
    userChosenOption.pop();
    userSelected.pop();
    //console.log(userChosenOption)

  }

  else {
    if (a % 2 != 0) {
      A.style.borderColor = ' #22a247';
      A.style.color = '#000000';
      A.style.backgroundColor = '#ffffff';
      a--;
      userChosenOption.pop();
      userSelected.pop()

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.push(userChoose);
      userSelected.push('.D');


    }

    if (b % 2 != 0) {
      B.style.borderColor = ' #22a247';
      B.style.color = '#000000';
      B.style.backgroundColor = '#ffffff';
      b--;
      userChosenOption.pop();
      userSelected.pop()

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.push(userChoose);
      userSelected.push('.D');


    }

    if (c % 2 != 0) {
      C.style.borderColor = ' #22a247';
      C.style.color = '#000000';
      C.style.backgroundColor = '#ffffff';
      c--;
      userChosenOption.pop();
      userSelected.pop()

      D.style.borderColor = ' #000000';
      D.style.color = '#000000';
      D.style.backgroundColor = '#22a247';
      d++;

      userChosenOption.push(userChoose);
      userSelected.push('.D');

    }
  }
})

*/

//function to hide result
function hideResult(){
  window.location.reload();

 /*
  document.querySelector('.result').style.display='none';
  document.querySelector('.quiz-cards').style.display = 'flex';
  document.querySelector('.custom-quiz').style.display = 'block';
  userChosenOption,length =0;
  userSelected.length =0;

  clearSelectedOptions();
   
  myStopFunction();
    index=0;


*/




  

}


function resultAlert(){
  let timerInterval;
Swal.fire({
  title: "Submiting!",
  html: "Calculating the results",
  timer: 500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    showResult();
  }
})

}


function showResult(){
 


  let score = 0;
  let correct=0;

  for (i = 0; i < userChosenOption.length; i++) {
    if (userChosenOption[i] === correctOptions[i]) {
      score += 10;
      correct++;
    }

    console.warn("You Choose", userChosenOption[i]);
    console.warn("Correct Answer", correctOptions[i]);
  }

  console.warn("Your Score is:", score);


  //*******

  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.result').style.display='flex';

  let msg = document.querySelector('.msg');
  let percentage = document.querySelector('.module');
  let totalQuestions = document.querySelector('.total-questions');
  let correctAns = document.querySelector('.correct-answers');
  percentage.innerText = ((Number(totalQuestions) / Number(correctAns)) * 100).toFixed(2) + '%';

  percentage.innerText = (score*2) + '%';



  
  switch(score){
    case 0:
      msg.innerText='Revise The Lectures!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
      msg.style.color=('red');
     percentage.style.background=('linear-gradient(to right,  red, red)');
    break;

    case 10:
      msg.innerText='Revise The Lectures!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
      msg.style.color=('red');
     percentage.style.background=('linear-gradient(to right,  red, white, white)');
    break;

    case 20:
      msg.innerText='Not too Good!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
    break;

    case 30:
      msg.innerText='Nice Efforts!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
      msg.style.color=('green');
      percentage.style.background=('linear-gradient(to right,  green, white, white)');
    break;

    case 40:
      msg.innerText='Congratulations!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
      msg.style.color=('green');
      percentage.style.background=('linear-gradient(to right,  green, white)');
    break;

    case 50:
      msg.innerText='Well Done, Genuius!'
      totalQuestions.innerText=questions.length;
      correctAns.innerText=correct;
      msg.style.color=('green');
      percentage.style.background=('linear-gradient(to right,  green, green)');
    break;
  }
}

//temporory hide previous button
document.querySelector('.prev-btn').style.display='none';