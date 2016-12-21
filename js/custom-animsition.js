$('.animsition').animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 500,
    outDuration: 500,
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
$('.home-animsition').on('animsition.inEnd', function(){
    $('#myself').addClass('slideUp');
});
$('.jupyter-animsition').on('animsition.inEnd', function() {
    $('.jupyter-jumbotron-ring').addClass('fade-in');
    $('#jupyter-ring-1').addClass('one');
    $('#jupyter-ring-2').addClass('two');
    $('#jupyter-ring-3').addClass('three');
    $('.jupyter-jumbotron-ring').css('display',"block");
});