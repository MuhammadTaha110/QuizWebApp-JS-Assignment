let flag = 0;
function headerFlag() {
  flag++;
  console.warn(flag % 2 != 0)
}
function checkFlag() {
  if (flag % 2 != 0) {
    document.querySelector('.navbar-toggler.toggler-icon').click();
  }
}



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
  }
};

function quizStart(questions, options) {
  flag = 0;
  intervalID = setInterval(timerSec, 1000);

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

function quizStartAlert(quizParameter, flag) {
  // Trigger click on the navbar-toggler button
  document.querySelector('.navbar-toggler.toggler-icon').click();

  quiz = quizParameter;

  Swal.fire({
    title: "15 Questions | 15 Minutes",
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Start Quiz",
    confirmButtonColor: "#22a247",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
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

