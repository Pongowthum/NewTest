$(document).ready(function() {

    //Adding and removing sticky to nav
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "50px;"
    });

    //To make scroll animated
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    //For animation
    $('.js-wp-feature').waypoint(function(direction) {
        $('.js-wp-feature').addClass('animated fadeInUp');
    }, { offset: '50%;' })

    $('.js-wp-mobimg').waypoint(function(direction) {
        $('.js-wp-mobimg').addClass('animated flipInY');
    }, { offset: '50%;' })

    $('.js-wp-city').waypoint(function(direction) {
        $('.js-wp-city').addClass('animated fadeIn');
    }, { offset: '50%;' })

    $('.js-wp-plan').waypoint(function(direction) {
        $('.js-wp-plan').addClass('animated pulse');
    }, { offset: '50%;' })

    // Menu-bar
    $('.js-nav-icon').click(function() {
            $('.main-nav').slideToggle(1000);
            if ($('i').hasClass('fa-bars')) {
                $('.fa-bars').addClass('fa-close');
                $('.fa-close').removeClass('fa-bars');
            } else {
                $('.fa-close').addClass('fa-bars');
                $('.fa-bars').removeClass('fa-close');
            }
        })
        //Window resize fn
    $(window).resize(function() {
        myFunction();
    });

    function myFunction() {
        if ((window.matchMedia("(max-width: 767px)").matches)) { // If media query matches
            $('.main-nav').hide();
            $('.fa-close').addClass('fa-bars');
            $('.fa-bars').removeClass('fa-close');
        } else {
            $('.main-nav').show();
        }

    }
    myFunction();

});