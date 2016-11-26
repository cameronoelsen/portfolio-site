var pos = 0;
var el = document.getElementById("cameron");
var m = 0;
window.addEventListener("scroll", function () {
    el.style.marginTop = -window.pageYOffset/4 + "px";
    pos = window.pageYOffset;
}, false);

$(document).ready( function() {
    $('.project-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
	
});

$(function() {
    $(window).resize(function(){
          if(window.matchMedia('(max-width: 767px)')){
               $('wordmark').addClass('img-responsive');
          }else{
               $('wordmark').removeClass('img-responsive');
          }
    });
});