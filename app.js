//Alert Function
let quiz  = '';

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

  
  
  quiz = document.querySelector('.start-quiz').parentElement.classList[0];
  console.warn(quiz);

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
  document.querySelector('.signup-form').style.display='none';
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
const htmlQuestions = [
  'What does HTML stand for?',
  'Who sets the Web standards?',
  'Which element represents the largest heading?',
  'Which element inserts a line break?',
  'Which element defines important text?',
  'What does CSS stand for?',
  'What language is used to style web pages?',
  'Which tag is used to create a hyperlink?',
  'Which tag defines a paragraph?',
  'What tag is used for unordered lists?',
  'What tag is used for ordered lists?',
  'What tag is used for table cells?',
  'Which tag defines a division or section?',
  'What tag defines an image?',
  'What is the correct HTML for inserting an image?',
  'Which HTML attribute specifies an image\'s alternative text?',
  'Which tag defines a clickable button?',
  'Which attribute specifies the URL of the page the link goes to?',
  'Which attribute is used to provide an alternative text for an image?',
  'What is the correct HTML for making a checkbox?',
  'What is the correct HTML for making a radio button?',
  'What does the <a> tag do?',
  'What does the <br> tag do?',
  'What is the correct HTML for adding a background color?',
  'What does HTML stand for?',

];

const htmlOptions = [
  {
    optionA: 'HyperText Markup Language',
    optionB: 'HyperText MakeUp Language',
    optionC: 'HyperTextLink Markup Language',
    optionD: 'HyperText Website Markup Language',
  },
  {
    optionA: 'Google',
    optionB: 'Mozilla',
    optionC: 'W3C',
    optionD: 'Microsoft',
  },
  {
    optionA: '<h1>',
    optionB: '<h>',
    optionC: '<header>',
    optionD: '<heading>',
  },
  {
    optionA: '<br>',
    optionB: '<lb>',
    optionC: '<line>',
    optionD: '<break>',
  },
  {
    optionA: '<strong>',
    optionB: '<bold>',
    optionC: '<em>',
    optionD: '<important>',
  },
  {
    optionA: 'Cascading Style Sheets',
    optionB: 'Creative Style Sheets',
    optionC: 'Cascading Simple Style',
    optionD: 'Cascading Style Simplified',
  },
  {
    optionA: 'CSS',
    optionB: 'JavaScript',
    optionC: 'HTML',
    optionD: 'Python',
  },
  {
    optionA: '<a>',
    optionB: '<link>',
    optionC: '<href>',
    optionD: '<url>',
  },
  {
    optionA: '<para>',
    optionB: '<p>',
    optionC: '<paragraph>',
    optionD: '<text>',
  },
  {
    optionA: '<ul>',
    optionB: '<ol>',
    optionC: '<li>',
    optionD: '<ul>',
  },
  {
    optionA: '<ol>',
    optionB: '<ul>',
    optionC: '<li>',
    optionD: '<order>',
  },
  {
    optionA: '<td>',
    optionB: '<th>',
    optionC: '<table-cell>',
    optionD: '<tr>',
  },
  {
    optionA: '<div>',
    optionB: '<section>',
    optionC: '<divsion>',
    optionD: '<divison>',
  },
  {
    optionA: '<img>',
    optionB: '<src>',
    optionC: '<image>',
    optionD: '<picture>',
  },
  {
    optionA: '<img src="image.jpg" alt="Description">',
    optionB: '<image src="image.jpg" alt="Description">',
    optionC: '<a src="image.jpg" alt="Description">',
    optionD: '<img href="image.jpg" alt="Description">',
  },
  {
    optionA: 'href',
    optionB: 'src',
    optionC: 'url',
    optionD: 'link',
  },
  {
    optionA: '<button>',
    optionB: '<click>',
    optionC: '<btn>',
    optionD: '<input>',
  },
  {
    optionA: 'href',
    optionB: 'url',
    optionC: 'src',
    optionD: 'link',
  },
  {
    optionA: 'alt',
    optionB: 'title',
    optionC: 'src',
    optionD: 'href',
  },
  {
    optionA: '<input type="checkbox">',
    optionB: '<input type="check">',
    optionC: '<checkbox>',
    optionD: '<check>',
  },
  {
    optionA: '<input type="radio">',
    optionB: '<radio>',
    optionC: '<input type="option">',
    optionD: '<input type="circle">',
  },
  {
    optionA: 'Defines a hyperlink',
    optionB: 'Defines an image',
    optionC: 'Defines a button',
    optionD: 'Defines a line break',
  },
  {
    optionA: 'Creates a line break',
    optionB: 'Creates a paragraph',
    optionC: 'Creates a hyperlink',
    optionD: 'Creates a division',
  },
  {
    optionA: '<body bgcolor="yellow">',
    optionB: '<body style="background-color: yellow;">',
    optionC: '<bg-color="yellow">',
    optionD: '<background-color="yellow">',
  },
  {
    optionA: 'HyperText Markup Language',
    optionB: 'HyperText MakeUp Language',
    optionC: 'HyperTextLink Markup Language',
    optionD: 'HyperText Website Markup Language',
  }
];

const correctOptions = [
  'HyperText Markup Language', 'W3C', '<h1>', '<br>', '<strong>',
  'Cascading Style Sheets', 'CSS', '<a>', '<p>', '<ul>',
  '<ol>', '<td>', '<div>', '<img>', '<img src="image.jpg" alt="Description">',
  'alt', '<button>', 'href', 'alt', '<input type="checkbox">',
  '<input type="radio">', 'Defines a hyperlink', 'Creates a line break',
  '<body bgcolor="yellow">',
];


//js mcqs

const jsQuestions = [
  'What does DOM stand for?',
  'Which keyword declares variables?',
  'What is the output of typeof null?',
  'What does the "use strict" directive do?',
  'What does the isNaN() function do?',
  'What is the output of 3 + "3"?',
  'What is a closure in JavaScript?',
  'What is the output of typeof NaN?',
  'What is the difference between == and === operators?',
  'Which method adds elements to the end of an array?',
  'What is the purpose of the push() method?',
  'What is the output of typeof []?',
  'What is a callback function?',
  'What is the purpose of the setTimeout() function?',
  'What is the output of typeof undefined?',
  'What is a JavaScript promise?',
  'What does the parseFloat() function do?',
  'What is the output of 5 == "5"?',
  'What does the split() method do?',
  'What does the pop() method do?',
  'What is the output of typeof {}?',
  'What is the purpose of the map() method?',
  'What is the output of 0.1 + 0.2?',
  'What is a higher-order function?',
  'What is the purpose of the filter() method?',
  'What does DOM stand for?',
];

const jsOptions = [
  {
    optionA: 'Document Object Model',
    optionB: 'Data Object Model',
    optionC: 'Dynamic Object Model',
    optionD: 'Document Oriented Model'
  },
  {
    optionA: 'var',
    optionB: 'let',
    optionC: 'const',
    optionD: 'variable'
  },
  {
    optionA: 'object',
    optionB: 'number',
    optionC: 'undefined',
    optionD: 'string'
  },
  {
    optionA: 'Enables strict mode',
    optionB: 'Declares variable',
    optionC: 'Prevents errors',
    optionD: 'None'
  },
  {
    optionA: 'Checks if value is not a number',
    optionB: 'Converts value to a number',
    optionC: 'Returns true if value is a number',
    optionD: 'None'
  },
  {
    optionA: '33',
    optionB: '6',
    optionC: 'NaN',
    optionD: 'Error'
  },
  {
    optionA: 'Function inside another function',
    optionB: 'Function that returns another function',
    optionC: 'Function with no return statement',
    optionD: 'None'
  },
  {
    optionA: 'object',
    optionB: 'number',
    optionC: 'undefined',
    optionD: 'string'
  },
  {
    optionA: 'Type coercion',
    optionB: 'Value comparison',
    optionC: 'Type and value comparison',
    optionD: 'None'
  },
  {
    optionA: 'push()',
    optionB: 'insert()',
    optionC: 'append()',
    optionD: 'addToEnd()'
  },
  {
    optionA: 'Adds one or more elements to the end of an array',
    optionB: 'Removes the last element from an array',
    optionC: 'Adds one or more elements to the beginning of an array',
    optionD: 'None'
  },
  {
    optionA: 'object',
    optionB: 'array',
    optionC: 'undefined',
    optionD: 'string'
  },
  {
    optionA: 'Function passed as an argument to another function',
    optionB: 'Function that executes after a certain period of time',
    optionC: 'Function that returns a promise',
    optionD: 'None'
  },
  {
    optionA: 'Object representing completion or failure of an asynchronous operation',
    optionB: 'Function that executes after a certain period of time',
    optionC: 'Function that returns a promise',
    optionD: 'None'
  },
  {
    optionA: 'Parses a string and returns a floating point number',
    optionB: 'Parses a string and returns an integer',
    optionC: 'Parses a string and returns a boolean',
    optionD: 'None'
  },
  {
    optionA: 'true',
    optionB: 'false',
    optionC: 'undefined',
    optionD: 'Error'
  },
  {
    optionA: 'Splits a string into an array of substrings',
    optionB: 'Joins the elements of an array into a string',
    optionC: 'Removes the last element from an array',
    optionD: 'None'
  },
  {
    optionA: 'Removes the last element from an array',
    optionB: 'Adds one or more elements to the end of an array',
    optionC: 'Removes the first element from an array',
    optionD: 'None'
  },
  {
    optionA: 'object',
    optionB: 'number',
    optionC: 'undefined',
    optionD: 'string'
  },
  {
    optionA: 'Creates a new array with the results of calling a provided function on every element in the calling array',
    optionB: 'Filters the elements of an array based on a provided function',
    optionC: 'Sorts the elements of an array in place and returns the sorted array',
    optionD: 'None'
  },
  {
    optionA: '0.3',
    optionB: '0.30000000000000004',
    optionC: '0.31',
    optionD: '0.2'
  },
  {
    optionA: 'Function that takes another function as an argument or returns a function',
    optionB: 'Function that operates on other functions',
    optionC: 'Function that executes after a certain period of time',
    optionD: 'None'
  },
  {
    optionA: 'Filters the elements of an array based on a provided function',
    optionB: 'Creates a new array with the results of calling a provided function on every element in the calling array',
    optionC: 'Sorts the elements of an array in place and returns the sorted array',
    optionD: 'None'
  },
  { optionA: 'Document Object Model',
    optionB: 'Data Object Model',
    optionC: 'Dynamic Object Model',
    optionD: 'Document Oriented Model',
  }
];

const jsCorrectOptions = [
  'Document Object Model', 'var', 'object', 'Enables strict mode',
  'Checks if value is not a number', '33', 'Function inside another function',
  'object', 'Type and value comparison', 'push()',
  'Adds one or more elements to the end of an array', 'object',
  'Function passed as an argument to another function',
  'Object representing completion or failure of an asynchronous operation',
  'undefined', 'Object representing completion or failure of an asynchronous operation',
  'Parses a string and returns a floating point number', 'true',
  'Splits a string into an array of substrings', 'Removes the last element from an array',
  'object', 'Creates a new array with the results of calling a provided function on every element in the calling array',
  '0.30000000000000004', 'Function that takes another function as an argument or returns a function',
  'Filters the elements of an array based on a provided function','Document Object Model'
];



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




var Quizsection = document.querySelector('.quiz-section');
var QuizQuestionNum = document.querySelector('.question-num');
var QuizQuestion = document.querySelector('.question');
var A = document.querySelector('.A');
var B = document.querySelector('.B');
var C = document.querySelector('.C');
var D = document.querySelector('.D');
//var timerMins = document.querySelector('.timer-mins');
//var timerSec = document.querySelector('.timer-sec');
//function for html questions
function htmlQuizStart() {
  flag = 0;
  intervalID = setInterval(timerSec, 1000);

  QuizQuestionNum.innerHTML = index + 1;
  QuizQuestion.innerHTML = htmlQuestions[index];
  A.innerText = htmlOptions[index].optionA;
  B.innerText = htmlOptions[index].optionB;
  C.innerText = htmlOptions[index].optionC;
  D.innerText = htmlOptions[index].optionD;


}



//function for html questions
function jsQuizStart() {
  flag = 0;
  intervalID = setInterval(timerSec, 1000);


  QuizQuestionNum.innerHTML = index + 1;
  QuizQuestion.innerHTML = jsQuestions[index];
  A.innerText = jsOptions[index].optionA;
  B.innerText = jsOptions[index].optionB;
  C.innerText = jsOptions[index].optionC;
  D.innerText = jsOptions[index].optionD;


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
  if (index < htmlQuestions.length-1 ) {

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

  if(quiz='html'){
    htmlQuizStart();
  }

  else if(quiz='js'){
    jsQuizStart();
  }

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