$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).width() > 991) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1500)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else if ($(window).scrollTop() + $(window).height() > ($(document).height() - 2200)){
                $('.libraries-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
                $('.libraries-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() < 768) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 500)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
        else {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1100)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
    });
   $('.expresso-sw-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false,
        responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        slidesToScroll: 1
                    }
            }
        ]
   }); 
    $('.expresso-mobile-slider').slick({
        dots:true,
        infinite:false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.clockd-setup-slider').slick({
        dots:true,
        infinite:false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.clockd-website-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.clockd-website-slider-nav'
    });
    $('.clockd-website-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.clockd-website-slider',
        dots: true,
        focusOnSelect: true,
        responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false
                    }
            }
        ]
    });
    $('.libraries-website-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.libraries-website-slider-nav'
    });
    $('.libraries-website-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.libraries-website-slider',
        dots: true,
        focusOnSelect: true,
        responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false
                    }
            }
        ]
    });
    $('.leaderboard-slider').slick({
        dots:true,
        infinite:false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.expresso-barista-slider').slick({
        dots:true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.libraries-wireframe-slider').slick({
        dots:true,
        infinite:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.animsition').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
    $('.animsition2').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});