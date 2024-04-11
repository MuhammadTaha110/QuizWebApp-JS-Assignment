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


function htmlQuizStart(){

  document.querySelector('.quiz-section').style.display = 'block';
  document.querySelector('.quiz-cards').style.display= 'none';
  document.querySelector('.play-quiz').style.display= 'none';
  document.querySelector('.custom-quiz').style.display= 'none';

  

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

