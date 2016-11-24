$(document).ready(function() {
   $('.expresso-sw-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false
   }); 
    $('.expresso-mobile-slider').slick({
        dots:true,
        infinite:false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true
    });
    $('.expresso-barista-slider').slick({
        dots:true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    });
});