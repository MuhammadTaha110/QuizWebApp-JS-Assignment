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
