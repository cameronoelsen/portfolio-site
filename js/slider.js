$(document).ready(function() {
    //Clock'd website navbar
    $(window).scroll(function() {
        if ($(window).width() < 600) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 300)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() < 768) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 700)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() < 991) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1100)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() > 991) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1500)) {
                $('.clockd-website-navbar').addClass('website-inview');
            }
            else {
                $('.clockd-website-navbar').removeClass('website-inview');
            }
        }
    });
    //Libraries website navbar
    $(window).scroll(function() {
        if ($(window).width() < 600) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1000)) {
                $('.libraries-website-navbar').addClass('website-inview');
            }
            else {
                $('.libraries-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() < 768) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1600)) {
                $('.libraries-website-navbar').addClass('website-inview');
            }
            else {
                $('.libraries-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() < 991) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 1700)) {
                $('.libraries-website-navbar').addClass('website-inview');
            }
            else {
                $('.libraries-website-navbar').removeClass('website-inview');
            }
        }
        else if ($(window).width() > 991) {
            if($(window).scrollTop() + $(window).height() > ($(document).height() - 2400)) {
                $('.libraries-website-navbar').addClass('website-inview');
            }
            else {
                $('.libraries-website-navbar').removeClass('website-inview');
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
        slidesToShow: 4,
        slidesToScroll: 2,
        variableWidth: true,
        initialSlide: 0,
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
});