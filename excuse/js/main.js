/* ------------------------------------------ */
/*             TABLE OF CONTENTS
/* ------------------------------------------ */
/*   01 - Preloader                           */
/*   02 - Smoth Scrolling                     */
/*   03 - Fixed Navigation                    */
/*   04 - Counters                            */
/*   05 - Owl Carousel                        */
/*   06 - Stellar Parallax                    */
/*   07 - Back Top                            */
/*   08 - Google Maps                         */
/*   09 - Back To Top When Refresh Page       */
/* ------------------------------------------ */

"use strict";

jQuery(document).on('ready', function() {

    /*  01 Preloader
     ========================================================================== */

    $(window).on('load', function() {
        setTimeout(function() {
            $('.preloader').fadeOut('slow', function() {});
        }, 3000);
    });

    /*  02 Smoth Scrolling 
     ========================================================================== */

    $('a.page-scroll').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });

    /*  03 Fixed Navigation
     ========================================================================== */

    $(window).on('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

    /*  04 Counters
    ========================================================================== */

    var a = 0;
    $(window).on('scroll', function() {
        var oTop = $('.counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            a = 1;
        }
    });

    /*  05 Owl Carousel
     ========================================================================== */

    $("#owl-demo").owlCarousel({
        autoPlay: 6000,
        singleItem: true
    });

    /*  06 Stellar Parallax
     ========================================================================== */

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (!isMobile.any()) $(function() {
        $.stellar({
            horizontalScrolling: false,
            responsive: true,
            verticalOffset: 40
        });
    });

    /*  07 Back Top
     ========================================================================== */

    $("h1").delay("1000").fadeIn();
    $("#back-top").hide();
    $(function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('a#back-top').on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    /*  08 Google Maps
     ========================================================================== */

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var address = "Москва",
            lat, long;
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&sensor=false",
            type: "POST",
            success: function(res) {
                lat = res.results[0].geometry.location.lat;
                long = res.results[0].geometry.location.lng;
                var mapOptions = {
                    zoom: 13,
                    scrollwheel: false,
                    center: new google.maps.LatLng(lat, long),
                    styles: [{
                        "stylers": [{
                            "hue": "#16a085"
                        }]
                    }, {
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#212121"
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#212121"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }, {
                        "featureType": "administrative.land_parcel",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#bdbdbd"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#181818"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#616161"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#1b1b1b"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "lightness": 100
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#2c2c2c"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#8a8a8a"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#373737"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#3c3c3c"
                        }]
                    }, {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#4e4e4e"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#616161"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#3d3d3d"
                        }]
                    }]
                };
                var mapElement = document.getElementById('map');
                var map = new google.maps.Map(mapElement, mapOptions);
                var image = window.logo;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, long),
                    map: map,
                    title: 'We are here.',
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                        scale: 6,
                        strokeColor: '#ff003c'
                    },
                    animation: google.maps.Animation.DROP
                });
            }
        });
    }

    /*  09 Back Top When Refresh Page
     ========================================================================== */

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

});