let flag = 0;
function headerFlag() {
  flag = 1;
  console.warn(flag)

}
function checkFlag() {
  if (flag == 1) {
    document.querySelector('.navbar-toggler.toggler-icon').click();
    flag = 0;
    console.warn(flag)

  }
}



//variables for timer
var timerSeconds = 59;
var timerMinutes = 4;


//making login button to left

let navbar = document.querySelector('.navbar-toggler');
let displayStyle = window.getComputedStyle(navbar).display;


if (displayStyle == 'none') {
  document.querySelector('.login-btn').style.position = 'absolute';
  document.querySelector('.login-btn').style.left = '85vw';

}

else {
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
    optionB: 'style="background-color: yellow;"',
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

const htmlCorrectOptions = [
  'HyperText Markup Language', 'W3C', '<h1>', '<br>', '<strong>',
  'Cascading Style Sheets', 'CSS', '<a>', '<p>', '<ul>',
  '<ol>', '<td>', '<div>', '<img>', '<img src="image.jpg" alt="Description">',
  'alt', '<button>', 'href', 'alt', '<input type="checkbox">',
  '<input type="radio">', 'Defines a hyperlink', 'Creates a line break',
  '<body bgcolor="yellow">',
];

//css mcqs

const cssQuestions = [
  'What does CSS stand for?',
  'Which property changes text color?',
  'Which property sets font size?',
  'Which property controls element spacing?',
  'Which property hides an element?',
  'What is the default display value of div?',
  'What property aligns text horizontally?',
  'Which property sets element width?',
  'Which property sets element height?',
  'What does CSS specificity determine?',
  'Which property creates rounded corners?',
  'Which property sets background color?',
  'Which property controls element position?',
  'Which property removes default list styles?',
  'Which property adds shadow to text?',
  'What does CSS box-sizing property do?',
  'What property hides element overflow?',
  'Which property animates elements?',
  'Which property changes cursor style?',
  'What property sets element border?',
  'Which property sets element opacity?',
  'What does CSS z-index control?',
  'What does CSS transition do?',
  'What property controls element rotation?',
  'What is the default value of position property?',
];

const cssOptions = [
  {
    optionA: 'Cascading Style Sheets',
    optionB: 'Creative Style Sheets',
    optionC: 'Colorful Style Sheets',
    optionD: 'Cute Style Sheets'
  },
  {
    optionA: 'color',
    optionB: 'font-color',
    optionC: 'text-color',
    optionD: 'font-style'
  },
  {
    optionA: 'font-size',
    optionB: 'text-size',
    optionC: 'size',
    optionD: 'font'
  },
  {
    optionA: 'margin',
    optionB: 'padding',
    optionC: 'spacing',
    optionD: 'border'
  },
  {
    optionA: 'display',
    optionB: 'visible',
    optionC: 'hidden',
    optionD: 'opacity'
  },
  {
    optionA: 'block',
    optionB: 'inline',
    optionC: 'flex',
    optionD: 'grid'
  },
  {
    optionA: 'text-align',
    optionB: 'align',
    optionC: 'horizontal-align',
    optionD: 'align-text'
  },
  {
    optionA: 'width',
    optionB: 'size',
    optionC: 'length',
    optionD: 'dimension'
  },
  {
    optionA: 'height',
    optionB: 'length',
    optionC: 'size',
    optionD: 'dimension'
  },
  {
    optionA: 'Specificity of styles',
    optionB: 'Number of elements',
    optionC: 'Importance of styles',
    optionD: 'Priority of styles'
  },
  {
    optionA: 'border-radius',
    optionB: 'round-corner',
    optionC: 'corner-radius',
    optionD: 'curve'
  },
  {
    optionA: 'background-color',
    optionB: 'color',
    optionC: 'background',
    optionD: 'bg-color'
  },
  {
    optionA: 'position',
    optionB: 'placement',
    optionC: 'align',
    optionD: 'spacing'
  },
  {
    optionA: 'list-style',
    optionB: 'style-list',
    optionC: 'list',
    optionD: 'list-style-type'
  },
  {
    optionA: 'text-shadow',
    optionB: 'shadow-text',
    optionC: 'text-effect',
    optionD: 'shadow-effect'
  },
  {
    optionA: 'Defines how an element should be sized',
    optionB: 'Determines text size',
    optionC: 'Adjusts element spacing',
    optionD: 'Controls text alignment'
  },
  {
    optionA: 'overflow',
    optionB: 'hide-overflow',
    optionC: 'hide',
    optionD: 'overflow-hidden'
  },
  {
    optionA: 'animation',
    optionB: 'animate',
    optionC: 'transition',
    optionD: 'transform'
  },
  {
    optionA: 'cursor',
    optionB: 'pointer',
    optionC: 'hover',
    optionD: 'click'
  },
  {
    optionA: 'border',
    optionB: 'border-style',
    optionC: 'line',
    optionD: 'outline'
  },
  {
    optionA: 'opacity',
    optionB: 'transparent',
    optionC: 'visibility',
    optionD: 'alpha'
  },
  {
    optionA: 'Stacking order of elements',
    optionB: 'Text shadow effect',
    optionC: 'List styles',
    optionD: 'Element opacity'
  },
  {
    optionA: 'Creates smooth transitions',
    optionB: 'Applies animation effects',
    optionC: 'Defines element positioning',
    optionD: 'Controls element rotation'
  },
  {
    optionA: 'transform',
    optionB: 'rotate',
    optionC: 'rotation',
    optionD: 'rotate-element'
  },
  {
    optionA: 'static',
    optionB: 'fixed',
    optionC: 'relative',
    optionD: 'absolute'
  }
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
    optionA: 'Adds elements to end of an array',
    optionB: 'Removes last element from  array',
    optionC: 'Adds elements to the beg of an array',
    optionD: 'None'
  },
  {
    optionA: 'object',
    optionB: 'array',
    optionC: 'undefined',
    optionD: 'string'
  },
  {
    optionA: 'Function passed to another function',
    optionB: 'Function executes after a certain time',
    optionC: 'Function that returns a promise',
    optionD: 'None'
  },
  {
    optionA: 'failure of an asynchronous operation',
    optionB: 'Function executes after a certain time',
    optionC: 'Function that returns a promise',
    optionD: 'None'
  },
  {
    optionA: 'returns a floating point number',
    optionB: 'Parses a string, returns an integer',
    optionC: 'Parses a string, returns a boolean',
    optionD: 'None'
  },
  {
    optionA: 'true',
    optionB: 'false',
    optionC: 'undefined',
    optionD: 'Error'
  },
  {
    optionA: 'Splits string into array of substrings',
    optionB: 'Joins elements of array into string',
    optionC: 'Removes the last element from an array',
    optionD: 'None'
  },
  {
    optionA: 'Removes the last element from an array',
    optionB: 'Add elements to the end of an array',
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
    optionA: 'Creates a new array',
    optionB: 'Filters the elements of an array',
    optionC: 'Sorts the elements of an array ',
    optionD: 'None'
  },
  {
    optionA: '0.3',
    optionB: '0.300000000004',
    optionC: '0.31',
    optionD: '0.2'
  },
  {
    optionA: 'Function takes functas arg',
    optionB: 'Function operates on other funct',
    optionC: 'Function that run after certain time',
    optionD: 'None'
  },
  {
    optionA: 'Filters the elements',
    optionB: 'Creates a new array',
    optionC: 'Sorts the elements of an array',
    optionD: 'None'
  },
  {
    optionA: 'Document Object Model',
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
  'Filters the elements of an array based on a provided function', 'Document Object Model'
];

//java

const javaQuestions = [
  'What is Java?',
  'Who developed Java programming language?',
  'What year was Java first released?',
  'Which keyword is used to declare a class in Java?',
  'Which data type is used to store integer values in Java?',
  'Which operator is used for conditional statements in Java?',
  'Which loop is used for iterating a block of code in Java?',
  'Which keyword is used to define a method in Java?',
  'What is the superclass of all classes in Java?',
  'Which keyword is used to refer to the current instance of the class in Java?',
  'What is the default value of int variable in Java?',
  'Which method is called when an object is created in Java?',
  'Which package contains the Scanner class in Java?',
  'Which method is used to read input from the console in Java?',
  'What does JVM stand for?',
  'Which keyword is used to create a new object in Java?',
  'Which data type is used to store characters in Java?',
  'What is the entry point for a Java application?',
  'What is the output of 5 + 3 * 2 in Java?',
  'What is the output of "Hello" + "World" in Java?',
  'Which method is used to convert a string to uppercase in Java?',
  'What does the static keyword mean in Java?',
  'What is the purpose of the final keyword in Java?',
  'What is the purpose of the break statement in Java?',
  'What does inheritance mean in Java?',
];

const javaOptions = [
  {
    optionA: 'Programming language',
    optionB: 'Operating system',
    optionC: 'Web browser',
    optionD: 'Database management system'
  },
  {
    optionA: 'Microsoft',
    optionB: 'Apple',
    optionC: 'Sun Microsystems',
    optionD: 'Google'
  },
  {
    optionA: '1990',
    optionB: '1995',
    optionC: '2000',
    optionD: '2005'
  },
  {
    optionA: 'class',
    optionB: 'void',
    optionC: 'int',
    optionD: 'new'
  },
  {
    optionA: 'int',
    optionB: 'float',
    optionC: 'boolean',
    optionD: 'String'
  },
  {
    optionA: 'if',
    optionB: 'switch',
    optionC: 'for',
    optionD: 'do-while'
  },
  {
    optionA: 'for',
    optionB: 'while',
    optionC: 'do-while',
    optionD: 'if'
  },
  {
    optionA: 'method',
    optionB: 'void',
    optionC: 'function',
    optionD: 'class'
  },
  {
    optionA: 'Object',
    optionB: 'Main',
    optionC: 'Super',
    optionD: 'Class'
  },
  {
    optionA: 'this',
    optionB: 'super',
    optionC: 'self',
    optionD: 'instance'
  },
  {
    optionA: '0',
    optionB: '1',
    optionC: '-1',
    optionD: 'null'
  },
  {
    optionA: 'init',
    optionB: 'main',
    optionC: 'start',
    optionD: 'run'
  },
  {
    optionA: 'java.lang',
    optionB: 'java.io',
    optionC: 'java.util',
    optionD: 'java.lang.reflect'
  },
  {
    optionA: 'read',
    optionB: 'input',
    optionC: 'console',
    optionD: 'Scanner'
  },
  {
    optionA: 'Java Virtual Machine',
    optionB: 'Java Visual Machine',
    optionC: 'Java Variable Machine',
    optionD: 'Java Validation Machine'
  },
  {
    optionA: 'new',
    optionB: 'create',
    optionC: 'instance',
    optionD: 'object'
  },
  {
    optionA: 'char',
    optionB: 'int',
    optionC: 'String',
    optionD: 'boolean'
  },
  {
    optionA: 'main',
    optionB: 'start',
    optionC: 'run',
    optionD: 'execute'
  },
  {
    optionA: '11',
    optionB: '16',
    optionC: '10',
    optionD: '13'
  },
  {
    optionA: 'HelloWorld',
    optionB: 'Hello World',
    optionC: 'HelloWorld',
    optionD: 'Hello, World'
  },
  {
    optionA: 'toUpperCase',
    optionB: 'toLowerCase',
    optionC: 'capitalize',
    optionD: 'trim'
  },
  {
    optionA: 'It can be accessed without creating an instance of the class',
    optionB: 'It can be accessed only by the class that defines it',
    optionC: 'It can be modified after it is initialized',
    optionD: 'It can be accessed from any method in the class'
  },
  {
    optionA: 'It indicates that a variable cannot be changed',
    optionB: 'It indicates that a method cannot be overridden',
    optionC: 'It indicates that a class cannot be extended',
    optionD: 'It indicates that a method cannot be accessed'
  },
  {
    optionA: 'It terminates the current loop',
    optionB: 'It terminates the entire program',
    optionC: 'It skips the next iteration of the loop',
    optionD: 'It skips the entire loop'
  },
  {
    optionA: 'It allows a class to inherit properties and methods of another class',
    optionB: 'It allows a class to have multiple constructors',
    optionC: 'It allows a class to implement multiple interfaces',
    optionD: 'It allows a class to override methods of another class'
  }
];

//python

const pythonQuestions = [
  'What is Python?',
  'Who developed Python programming language?',
  'What year was Python first released?',
  'Which keyword is used to define a function in Python?',
  'Which data type is used to store a sequence of characters in Python?',
  'Which operator is used for exponentiation in Python?',
  'Which loop is used for iterating a block of code a specific number of times in Python?',
  'Which keyword is used to declare a variable in Python?',
  'What is the output of 5 / 2 in Python?',
  'Which method is used to print output in Python?',
  'Which module is used for mathematical operations in Python?',
  'Which method is used to convert a string to uppercase in Python?',
  'Which method is used to remove whitespace from the beginning and end of a string in Python?',
  'What is the purpose of the if statement in Python?',
  'What does the range() function do in Python?',
  'What is the purpose of the break statement in Python?',
  'Which keyword is used to define a class in Python?',
  'Which data type is used to store a collection of items in Python?',
  'What does the append() method do in Python?',
  'Which method is used to get the length of a list in Python?',
  'What does the pop() method do in Python?',
  'What is the purpose of the return statement in Python?',
  'What is the output of 3 * "abc" in Python?',
  'Which module is used for working with dates and times in Python?',
  'What is the purpose of the pass statement in Python?',
];

const pythonOptions = [
  {
    optionA: 'Programming language',
    optionB: 'Operating system',
    optionC: 'Web browser',
    optionD: 'Database management system'
  },
  {
    optionA: 'Microsoft',
    optionB: 'Apple',
    optionC: 'Guido van Rossum',
    optionD: 'Google'
  },
  {
    optionA: '1990',
    optionB: '1995',
    optionC: '2000',
    optionD: '2005'
  },
  {
    optionA: 'def',
    optionB: 'function',
    optionC: 'define',
    optionD: 'method'
  },
  {
    optionA: 'str',
    optionB: 'int',
    optionC: 'list',
    optionD: 'tuple'
  },
  {
    optionA: '**',
    optionB: '^',
    optionC: '*',
    optionD: '//'
  },
  {
    optionA: 'for',
    optionB: 'while',
    optionC: 'do-while',
    optionD: 'if'
  },
  {
    optionA: 'var',
    optionB: 'let',
    optionC: 'const',
    optionD: 'int'
  },
  {
    optionA: '2.5',
    optionB: '2.0',
    optionC: '2',
    optionD: '2.5'
  },
  {
    optionA: 'print()',
    optionB: 'echo()',
    optionC: 'display()',
    optionD: 'show()'
  },
  {
    optionA: 'math',
    optionB: 'cmath',
    optionC: 'random',
    optionD: 'statistics'
  },
  {
    optionA: 'upper()',
    optionB: 'lower()',
    optionC: 'capitalize()',
    optionD: 'trim()'
  },
  {
    optionA: 'trim()',
    optionB: 'strip()',
    optionC: 'clean()',
    optionD: 'remove()'
  },
  {
    optionA: 'To execute code conditionally',
    optionB: 'To define a function',
    optionC: 'To iterate over a sequence',
    optionD: 'To declare a variable'
  },
  {
    optionA: 'Generates a sequence of numbers',
    optionB: 'Generates a random number',
    optionC: 'Generates a list of elements',
    optionD: 'Generates a range of values'
  },
  {
    optionA: 'Terminates the current loop',
    optionB: 'Terminates the program',
    optionC: 'Skips the next iteration of the loop',
    optionD: 'Skips the entire loop'
  },
  {
    optionA: 'class',
    optionB: 'def',
    optionC: 'function',
    optionD: 'method'
  },
  {
    optionA: 'list',
    optionB: 'tuple',
    optionC: 'set',
    optionD: 'dictionary'
  },
  {
    optionA: 'Adds an element to the end of a list',
    optionB: 'Removes an element from a list',
    optionC: 'Returns the length of a list',
    optionD: 'Returns the first element of a list'
  },
  {
    optionA: 'len()',
    optionB: 'size()',
    optionC: 'count()',
    optionD: 'length()'
  },
  {
    optionA: 'Removes the last element from a list',
    optionB: 'Removes the first element from a list',
    optionC: 'Returns the last element of a list',
    optionD: 'Returns the first element of a list'
  },
  {
    optionA: 'To end the execution of a function',
    optionB: 'To terminate the program',
    optionC: 'To return a value from a function',
    optionD: 'To print output to the console'
  },
  {
    optionA: 'abcabcabc',
    optionB: 'abcabc',
    optionC: 'abcabcabcabc',
    optionD: 'Error'
  },
  {
    optionA: 'datetime',
    optionB: 'time',
    optionC: 'date',
    optionD: 'calendar'
  },
  {
    optionA: 'To define a placeholder function',
    optionB: 'To execute code conditionally',
    optionC: 'To iterate over a sequence',
    optionD: 'To terminate the program'
  },
];

//DataBase
const dbQuestions = [
  'What is a database?',
  'Which type of database stores data in tables?',
  'What does SQL stand for?',
  'Which keyword is used to retrieve data from a database in SQL?',
  'Which statement is used to insert data into a database table in SQL?',
  'Which statement is used to update data in a database table in SQL?',
  'Which statement is used to delete data from a database table in SQL?',
  'Which operator is used to filter data based on multiple conditions in SQL?',
  'Which keyword is used to filter data based on a specific condition in SQL?',
  'Which function is used to count the number of rows in a table in SQL?',
  'Which function is used to find the maximum value in a column in SQL?',
  'Which function is used to find the minimum value in a column in SQL?',
  'Which function is used to calculate the average value of a column in SQL?',
  'Which function is used to concatenate two or more strings in SQL?',
  'Which function is used to retrieve a portion of a string in SQL?',
  'What is a primary key in a database table?',
  'What is a foreign key in a database table?',
  'What is a relational database?',
  'What is normalization in database design?',
  'What is denormalization in database design?',
  'What is a database index?',
  'What is the purpose of a database view?',
  'What is a stored procedure in a database?',
  'What is a database trigger?',
  'What is a transaction in a database?',
];

const dbOptions = [
  {
    optionA: 'A collection of data',
    optionB: 'A programming language',
    optionC: 'A web server',
    optionD: 'A data structure'
  },
  {
    optionA: 'Relational database',
    optionB: 'NoSQL database',
    optionC: 'Graph database',
    optionD: 'Document database'
  },
  {
    optionA: 'Structured Query Language',
    optionB: 'Standard Query Language',
    optionC: 'System Query Language',
    optionD: 'Simple Query Language'
  },
  {
    optionA: 'SELECT',
    optionB: 'INSERT',
    optionC: 'UPDATE',
    optionD: 'DELETE'
  },
  {
    optionA: 'INSERT INTO',
    optionB: 'ADD',
    optionC: 'UPDATE',
    optionD: 'CREATE'
  },
  {
    optionA: 'UPDATE',
    optionB: 'INSERT INTO',
    optionC: 'DELETE FROM',
    optionD: 'MODIFY'
  },
  {
    optionA: 'DELETE FROM',
    optionB: 'REMOVE',
    optionC: 'ERASE',
    optionD: 'DROP'
  },
  {
    optionA: 'AND',
    optionB: 'OR',
    optionC: 'NOT',
    optionD: 'BETWEEN'
  },
  {
    optionA: 'WHERE',
    optionB: 'FILTER',
    optionC: 'SELECT',
    optionD: 'CONDITION'
  },
  {
    optionA: 'COUNT',
    optionB: 'SUM',
    optionC: 'MAX',
    optionD: 'MIN'
  },
  {
    optionA: 'MAX',
    optionB: 'SUM',
    optionC: 'COUNT',
    optionD: 'AVG'
  },
  {
    optionA: 'MIN',
    optionB: 'SUM',
    optionC: 'AVG',
    optionD: 'COUNT'
  },
  {
    optionA: 'CONCAT',
    optionB: 'MERGE',
    optionC: 'COMBINE',
    optionD: 'JOIN'
  },
  {
    optionA: 'SUBSTRING',
    optionB: 'CONCAT',
    optionC: 'TRIM',
    optionD: 'REPLACE'
  },
  {
    optionA: 'A unique identifier for a record',
    optionB: 'A value that must be unique in a column',
    optionC: 'A table that contains primary keys',
    optionD: 'A key that references another table'
  },
  {
    optionA: 'A key that references another table',
    optionB: 'A value that must be unique in a column',
    optionC: 'A table that contains primary keys',
    optionD: 'A unique identifier for a record'
  },
  {
    optionA: 'A database that stores data in multiple tables',
    optionB: 'A database that stores data in a single table',
    optionC: 'A database that stores data in a key-value format',
    optionD: 'A database that stores data in documents'
  },
  {
    optionA: 'The process of organizing data to reduce redundancy and improve efficiency',
    optionB: 'The process of adding redundancy to data to improve performance',
    optionC: 'The process of encrypting data to improve security',
    optionD: 'The process of adding indexes to data to improve retrieval'
  },
  {
    optionA: 'The process of adding redundancy to data to improve performance',
    optionB: 'The process of organizing data to reduce redundancy and improve efficiency',
    optionC: 'The process of encrypting data to improve security',
    optionD: 'The process of adding indexes to data to improve retrieval'
  },
  {
    optionA: 'A data structure that improves the speed of data retrieval',
    optionB: 'A key that uniquely identifies a record in a table',
    optionC: 'A table that contains foreign keys',
    optionD: 'A table that contains indexes'
  },
  {
    optionA: 'To provide an alternative way to access data in a database',
    optionB: 'To improve the security of data in a database',
    optionC: 'To enforce data integrity in a database',
    optionD: 'To create a snapshot of data in a database'
  },
  {
    optionA: 'A set of SQL statements that perform a specific task',
    optionB: 'A table that contains stored data',
    optionC: 'A function that performs calculations on data',
    optionD: 'A view that displays data from multiple tables'
  },
  {
    optionA: 'A database event that automatically executes a set of SQL statements',
    optionB: 'A constraint that enforces data integrity in a database',
    optionC: 'A trigger that fires when data is modified in a table',
    optionD: 'A key that uniquely identifies a record in a table'
  },
  {
    optionA: 'A group of SQL statements that are executed as a single unit of work',
    optionB: 'A constraint that enforces data integrity in a database',
    optionC: 'A trigger that fires when data is modified in a table',
    optionD: 'A key that uniquely identifies a record in a table'
  }
];




// CSS
const cssCorrectOptions = [
  'Cascading Style Sheets', 'color', 'font-size', 'margin', 'hidden',
  'block', 'text-align', 'width', 'height', 'Specificity of styles',
  'border-radius', 'background-color', 'position', 'list-style', 'text-shadow',
  'Defines how an element should be sized', 'overflow', 'animation', 'cursor',
  'border', 'opacity', 'Stacking order of elements', 'Creates smooth transitions',
  'rotate', 'static'
];



// Java
const javaCorrectOptions = [
  'Programming language', 'Guido van Rossum', '1995', 'class',
  'int', 'if', 'for', 'method', 'Object', 'this',
  '0', 'init', 'java.util', 'Scanner', 'Java Virtual Machine',
  'new', 'char', 'main', '16', 'HelloWorld',
  'toUpperCase', 'It can be accessed without creating an instance of the class',
  'It indicates that a variable cannot be changed', 'It terminates the current loop',
  'class'
];

// Python
const pythonCorrectOptions = [
  'Programming language', 'Guido van Rossum', '1990', 'def',
  'str', '**', 'for', 'var', '2.5', 'print()',
  'math', 'upper()', 'strip()', 'To execute code conditionally', 'Generates a sequence of numbers',
  'Terminates the current loop', 'class', 'list', 'Adds an element to the end of a list',
  'len()', 'Removes the last element from a list', 'To end the execution of a function',
  'abcabcabc', 'datetime', 'To define a placeholder function'
];

// Database
const databaseCorrectOptions = [
  'A collection of data', 'Relational database', 'Structured Query Language',
  'SELECT', 'INSERT INTO', 'UPDATE', 'DELETE FROM', 'AND',
  'WHERE', 'COUNT', 'MAX', 'MIN', 'AVG', 'CONCAT',
  'SUBSTRING', 'A unique identifier for a record', 'A key that references another table',
  'A database that stores data in multiple tables', 'The process of organizing data to reduce redundancy and improve efficiency',
  'The process of adding redundancy to data to improve performance', 'A data structure that improves the speed of data retrieval',
  'To provide an alternative way to access data in a database', 'A set of SQL statements that perform a specific task',
  'A database event that automatically executes a set of SQL statements', 'A group of SQL statements that are executed as a single unit of work'
];


const mongodbQuestions = [
  'What is MongoDB?',
  'What is a document-based database?',
  'What is a collection in MongoDB?',
  'What is BSON?',
  'What is a document in MongoDB?',
  'What is a primary key in MongoDB?',
  'What is the purpose of indexing in MongoDB?',
  'What is sharding in MongoDB?',
  'What is aggregation in MongoDB?',
  'What is a replica set in MongoDB?',
  'What is the difference between MongoDB and SQL databases?',
  'What is GridFS in MongoDB?',
  'What is the default port number for MongoDB?',
  'What is the role of mongod in MongoDB?',
  'What is the purpose of db.collection.insert() in MongoDB?',
  'What is the role of mongos in MongoDB?',
  'What is the syntax for finding documents in MongoDB?',
  'What is the purpose of $set in MongoDB update operations?',
  'What is a capped collection in MongoDB?',
  'What is the purpose of MongoDB Compass?',
  'What is the role of the _id field in MongoDB documents?',
  'What is the purpose of the $addToSet operator in MongoDB?',
  'What is the role of the WiredTiger storage engine in MongoDB?',
  'What is a covered query in MongoDB?',
  'What is the purpose of the $unwind operator in MongoDB aggregation?',
];

const mongodbOptions = [
  {
    optionA: 'A document-oriented NoSQL database',
    optionB: 'A relational database management system',
    optionC: 'A cloud-based database service',
    optionD: 'A key-value store',
  },
  {
    optionA: 'A database that stores data in the form of tables',
    optionB: 'A database that stores data in the form of documents',
    optionC: 'A database that stores data in the form of key-value pairs',
    optionD: 'A database that stores data in the form of graphs',
  },
  {
    optionA: 'A group of related documents',
    optionB: 'A data structure for storing documents',
    optionC: 'A group of related tables',
    optionD: 'A data structure for storing tables',
  },
  {
    optionA: 'Binary JSON',
    optionB: 'Binary Secure Object Notation',
    optionC: 'Binary Serialized Object Notation',
    optionD: 'Binary Structured Object Notation',
  },
  {
    optionA: 'A JSON-like data structure',
    optionB: 'A JSON object',
    optionC: 'A JSON array',
    optionD: 'A binary data structure',
  },
  {
    optionA: 'A unique identifier for a document',
    optionB: 'A field that stores foreign keys',
    optionC: 'A field that indexes the document',
    optionD: 'A field that stores binary data',
  },
  {
    optionA: 'To improve query performance',
    optionB: 'To enforce data integrity',
    optionC: 'To organize data into groups',
    optionD: 'To compress data for storage',
  },
  {
    optionA: 'A method for distributing data across multiple servers',
    optionB: 'A method for organizing data within a single server',
    optionC: 'A method for encrypting data in transit',
    optionD: 'A method for compressing data for storage',
  },
  {
    optionA: 'The process of grouping and processing data',
    optionB: 'The process of replicating data across multiple servers',
    optionC: 'The process of organizing data into collections',
    optionD: 'The process of indexing data for faster retrieval',
  },
  {
    optionA: 'A set of MongoDB instances that maintain the same data',
    optionB: 'A set of MongoDB collections that store related data',
    optionC: 'A set of MongoDB databases that share data',
    optionD: 'A set of MongoDB documents that form a cluster',
  },
  {
    optionA: 'MongoDB is a document-oriented NoSQL database, while SQL databases are relational databases.',
    optionB: 'MongoDB uses a flexible schema, while SQL databases use a fixed schema.',
    optionC: 'MongoDB supports horizontal scaling, while SQL databases do not.',
    optionD: 'MongoDB stores data in JSON-like documents, while SQL databases store data in tables.',
  },
  {
    optionA: 'A file storage system for storing large files in MongoDB',
    optionB: 'A data modeling technique for organizing documents in MongoDB',
    optionC: 'A query language for performing complex queries in MongoDB',
    optionD: 'A caching mechanism for improving query performance in MongoDB',
  },
  {
    optionA: '27017',
    optionB: '3306',
    optionC: '5432',
    optionD: '1521',
  },
  {
    optionA: 'The primary daemon process for the MongoDB server',
    optionB: 'The primary client interface for interacting with MongoDB',
    optionC: 'The primary administrative tool for managing MongoDB',
    optionD: 'The primary database engine for storing data in MongoDB',
  },
  {
    optionA: 'To insert documents into a collection',
    optionB: 'To update documents in a collection',
    optionC: 'To delete documents from a collection',
    optionD: 'To query documents from a collection',
  },
  {
    optionA: 'The primary query router for MongoDB sharded clusters',
    optionB: 'The primary storage engine for MongoDB collections',
    optionC: 'The primary indexing mechanism for MongoDB collections',
    optionD: 'The primary replication mechanism for MongoDB replica sets',
  },
  {
    optionA: 'db.collection.find()',
    optionB: 'db.collection.insert()',
    optionC: 'db.collection.update()',
    optionD: 'db.collection.remove()',
  },
  {
    optionA: 'To set the value of a field in a document',
    optionB: 'To add a new field to a document',
    optionC: 'To increment the value of a field in a document',
    optionD: 'To unset a field in a document',
  },
  {
    optionA: 'A fixed-size collection that automatically discards older documents as new ones are added',
    optionB: 'A collection with a maximum size limit that prevents documents from exceeding a certain size',
    optionC: 'A collection with a fixed schema that enforces data integrity constraints',
    optionD: 'A collection that stores documents in a circular buffer',
  },
  {
    optionA: 'To visualize and interact with MongoDB data',
    optionB: 'To manage MongoDB server instances',
    optionC: 'To create and manage MongoDB databases and collections',
    optionD: 'To monitor MongoDB performance and health',
  },
  {
    optionA: 'A unique identifier for a document',
    optionB: 'A reserved field for internal use by MongoDB',
    optionC: 'A primary key field that uniquely identifies a document',
    optionD: 'A secondary index field for optimizing query performance',
  },
  {
    optionA: 'To add elements to an array field in a document',
    optionB: 'To remove duplicate elements from an array field in a document',
    optionC: 'To add a new array field to a document',
    optionD: 'To remove elements from an array field in a document',
  },
  {
    optionA: 'The default storage engine used by MongoDB',
    optionB: 'The primary indexing mechanism used by MongoDB',
    optionC: 'The primary query optimization technique used by MongoDB',
    optionD: 'The primary replication mechanism used by MongoDB',
  },
  {
    optionA: 'A query that retrieves all fields of a document without scanning the entire document',
    optionB: 'A query that retrieves only selected fields of a document',
    optionC: 'A query that retrieves documents using only index keys',
    optionD: 'A query that retrieves documents using a covered index',
  },
  {
    optionA: 'To deconstruct arrays in documents and output one document for each element of the array',
    optionB: 'To perform a left outer join between two collections',
    optionC: 'To group documents by a specified field and calculate aggregate values for each group',
    optionD: 'To filter documents based on specified criteria',
  },
];

const mongodbCorrectOptions = [
  'A document-oriented NoSQL database',
  'A database that stores data in the form of documents',
  'A group of related documents',
  'Binary JSON',
  'A JSON-like data structure',
  'A unique identifier for a document',
  'To improve query performance',
  'A method for distributing data across multiple servers',
  'The process of grouping and processing data',
  'A set of MongoDB instances that maintain the same data',
  'MongoDB stores data in JSON-like documents, while SQL databases store data in tables.',
  'A file storage system for storing large files in MongoDB',
  '27017',
  'The primary daemon process for the MongoDB server',
  'To insert documents into a collection',
  'The primary query router for MongoDB sharded clusters',
  'db.collection.find()',
  'To set the value of a field in a document',
  'A fixed-size collection that automatically discards older documents as new ones are added',
  'To visualize and interact with MongoDB data',
  'A unique identifier for a document',
  'To add elements to an array field in a document',
  'The default storage engine used by MongoDB',
  'A query that retrieves documents using a covered index',
  'To deconstruct arrays in documents and output one document for each element of the array',
];

const reactQuestions = [
  'What is React?',
  'What does JSX stand for?',
  'What is the purpose of Redux in React applications?',
  'Which of the following is a component lifecycle method in React?',
  'What is the virtual DOM in React?',
  'What is a React hook?',
  'What is the purpose of props in React?',
  'What is state in React?',
  'What is the purpose of setState() in React?',
  'What is React Router used for?',
  'What is the purpose of ReactDOM.render() in React?',
  'What is the role of componentDidMount() method in React?',
  'What is the difference between state and props in React?',
  'What is the purpose of keys in React lists?',
  'What is a higher-order component (HOC) in React?',
  'What is the purpose of React.Fragment?',
  'What is a controlled component in React?',
  'What is the significance of the render method in React components?',
  'What is the purpose of shouldComponentUpdate() method in React?',
  'What is JSX syntax?',
  'What is the purpose of React Native?',
  'What is the role of the constructor() method in React components?',
  'What is the purpose of the dangerouslySetInnerHTML attribute in React?',
  'What is a functional component in React?',
  'What is the purpose of keys in React lists?',
];

const reactOptions = [
  {
    optionA: 'A JavaScript library for building user interfaces',
    optionB: 'A programming language',
    optionC: 'A database management system',
    optionD: 'A networking protocol',
  },
  {
    optionA: 'JavaScript XML',
    optionB: 'JavaScript Extension',
    optionC: 'JavaScript XHTML',
    optionD: 'JavaScript Syntax Extension',
  },
  {
    optionA: 'To manage application state',
    optionB: 'To handle routing',
    optionC: 'To perform server-side rendering',
    optionD: 'To handle database queries',
  },
  {
    optionA: 'componentDidMount',
    optionB: 'render',
    optionC: 'constructor',
    optionD: 'setState',
  },
  {
    optionA: 'A virtual representation of the DOM tree',
    optionB: 'A real-time database',
    optionC: 'A database management system',
    optionD: 'A server-side rendering engine',
  },
  {
    optionA: 'A JavaScript function that lets you use state and other React features without writing a class',
    optionB: 'A graphical user interface component',
    optionC: 'A function that converts JSX into JavaScript',
    optionD: 'A method for updating component state',
  },
  {
    optionA: 'To pass data from parent to child components',
    optionB: 'To manage application state',
    optionC: 'To define the structure of a component',
    optionD: 'To render HTML elements',
  },
  {
    optionA: 'The current status of a component',
    optionB: 'The initial configuration of a component',
    optionC: 'A method for updating component state',
    optionD: 'A collection of immutable values',
  },
  {
    optionA: 'To update the component state and re-render the component',
    optionB: 'To handle user interactions',
    optionC: 'To define the structure of a component',
    optionD: 'To initialize component state',
  },
  {
    optionA: 'For client-side navigation in a single-page application',
    optionB: 'To render React components on the server',
    optionC: 'To manage application state',
    optionD: 'To handle database queries',
  },
  {
    optionA: 'To render a React component into the DOM',
    optionB: 'To handle asynchronous operations',
    optionC: 'To manage application state',
    optionD: 'To define the structure of a component',
  },
  {
    optionA: 'To initialize component state',
    optionB: 'To perform cleanup tasks when a component is unmounted',
    optionC: 'To fetch data from an external API',
    optionD: 'To update component state after rendering',
  },
  {
    optionA: 'State is mutable and controlled by the component itself, whereas props are immutable and controlled by the parent component.',
    optionB: 'Props are mutable and controlled by the component itself, whereas state is immutable and controlled by the parent component.',
    optionC: 'State and props are the same thing in React.',
    optionD: 'State and props are both immutable and controlled by the parent component.',
  },
  {
    optionA: 'To uniquely identify elements in a list and optimize rendering performance',
    optionB: 'To provide additional information about each element in a list',
    optionC: 'To define the structure of a list',
    optionD: 'To specify the order of elements in a list',
  },
  {
    optionA: 'A component that takes another component as an argument and returns a new component',
    optionB: 'A component with a high level of complexity',
    optionC: 'A component that renders other components',
    optionD: 'A component that can be reused across different parts of an application',
  },
  {
    optionA: 'To group multiple elements without adding extra nodes to the DOM',
    optionB: 'To define the structure of a component',
    optionC: 'To specify the layout of a web page',
    optionD: 'To provide additional information about each element in a list',
  },
  {
    optionA: 'A component whose value is controlled by React, not by the DOM',
    optionB: 'A component with internal state management',
    optionC: 'A component with no internal state',
    optionD: 'A component that renders HTML elements directly',
  },
  {
    optionA: 'To define the structure of a component',
    optionB: 'To handle user interactions',
    optionC: 'To manage application state',
    optionD: 'To provide additional information about each element in a list',
  },
  {
    optionA: 'To determine whether a component should re-render after receiving new props or state',
    optionB: 'To initialize component state',
    optionC: 'To update the component state and re-render the component',
    optionD: 'To perform cleanup tasks when a component is unmounted',
  },
  {
    optionA: 'A syntax extension for JavaScript that allows XML-like syntax to be used in React components',
    optionB: 'A JavaScript framework for building user interfaces',
    optionC: 'A server-side rendering engine',
    optionD: 'A version control system for web development',
  },
  {
    optionA: 'A framework for building native mobile apps using JavaScript and React',
    optionB: 'A server-side rendering engine',
    optionC: 'A cloud-based platform for building web applications',
    optionD: 'A JavaScript library for building user interfaces',
  },
  {
    optionA: 'To initialize component state',
    optionB: 'To perform cleanup tasks when a component is unmounted',
    optionC: 'To define the initial configuration of a component',
    optionD: 'To render HTML elements',
  },
  {
    optionA: 'To set HTML directly from React',
    optionB: 'To handle user input in forms',
    optionC: 'To define the structure of a component',
    optionD: 'To specify the order of elements in a list',
  },
  {
    optionA: 'A function component is a JavaScript function that accepts props and returns React elements, while a class component is a JavaScript class that extends React.Component and has its own state.',
    optionB: 'A function component is a component that renders functional elements, while a class component is a component that renders class-based elements.',
    optionC: 'A function component is a component with internal state management, while a class component is a component with no internal state.',
    optionD: 'A function component is a component that renders HTML elements directly, while a class component is a component that renders other components.',
  },
  {
    optionA: 'To uniquely identify elements in a list and optimize rendering performance',
    optionB: 'To specify the layout of a web page',
    optionC: 'To provide additional information about each element in a list',
    optionD: 'To define the structure of a component',
  },
];

const reactCorrectOptions = [
  'A JavaScript library for building user interfaces',
  'JavaScript XML',
  'To manage application state',
  'componentDidMount',
  'A virtual representation of the DOM tree',
  'A JavaScript function that lets you use state and other React features without writing a class',
  'To pass data from parent to child components',
  'The current status of a component',
  'To update the component state and re-render the component',
  'For client-side navigation in a single-page application',
  'To render a React component into the DOM',
  'To perform cleanup tasks when a component is unmounted',
  'State is mutable and controlled by the component itself, whereas props are immutable and controlled by the parent component.',
  'To uniquely identify elements in a list and optimize rendering performance',
  'A component that takes another component as an argument and returns a new component',
  'To group multiple elements without adding extra nodes to the DOM',
  'A component whose value is controlled by React, not by the DOM',
  'To define the structure of a component',
  'To determine whether a component should re-render after receiving new props or state',
  'A syntax extension for JavaScript that allows XML-like syntax to be used in React components',
  'A framework for building native mobile apps using JavaScript and React',
  'To initialize component state',
  'To set HTML directly from React',
  'A function component is a JavaScript function that accepts props and returns React elements, while a class component is a JavaScript class that extends React.Component and has its own state.',
  'To uniquely identify elements in a list and optimize rendering performance',
];

const firebaseQuestions = [
  'What is Firebase?',
  'What is Firestore in Firebase?',
  'What is Realtime Database in Firebase?',
  'What is Firebase Authentication?',
  'What is Firebase Cloud Messaging?',
  'What is Firebase Hosting?',
  'What is Firebase Functions?',
  'What is Firebase Storage?',
  'What is Firebase Crashlytics?',
  'What is Firebase Analytics?',
  'What is Firebase Performance Monitoring?',
  'What is Firebase Remote Config?',
  'What is Firebase Test Lab?',
  'What is Firebase App Distribution?',
  'What is Firebase Machine Learning?',
  'What is Firebase Predictions?',
  'What is Firebase A/B Testing?',
  'What is Firebase Dynamic Links?',
  'What is Firebase AdMob?',
  'What is Firebase Cloud Firestore Security Rules?',
  'What is Firebase Cloud Functions?',
  'What is Firebase Cloud Storage?',
  'What is Firebase Hosting?',
  'What is Firebase Test Lab?',
  'What is Firebase App Distribution?',
];

const firebaseOptions = [
  {
    optionA: 'A cloud-based platform for building mobile and web applications',
    optionB: 'A serverless computing platform',
    optionC: 'A database management system',
    optionD: 'A version control system',
  },
  {
    optionA: 'A NoSQL document database',
    optionB: 'A real-time database',
    optionC: 'A cloud storage service',
    optionD: 'A user authentication service',
  },
  {
    optionA: 'A NoSQL database',
    optionB: 'A SQL database',
    optionC: 'A real-time database',
    optionD: 'A cloud storage service',
  },
  {
    optionA: 'A service for authenticating users',
    optionB: 'A service for sending push notifications',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for sending push notifications',
    optionB: 'A service for authenticating users',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for hosting web applications',
    optionB: 'A service for sending push notifications',
    optionC: 'A service for authenticating users',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for testing mobile apps',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for authenticating users',
    optionD: 'A service for sending push notifications',
  },
  {
    optionA: 'A cloud storage service',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for testing mobile apps',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A service for hosting web applications',
    optionB: 'A service for testing mobile apps',
    optionC: 'A service for authenticating users',
    optionD: 'A service for sending crash reports',
  },
  {
    optionA: 'A service for tracking user behavior',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for sending push notifications',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for tracking app performance',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for authenticating users',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for managing app configuration',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for authenticating users',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for testing mobile apps',
    optionB: 'A service for hosting web applications',
    optionC: 'A service for authenticating users',
    optionD: 'A service for sending crash reports',
  },
  {
    optionA: 'A service for distributing pre-trained machine learning models',
    optionB: 'A service for managing app configuration',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A service for predicting user behavior',
    optionB: 'A service for managing app configuration',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A service for conducting experiments on app features',
    optionB: 'A service for managing app configuration',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A service for creating links that dynamically change behavior based on user context',
    optionB: 'A service for managing app configuration',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A service for managing advertisements in mobile apps',
    optionB: 'A service for managing app configuration',
    optionC: 'A service for hosting web applications',
    optionD: 'A service for authenticating users',
  },
  {
    optionA: 'A set of rules that control access to Firestore data',
    optionB: 'A service for sending cloud functions',
    optionC: 'A service for storing files in the cloud',
    optionD: 'A service for hosting web applications',
  },
  {
    optionA: 'A service for sending cloud functions',
    optionB: 'A set of rules that control access to Firestore data',
    optionC: 'A service for storing files in the cloud',
    optionD: 'A service for hosting web applications',
  },
  {
    optionA: 'A service for storing files in the cloud',
    optionB: 'A set of rules that control access to Firestore data',
    optionC: 'A service for sending cloud functions',
    optionD: 'A service for hosting web applications',
  },
  {
    optionA: 'A service for hosting web applications',
    optionB: 'A set of rules that control access to Firestore data',
    optionC: 'A service for sending cloud functions',
    optionD: 'A service for storing files in the cloud',
  },
  {
    optionA: 'A service for sending cloud functions',
    optionB: 'A service for storing files in the cloud',
    optionC: 'A service for distributing pre-trained machine learning models',
    optionD: 'A service for testing mobile apps',
  },
  {
    optionA: 'A service for distributing pre-trained machine learning models',
    optionB: 'A service for sending cloud functions',
    optionC: 'A service for storing files in the cloud',
    optionD: 'A service for testing mobile apps',
  },
];

const firebaseCorrectOptions = [
  'A cloud-based platform for building mobile and web applications',
  'A NoSQL document database',
  'A real-time database',
  'A service for authenticating users',
  'A service for sending push notifications',
  'A service for hosting web applications',
  'A service for testing mobile apps',
  'A cloud storage service',
  'A service for sending crash reports',
  'A service for tracking user behavior',
  'A service for tracking app performance',
  'A service for managing app configuration',
  'A service for testing mobile apps',
  'A service for distributing pre-trained machine learning models',
  'A service for predicting user behavior',
  'A service for conducting experiments on app features',
  'A service for creating links that dynamically change behavior based on user context',
  'A service for managing advertisements in mobile apps',
  'A set of rules that control access to Firestore data',
  'A service for sending cloud functions',
  'A service for storing files in the cloud',
  'A service for hosting web applications',
  'A service for sending cloud functions',
  'A service for distributing pre-trained machine learning models',
];


const hackingQuestions = [
  'What is hacking?',
  'What is a hacker?',
  'What is ethical hacking?',
  'What is black hat hacking?',
  'What is white hat hacking?',
  'What is gray hat hacking?',
  'What is penetration testing?',
  'What is social engineering?',
  'What is phishing?',
  'What is malware?',
  'What is a virus?',
  'What is a worm?',
  'What is a Trojan horse?',
  'What is ransomware?',
  'What is a DoS attack?',
  'What is a DDoS attack?',
  'What is brute-force attack?',
  'What is SQL injection?',
  'What is XSS?',
  'What is network sniffing?',
  'What is password cracking?',
  'What is keylogging?',
  'What is session hijacking?',
  'What is DNS spoofing?',
  'What is MITM attack?',
];

const hackingOptions = [
  {
    optionA: 'Accessing systems without permission',
    optionB: 'Unauthorized system access',
    optionC: 'Unauthorized computer entry',
    optionD: 'System intrusion without consent',
  },
  {
    optionA: 'Unauthorized system intruder',
    optionB: 'Unauthorized system user',
    optionC: 'Security expert',
    optionD: 'Computer programmer',
  },
  {
    optionA: 'Ethical system hacking',
    optionB: 'Legal system intrusion',
    optionC: 'White hat hacking',
    optionD: 'Lawful system entry',
  },
  {
    optionA: 'Malicious hacking activity',
    optionB: 'Illegal hacking practice',
    optionC: 'Unethical system access',
    optionD: 'Harmful system intrusion',
  },
  {
    optionA: 'Ethical system intrusion',
    optionB: 'Legal system access',
    optionC: 'White hat hacking',
    optionD: 'Authorized system entry',
  },
  {
    optionA: 'Neutral system hacking',
    optionB: 'In-between system access',
    optionC: 'Gray area system entry',
    optionD: 'Partly legal system intrusion',
  },
  {
    optionA: 'Security assessment',
    optionB: 'Network evaluation',
    optionC: 'System examination',
    optionD: 'Vulnerability testing',
  },
  {
    optionA: 'Psychological manipulation for access',
    optionB: 'Social network intrusion',
    optionC: 'Human hacking techniques',
    optionD: 'Emotional engineering for access',
  },
  {
    optionA: 'Deceptive online activity',
    optionB: 'Data phishing scam',
    optionC: 'Online identity theft',
    optionD: 'Cyber deception strategy',
  },
  {
    optionA: 'Malicious software',
    optionB: 'Computer virus',
    optionC: 'Harmful program',
    optionD: 'Destructive application',
  },
  {
    optionA: 'Harmful computer code',
    optionB: 'Data corruption software',
    optionC: 'Computer infection',
    optionD: 'Malware threat',
  },
  {
    optionA: 'Self-replicating malware',
    optionB: 'Data worm',
    optionC: 'Harmful software',
    optionD: 'Computer parasite',
  },
  {
    optionA: 'Deceptive software',
    optionB: 'Harmful program',
    optionC: 'Software Trojan',
    optionD: 'Data manipulation tool',
  },
  {
    optionA: 'Data encryption attack',
    optionB: 'Data ransom attack',
    optionC: 'Data kidnapping',
    optionD: 'Ransom data encryption',
  },
  {
    optionA: 'Service denial attack',
    optionB: 'Network disruption attack',
    optionC: 'System overload attack',
    optionD: 'Online service disruption',
  },
  {
    optionA: 'Distributed denial-of-service',
    optionB: 'Network congestion attack',
    optionC: 'Multiple service denial',
    optionD: 'System overload distribution',
  },
  {
    optionA: 'Brute-force password cracking',
    optionB: 'Password guessing attack',
    optionC: 'Password discovery technique',
    optionD: 'Exhaustive password testing',
  },
  {
    optionA: 'Database injection attack',
    optionB: 'Data server breach',
    optionC: 'Query injection assault',
    optionD: 'Database corruption exploit',
  },
  {
    optionA: 'Web code infiltration',
    optionB: 'Script injection attack',
    optionC: 'Website security breach',
    optionD: 'Cross-site content hacking',
  },
  {
    optionA: 'Data interception technique',
    optionB: 'Network traffic capture',
    optionC: 'Data eavesdropping method',
    optionD: 'Packet analysis attack',
  },
  {
    optionA: 'Password decoding method',
    optionB: 'Credential guessing technique',
    optionC: 'Access code decryption',
    optionD: 'Authentication code breaking',
  },
  {
    optionA: 'Keystroke recording software',
    optionB: 'User activity monitoring tool',
    optionC: 'Keyboard activity capture',
    optionD: 'Input logging application',
  },
  {
    optionA: 'Unauthorized session takeover',
    optionB: 'Session manipulation attack',
    optionC: 'Session identity theft',
    optionD: 'Session control breach',
  },
  {
    optionA: 'Domain name system manipulation',
    optionB: 'Website address forging',
    optionC: 'Domain identity theft',
    optionD: 'DNS redirection attack',
  },
  {
    optionA: 'Interception of communication',
    optionB: 'Communication breach method',
    optionC: 'Intermediary data breach',
    optionD: 'Communication interception',
  },
];

const hackingCorrectOptions = [
  'Unauthorized access to computer systems or networks',
  'A person who gains unauthorized access to computer systems or networks',
  'The practice of using hacking techniques for ethical purposes',
  'Hacking performed with malicious intent',
  'Hacking performed to improve security',
  'Hacking performed with the consent of the target organization',
  'The process of testing a computer system, network, or application for security vulnerabilities',
  'A type of cyber attack that manipulates individuals into divulging confidential information',
  'A type of cyber attack that tricks people into revealing sensitive information',
  'A malicious program that infects computer systems and disrupts their normal operation',
  'A type of malware that spreads from one computer to another without human intervention',
  'A type of malware that infects computer systems and disrupts their normal operation',
  'A type of malware that encrypts files and demands payment for their release',
  'A type of cyber attack that floods a network with traffic to overwhelm it',
  'A type of cyber attack that floods a network with traffic to overwhelm it',
  'A type of cyber attack that attempts to guess passwords or encryption keys',
  'A type of cyber attack that exploits vulnerabilities in SQL databases',
  'A type of cyber attack that injects malicious code into web pages'
]

const aiQuestions = [
  'What is artificial intelligence (AI)?',
  'What are the main categories of AI?',
  'What is machine learning?',
  'What is deep learning?',
  'What is a neural network?',
  'What is natural language processing (NLP)?',
  'What is computer vision?',
  'What is reinforcement learning?',
  'What is supervised learning?',
  'What is unsupervised learning?',
  'What is transfer learning?',
  'What is overfitting in ML?',
  'What is underfitting in ML?',
  'What is data preprocessing in ML?',
  'What is feature engineering?',
  'What is classification in ML?',
  'What is regression in ML?',
  'What is clustering in ML?',
  'What is dimensionality reduction?',
  'What is a recommendation system?',
  'What is a GAN (Generative Adversarial Network)?',
  'What is an ANN (Artificial Neural Network)?',
  'What is a CNN (Convolutional Neural Network)?',
  'What is an RNN (Recurrent Neural Network)?',
];

const aiOptions = [
  {
    optionA: 'Machine intelligence simulation',
    optionB: 'Automated task execution',
    optionC: 'Computer decision making',
    optionD: 'Robotic process automation',
  },
  {
    optionA: 'ML, DL, and NLP',
    optionB: 'Supervised, unsupervised, reinforcement',
    optionC: 'Vision, robotics, expert',
    optionD: 'AI, ML, expert',
  },
  {
    optionA: 'AI algorithmic learning',
    optionB: 'Algorithmic reasoning',
    optionC: 'Language understanding',
    optionD: 'Human-like cognition',
  },
  {
    optionA: 'Complex ML algorithms',
    optionB: 'Deep ML networks',
    optionC: 'Neural network model',
    optionD: 'ML algorithmic layers',
  },
  {
    optionA: 'Brain-inspired computational model',
    optionB: 'Complex algorithmic network',
    optionC: 'Machine-based learning model',
    optionD: 'Neuron-based algorithmic model',
  },
  {
    optionA: 'Computer language processing',
    optionB: 'Language understanding model',
    optionC: 'Text analysis algorithm',
    optionD: 'Linguistic data interpretation',
  },
  {
    optionA: 'Visual data interpretation',
    optionB: 'Image recognition technique',
    optionC: 'Optical data understanding',
    optionD: 'Vision-based algorithmic processing',
  },
  {
    optionA: 'Trial-and-error learning',
    optionB: 'Feedback-driven learning',
    optionC: 'Experience-based learning',
    optionD: 'Error-correction learning',
  },
  {
    optionA: 'Labeled data learning',
    optionB: 'Data-driven learning',
    optionC: 'Pattern recognition learning',
    optionD: 'Supervised data analysis',
  },
  {
    optionA: 'Unlabeled data learning',
    optionB: 'Pattern extraction learning',
    optionC: 'Insight discovery learning',
    optionD: 'Self-organizing data analysis',
  },
  {
    optionA: 'Knowledge transfer learning',
    optionB: 'Experience sharing learning',
    optionC: 'Skill transfer learning',
    optionD: 'Data adaptation learning',
  },
  {
    optionA: 'Training data overfitting',
    optionB: 'Data model overuse',
    optionC: 'Overly trained model',
    optionD: 'Training error amplification',
  },
  {
    optionA: 'Insufficient model fit',
    optionB: 'Data model underuse',
    optionC: 'Underly trained model',
    optionD: 'Insufficient training error',
  },
  {
    optionA: 'Data cleaning and transformation',
    optionB: 'Data analysis and filtering',
    optionC: 'Data normalization and scaling',
    optionD: 'Data exploration and visualization',
  },
  {
    optionA: 'Data feature selection',
    optionB: 'Feature extraction and selection',
    optionC: 'Feature generation and manipulation',
    optionD: 'Data attribute identification',
  },
  {
    optionA: 'Data categorization technique',
    optionB: 'Data label classification',
    optionC: 'Data pattern recognition',
    optionD: 'Data grouping method',
  },
  {
    optionA: 'Data value prediction',
    optionB: 'Data trend identification',
    optionC: 'Data value estimation',
    optionD: 'Data pattern extrapolation',
  },
  {
    optionA: 'Data clustering technique',
    optionB: 'Data classification method',
    optionC: 'Data segmentation approach',
    optionD: 'Data grouping algorithm',
  },
  {
    optionA: 'Data dimension reduction',
    optionB: 'Data space compression',
    optionC: 'Data feature reduction',
    optionD: 'Data attribute reduction',
  },
  {
    optionA: 'User preference prediction',
    optionB: 'Personalized content recommendation',
    optionC: 'Item suggestion system',
    optionD: 'Content filtering method',
  },
  {
    optionA: 'Adversarial network model',
    optionB: 'Competitive learning network',
    optionC: 'Data generation adversarial model',
    optionD: 'Adversarial data generation model',
  },
  {
    optionA: 'Computer-based neural network',
    optionB: 'Virtual learning system',
    optionC: 'Digital cognitive network',
    optionD: 'Artificial brain emulation',
  },
  {
    optionA: 'Visual data recognition model',
    optionB: 'Image analysis neural network',
    optionC: 'Visual data processing model',
    optionD: 'Image understanding system',
  },
  {
    optionA: 'Temporal data processing model',
    optionB: 'Sequential data analysis model',
    optionC: 'Time-series data prediction model',
    optionD: 'Data memory processing model',
  },
];

const aiCorrectOptions = [
  'Computer-based intelligence simulation',
  'ML, DL, and NLP',
  'AI algorithmic learning',
  'Deep ML networks',
  'Brain-inspired computational model',
  'Computer language processing',
  'Visual data interpretation',
  'Trial-and-error learning',
  'Labeled data learning',
  'Unlabeled data learning',
  'Knowledge transfer learning',
  'Training data overfitting',
  'Insufficient model fit',
  'Data cleaning and transformation',
  'Data feature selection',
  'Data categorization technique',
  'Data value prediction',
  'Data clustering technique',
  'Data dimension reduction',
  'User preference prediction',
  'Adversarial network model',
  'Computer-based neural network',
  'Visual data recognition model',
  'Temporal data processing model',
];


const cybersecurityQuestions = [
  'What is cybersecurity?',
  'What are the three pillars of cybersecurity?',
  'What is a firewall?',
  'What is antivirus software?',
  'What is encryption?',
  'What is a VPN?',
  'What is a data breach?',
  'What is a phishing attack?',
  'What is malware?',
  'What is a virus?',
  'What is a worm?',
  'What is a Trojan horse?',
  'What is ransomware?',
  'What is social engineering?',
  'What is a DDoS attack?',
  'What is a brute force attack?',
  'What is SQL injection?',
  'What is a vulnerability assessment?',
  'What is penetration testing?',
  'What is multi-factor authentication (MFA)?',
  'What is end-to-end encryption?',
  'What is a security policy?',
  'What is incident response?',
  'What is a security audit?',
  'What is a security breach?',
];

const cybersecurityOptions = [
  {
    optionA: 'Digital security protection',
    optionB: 'Network security management',
    optionC: 'Information system protection',
    optionD: 'Cyber threat prevention',
  },
  {
    optionA: 'Prevention, detection, response',
    optionB: 'Preparation, response, recovery',
    optionC: 'Protection, mitigation, recovery',
    optionD: 'Detection, prevention, recovery',
  },
  {
    optionA: 'Network security device',
    optionB: 'Security barrier software',
    optionC: 'Access control system',
    optionD: 'Data encryption method',
  },
  {
    optionA: 'Virus protection software',
    optionB: 'Malware detection tool',
    optionC: 'Cyber threat blocker',
    optionD: 'Security monitoring system',
  },
  {
    optionA: 'Data scrambling technique',
    optionB: 'Information hiding method',
    optionC: 'Data protection mechanism',
    optionD: 'Digital content locking',
  },
  {
    optionA: 'Virtual private network',
    optionB: 'Digital privacy network',
    optionC: 'Secure connection system',
    optionD: 'Internet anonymity tool',
  },
  {
    optionA: 'Unauthorized data access',
    optionB: 'Sensitive data exposure',
    optionC: 'Information leakage',
    optionD: 'Data loss incident',
  },
  {
    optionA: 'Deceptive data collection',
    optionB: 'Social media scamming',
    optionC: 'Email spoofing',
    optionD: 'Fraudulent website',
  },
  {
    optionA: 'Harmful software',
    optionB: 'Digital threat',
    optionC: 'Computer virus',
    optionD: 'Data manipulation tool',
  },
  {
    optionA: 'Computer virus',
    optionB: 'Malicious software',
    optionC: 'Harmful program',
    optionD: 'Data corruption tool',
  },
  {
    optionA: 'Self-replicating malware',
    optionB: 'Data worm',
    optionC: 'Harmful software',
    optionD: 'Computer parasite',
  },
  {
    optionA: 'Deceptive software',
    optionB: 'Harmful program',
    optionC: 'Software Trojan',
    optionD: 'Data manipulation tool',
  },
  {
    optionA: 'Data encryption ransom',
    optionB: 'Data security breach',
    optionC: 'Data corruption malware',
    optionD: 'Data extortion software',
  },
  {
    optionA: 'Psychological manipulation',
    optionB: 'Social media manipulation',
    optionC: 'Email spoofing',
    optionD: 'Internet scamming',
  },
  {
    optionA: 'Distributed denial of service',
    optionB: 'Data disruption attack',
    optionC: 'Network congestion attack',
    optionD: 'System overload attack',
  },
  {
    optionA: 'Password guessing attack',
    optionB: 'Brute-force password cracking',
    optionC: 'Automated password attack',
    optionD: 'Credential theft attack',
  },
  {
    optionA: 'Data manipulation technique',
    optionB: 'Database intrusion method',
    optionC: 'Data corruption attack',
    optionD: 'Data extraction technique',
  },
  {
    optionA: 'Network security assessment',
    optionB: 'System vulnerability scanning',
    optionC: 'Data breach investigation',
    optionD: 'Digital threat detection',
  },
  {
    optionA: 'System security evaluation',
    optionB: 'Network security testing',
    optionC: 'Security threat simulation',
    optionD: 'Vulnerability assessment',
  },
  {
    optionA: 'Multi-step authentication',
    optionB: 'Two-factor verification',
    optionC: 'Password and token validation',
    optionD: 'Dual-layer authentication',
  },
  {
    optionA: 'Data transfer encryption',
    optionB: 'Data communication security',
    optionC: 'End-to-end security',
    optionD: 'Data protection method',
  },
  {
    optionA: 'Data protection protocol',
    optionB: 'Security rules and guidelines',
    optionC: 'Information security standard',
    optionD: 'Digital protection policy',
  },
  {
    optionA: 'Security incident handling',
    optionB: 'Security breach management',
    optionC: 'Cyber threat response',
    optionD: 'Data breach resolution',
  },
  {
    optionA: 'Security system evaluation',
    optionB: 'Security control assessment',
    optionC: 'Security policy review',
    optionD: 'Cybersecurity assessment',
  },
];

const cybersecurityCorrectOptions = [
  'Digital security protection',
  'Prevention, detection, response',
  'Network security device',
  'Malware detection tool',
  'Data scrambling technique',
  'Virtual private network',
  'Unauthorized data access',
  'Deceptive data collection',
  'Harmful software',
  'Computer virus',
  'Self-replicating malware',
  'Deceptive software',
  'Data encryption ransom',
  'Psychological manipulation',
  'Distributed denial of service',
  'Brute-force password cracking',
  'Data manipulation technique',
  'Network security assessment',
  'System security evaluation',
  'Multi-step authentication',
  'End-to-end encryption',
  'Security policy',
  'Incident response',
  'Security audit',
  'Security breach',
];


//Version 1.0********************************************

let timerIS;




//function for timer
function timerSec() {
  if (timerMinutes >= 0) {
    timerIS = 1;

    if (timerSeconds > 0) {
      timerSeconds--;

    }

    else {
      timerMinutes--;

      if(timerMinutes>0){

        timerSeconds = 59;

      }
      else{
        timerMinutes=0;
        
      }
    }
  }

  let sec =  document.querySelector('.timer-sec').innerHTML;
  let min = document.querySelector('.timer-mins').innerHTML;

  document.querySelector('.timer-sec').innerHTML = timerSeconds;
  document.querySelector('.timer-mins').innerHTML = timerMinutes;

  if(sec==0 && min==0){
    resultAlert();
    clearInterval(intervalID);
  }

}

function checkTimer() {
  console.log(timerIS)
  if (timerIS == 0) {
    resultAlert();
  }
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

function generateUniqueRandomNumbers(min, max, count) {
  // Create an array to store generated numbers
  const generatedNumbers = [];

  // Loop until we have the desired number of unique values
  while (generatedNumbers.length < count) {
    let randomNumber;
    do {
      // Generate a random number within the range
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.includes(randomNumber)); // Check for duplicates

    // Add the unique random number to the array
    generatedNumbers.push(randomNumber);
  }

  // Return the array of unique random numbers
  return generatedNumbers;
}

const uniqueNumbers = generateUniqueRandomNumbers(1, 22, 15); // Generate 5 unique numbers
//function for html questions
const functionObj = {
  html: function () {
    quizStart(htmlQuestions, htmlOptions);
  },

  css: function () {
    quizStart(cssQuestions, cssOptions);
  },

  js: function () {
    quizStart(jsQuestions, jsOptions);
  },

  java: function () {
    quizStart(javaQuestions, javaOptions);
  },

  python: function () {
    quizStart(pythonQuestions, pythonOptions);
  },

  database: function () {
    quizStart(dbQuestions, dbOptions);
  },

  react: function () {
    quizStart(reactQuestions, reactOptions);
  },

  mongoDB: function () {
    quizStart(mongoDBQuestions, mongoDBOptions);
  },

  firebase: function () {
    quizStart(firebaseQuestions, firebaseOptions);
  },

  cybersecurity: function () {
    quizStart(cybersecurityQuestions, cybersecurityOptions);
  },

  hacking: function () {
    quizStart(hackingQuestions, hackingOptions);
  },

  ai: function () {
    quizStart(aiQuestions, aiOptions);
  }
};


function quizStart(questions, options) {
  flag = 0;

  QuizQuestionNum.innerHTML = index + 1;
  var questionIndex = uniqueNumbers[index];
  QuizQuestion.innerHTML = questions[questionIndex];
  A.innerText = options[questionIndex].optionA;
  B.innerText = options[questionIndex].optionB;
  C.innerText = options[questionIndex].optionC;
  D.innerText = options[questionIndex].optionD;
}


function clearSelectedOptions() {
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

  a = 0;
  b = 0;
  c = 0;
  d = 0;


}


let p;
function nextButton() {
  if (index < 14) {

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

    functionObj[quiz]();



  }


}

/*function previousButton() {
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


  }



}*/

//

//function to show quiz-section
function displayDetails(quiztest) {

  functionObj[quiztest]();



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

  timerSeconds = 59;
  timerMinutes = 4;

  clearSelectedOptions();

  index = 0;

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


let userChosenOption = [];
let userSelected = [];




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



//function to hide result
function hideResult() {
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

const correctOptionsObj = {
  html: htmlCorrectOptions,
  css: cssCorrectOptions,
  js: jsCorrectOptions,
  java: javaCorrectOptions,
  python: pythonCorrectOptions,
  database: databaseCorrectOptions
};

function resultAlert() {
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
      //showResult();



      // Assuming `quiz` contains the name of the current quiz, e.g., "html", "css", etc.
      let correctOpts = correctOptionsObj[quiz];
      console.log(correctOpts);
      calculateScore(correctOpts, userChosenOption);

    }
  })

}

function calculateScore(correctOpt, userChosenOption) {
  let score = 0;
  let correct = 0;


  for (let i = 0; i < 15; i++) {

    // Check if the user-selected option matches the correct option
    if (userChosenOption[i] === correctOpt[uniqueNumbers[i]]) {
      score += 10;
      correct++
    }


  }

  console.warn("Total Score:", score);
  console.warn("Correct Answers:", correct);

  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.result').style.display = 'flex';

  let msg = document.querySelector('.msg');
  let percentage = document.querySelector('.module');
  let totalQuestions = document.querySelector('.total-questions');
  let correctAns = document.querySelector('.correct-answers');
  percentage.innerText = ((Number(totalQuestions) / Number(correctAns)) * 100).toFixed(2) + '%';

  let per = (correct / 15);
  percentage.innerHTML = (per * 100).toFixed(2) + '%';



  let questions = correctOptionsObj[quiz];
  totalQuestions.innerText = 15;


  switch (score) {
    case 0:
      msg.innerText = 'Revise The Lectures!'
      correctAns.innerText = correct;
      msg.style.color = ('red');
      percentage.style.background = ('linear-gradient(to right,  red, red)');
      break;

    case 10:
      msg.innerText = 'Revise The Lectures!'
      correctAns.innerText = correct;
      msg.style.color = ('red');
      percentage.style.background = ('linear-gradient(to right,  red, white, white)');
      break;

    case 20:
      msg.innerText = 'Not too Good!'
      correctAns.innerText = correct;
      break;

    case 30:
      msg.innerText = 'Nice Efforts!'
      correctAns.innerText = correct;
      msg.style.color = ('green');
      percentage.style.background = ('linear-gradient(to right,  green, white, white)');
      break;

    case 40:
      msg.innerText = 'Congratulations!'
      totalQuestions.innerText = questions.length;
      correctAns.innerText = correct;
      msg.style.color = ('green');
      percentage.style.background = ('linear-gradient(to right,  green, white)');
      break;

    case 50:
      msg.innerText = 'Well Done, Genuius!'
      totalQuestions.innerText = questions.length;
      correctAns.innerText = correct;
      msg.style.color = ('green');
      percentage.style.background = ('linear-gradient(to right,  green, green)');
      break;
  }



}

function showHistory() {

}

//temporory hide previous button
document.querySelector('.prev-btn').style.display = 'none';


function alertCreateQuiz() {
  Swal.fire("Coming Soon! </br> I am working on it!");
}

//Alert Function
let quiz = '';

function Alert() {
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

function quizStartAlert(quizParameter) {
  // Trigger click on the navbar-toggler button
  if (flag == 1) {
    document.querySelector('.navbar-toggler.toggler-icon').click();

  }

  quiz = quizParameter;

  Swal.fire({
    title: "15 Questions | 5 Minutes",
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Start Quiz",
    confirmButtonColor: "#22a247",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      timerMinutes = 4;
      timerSeconds = 59;
      intervalID = setInterval(timerSec, 1000);
      displayDetails(quizParameter);

    }
  });
}




function loginForm() {
  document.querySelector('.login-form').style.display = 'block';
  document.querySelector('.signup-form').style.display = 'none';
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.quiz-cards').style.display = 'none';
  document.querySelector('.custom-quiz').style.display = 'none';
  document.querySelector('.result').style.display = 'none';
}

function signupForm() {
  document.querySelector('.signup-form').style.display = 'block';
  document.querySelector('.login-form').style.display = 'none';
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.quiz-cards').style.display = 'none';
  document.querySelector('.custom-quiz').style.display = 'none';
  document.querySelector('.result').style.display = 'none';
}

