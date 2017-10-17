// ---------------------------------------------------------------
// SlideUpTopBar for Foundation top-bar
// ---------------------------------------------------------------

var $window = $(window);
var didScroll;
var lastScrollTop = 0;
var scrollAmount = 10;          // Value of scroll amount
var navbarHeight = $('.slideUp').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    
    "use strict";
    
    var sup = $(window).scrollTop();

    if (sup > lastScrollTop && sup > navbarHeight){
        // On Scroll Down
        $('.slideUp').css({top: -$(window).outerHeight()});
    } else {
        // On Scroll Up
        if(sup + $(window).height() < $(document).height()) {
            $('.slideUp').css({top: 0});
        }
    }

    lastScrollTop = sup;
    
}