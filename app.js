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


function displayDetails(){

  var section =document.querySelector('.shoe-details');
  document.querySelector('.shoe-details').style.display= 'flex';

  // Calculate the scroll position
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
  // Set the top position of the section relative to the scroll position
  section.style.top = (scrollPosition+30) + 'px';


  //document.querySelector('.shoe-cards-section').style.display='none';
  //document.querySelector('.footer').style.display='none';

}

