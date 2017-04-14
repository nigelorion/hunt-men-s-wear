$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 450);



});

$('#nav-toggle').click(function(){
  $(this).toggleClass("on");
  $('#nav').toggleClass('mobileNav');
  $('.links').css({ opacity: 1 });


});
