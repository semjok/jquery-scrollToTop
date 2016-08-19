/**
 * Created by semjok on 2016. 8. 19..
 */

$(document).ready(function () {
//Scroll Top Button Fade In/Out
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 50) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  });

// Scroll to top
  $('.top-btn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
});