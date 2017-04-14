$(document).on('click', 'a', function(event){
    event.preventDefault();

    // $('#nav').toggleClass('mobileNav');

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 450);


    if ($('#nav').hasClass('mobileNav')){
      $('#nav').toggleClass('mobileNav');
      $('.links').toggleClass('show');
      $('.off').toggle();
      $('.on').toggle();
    };



});

$('.hamburger').click(function() {
	$('#nav').toggleClass('mobileNav');
	$('.links').toggleClass('show');

	$('.off').toggle();
	$('.on').toggle();


});

// $('#nav-toggle').click(function(){
//   $(this).toggleClass("on");
//   $('#nav').toggleClass('mobileNav');
//   $('.links').toggleClass('off');
//   // $('.links').css({ opacity: 1 });
//
//
// });
