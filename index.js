$('.bars').click(function() {
  $('ul').slideToggle();
});

$('ul li').click(function() {
  $(this).find('ul').slideToggle();
  $(this).siblings().find('ul').slideUp();

});

$(window).resize(function() {
  if ($(window).width() > 768) {
    $("ul").removeAttr('style');
  }
});

$(document).ready(function(){
    $('#slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});

$('#toBot').click(function() {
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	return false;
});
