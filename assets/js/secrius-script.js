(function ($) {
    'use strict'
    /* ============================================================
    [Master Stylesheet]

    Theme Name:     Secrius 
    Theme URI:      https://themeforest.net/user/raistheme
    Description:    Secrius - Multipurpose Services Company HTML Template
    Author:         raistheme
    Author URI:     https://themeforest.net/user/raistheme
    Version:        2.0.0 
    Text Domain:    secrius 

    ============================================================== */

    /*
    ========================================
    Preloader
    ========================================
    */
    $(window).on('scroll', function (){   
        var sticky = $('.shrt-menu'),
        scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    });

    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    /*
    ========================================
        Wow animation
    ========================================
    */
    if ($('.wow').length) {
        var wow = new WOW(
            {
                mobile: false,
                live: true
            }
        );
        wow.init();
    }

    /*
    ========================================
        init Jarallax
    ========================================
    */
    if ($('.jarallax').length) {
        jarallax(document.querySelectorAll('.jarallax'));
    }

    /*
    ========================================
        Magnific Popup
    ========================================
    */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    /*
    ========================================
    Clint Review
    ========================================
    */
    if ($('.clint-review-slider').length) {
        $('.clint-review-slider').owlCarousel({
            loop: true,
            dots: true,
            dotsEach: true,
            margin: 70,
            autoplay: false,
            autoplayTimeout: 9000,
            smartSpeed: 1000,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
    }


    /*
    ========================================
    Logo Footer
    ========================================
    */
    if ($('.logo-footer-slider').length) {
        $('.logo-footer-slider').owlCarousel({
            loop: true,
            dots: false,
            margin: 70,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            nav: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }


    /*
    ========================================
    Clint Review
    ========================================
    */
    if ($('.team-slide').length) {
        $('.team-slide').owlCarousel({
            loop: true,
            dots: false,
            margin: 50,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    autoplay: true,
                },
                480: {
                    items: 2,
                    autoplay: true,
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    /*
    ========================================
    Testimonial
    ========================================
    */
    if ($('.home-tow-testimonial-slider').length) {
        $('.home-tow-testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }




    /*
   ========================================
   Hero
   ========================================
   */
    $(document).ready(function () {

        var owl = $('.home-tow-hero .owl-carousel');
        // Slider owlCarousel
        $('.hero-2-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 7000,
            dots: false,
            smartSpeed: 700,
            animateOut: 'fadeOut',
             

        });

        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2;
            $('h6').removeClass('animated fadeInDown delay-.1s');
            $('.hero-tow-title').removeClass('animated fadeInDown delay-.2s');
            $('p').removeClass('animated fadeInDown delay-.3s');
            $('span').removeClass('animated fadeInDown delay-.4s');
            $('a').removeClass('animated fadeInDown delay-.5s');
            $('.hero-tow-img-one').removeClass('animated fadeInUp delay-.3s');
            $('.hero-tow-img-two').removeClass('animated fadeInRight slow delay-.1s');
            $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInDown delay-.1s');
            $('.owl-item').not('.cloned').eq(item).find('.hero-tow-title').addClass('animated fadeInDown delay-.2s');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInDown delay-.3s');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInDown delay-.4s');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInDown delay-.5s');
            $('.owl-item').not('.cloned').eq(item).find('.hero-tow-img-one').addClass('animated fadeInUp delay-.3s');
            $('.owl-item').not('.cloned').eq(item).find('.hero-tow-img-two').addClass('animated fadeInRight slow delay-.1s');
        });

    });

    /*
   ========================================
   Hero Three
   ========================================
   */
    $(document).ready(function () {

        var owl = $('.home-three-hero .owl-carousel');
        // Slider owlCarousel
        $('.hero-three-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 7000,
            dots: false,
            smartSpeed: 700,
            animateOut: 'fadeOut',
        });

        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2;
            $('h6').removeClass('animated fadeInDown delay-.1s');
            $('.hero-three-title').removeClass('animated fadeInDown delay-.2s');
            $('a').removeClass('animated fadeInDown delay-.3s');
            $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInDown delay-.1s');
            $('.owl-item').not('.cloned').eq(item).find('.hero-three-title').addClass('animated fadeInDown delay-.2s');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInDown delay-.3s');
        });

    });

    /*
   ========================================
   Contact Form
   ========================================
   */
    if ($('#contact-form').length) {
        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-message');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    }

    /*
    ========================================
    Color Map 
    ========================================
    */
    if ($('#google-map').length) {

        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                //styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{ "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "gamma": "1.50" }, { "weight": "1.00" }, { "color": "#35414d" }] }, { "featureType": "poi.medical", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "labels.icon", "stylers": [{ "color": "#35414d" }, { "gamma": "1.50" }] }]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('google-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Welcome Secrius',
                icon: {
                    url: "https://codexexpert.com/TF-ITEM/demo-img/map.png"
                }
            });
        }
    }


    /*
    ========================================
    Single Shop 
    ========================================
    */
    if ($('.single-shop-product-slider').length) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }


    /*
    ========================================
    Scroll to Top
    ========================================
    */
    if ($('#return-to-top').length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('#return-to-top').fadeIn(400);
                $('#return-to-top').addClass('return-to-stack-top');
            } else {
                $('#return-to-top').fadeOut(500);
                $('#return-to-top').removeClass('return-to-stack-top');
            }
        });
        $('#return-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });
    }

    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('.counter').length) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }

    /*
    ========================================
    Testimonial Four
    ========================================
    */
    if ($('.testimonial-four-slider').length) {
        $('.testimonial-four-slider').owlCarousel({
            loop: true,
            dots: true,
            margin: 30,
            center: true,
            autoplay: true,
            autoplayTimeout: 6000,
            nav: false,
            smartSpeed: 1500,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false,
                },
                600: {
                    items: 2,
                    dots: true,
                    nav: false,
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    /*
    ========================================
    Testimonial
    ========================================
    */
    if ($('.news-slider').length) {
        $('.news-slider').owlCarousel({
            loop: false,
            dots: false,
            margin: 30,
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false,
                },
                600: {
                    items: 1,
                    dots: true,
                    nav: false,
                },
                1000: {
                    items: 2
                }
            }
        });
    }


        /*
    ========================================
    Clint Review
    ========================================
    */
   if ($('.six-testimonial-slider').length) {
    $('.six-testimonial-slider').owlCarousel({
        loop: true,
        dots: true,
        dotsEach: true,
        margin: 70,
        autoplay: false,
        autoplayTimeout: 9000,
        smartSpeed: 1000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
}


})(jQuery);