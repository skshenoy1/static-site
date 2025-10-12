$(document).ready(function() {
  // Smooth scroll
  $('.main-menu a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var offset = $(target).offset().top;
    $('html, body').animate({ scrollTop: offset }, 600);
  });

  // Fade-in sections on scroll
  function fadeInSections() {
    $('.content-region').each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > top_of_element + 100) {
        $(this).animate({ opacity: 1 }, 800);
      }
    });
  }

  // Initial check in case sections are already visible
  fadeInSections();

  // Check on scroll
  $(window).on('scroll', fadeInSections);
});
