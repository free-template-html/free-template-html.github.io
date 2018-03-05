/*global $, window, document, setTimeout, WOW, jQuery*/
$(document).ready(function () {

    'use strict';
    // Defining used variables
    var skill            = $('.skill'),
        doc              = $(document);

    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 48)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    });

    //Active Scroll
    doc.on("scroll", onScroll);
    function onScroll(event){
      var scrollPos = doc.scrollTop();
      $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav li a').removeClass("active");
          currLink.addClass("active");
        }
        else{
          currLink.removeClass("active");
        }
      });
    }


    // animating progress values on scroll
    $(window).on('scroll', function () {
        var wScroll = $(window).scrollTop();
        if (wScroll > (skill.offset().top - 400)) {
            skill.each(function (i) {
                setTimeout(function () {
                    skill.eq(i).find('.progress-bar').attr('style', 'width: ' + skill.eq(i).find('li.strength').text() + '');
                }, 200 + (200 * i));
            });
        }
    });



    //Fact Counter + Text Count
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //initialize wow animation 
    new WOW().init();

    
    //initialize Slick slider (testimonial slider)
    $("#char-slider").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"> <img src="images/arrow-left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="images/arrow-right.png"> </button>',
        arrows: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    
});


//preloader
$(window).on('load', function(){
    $("body").css("overflow","auto");
    $(".preloader").fadeOut(1000,function(){
        $(this).remove();
    });
});