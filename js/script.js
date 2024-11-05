$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */
    $('.sideMenu').removeClass('hidden');

    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 1000);


});


jQuery(function ($) {

    "use strict";
    /* ===================================
       Navbar smooth Scroll
   ====================================== */
    // $(".scroll").on("click", function (event) {
    //     event.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 50}, 1200);
    // });
    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".sideMenu").removeClass("sideMenuOpacity");
            $(".pushwrap").toggleClass("active");
            $(".sideMenu").addClass("sideMenuActive"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".sideMenu").removeClass("sideMenuActive"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".sideMenu").addClass("sideMenuOpacity");
            }, 500);
        }), $(".sideMenu .navbar-nav .nav-link").on("click", function () {
            $(".sideMenu").removeClass("sideMenuActive"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".sideMenu").addClass("sideMenuOpacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".sideMenu").removeClass("sideMenuActive"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".sideMenu").addClass("sideMenuOpacity");
            }, 500);
        });
    }
    // ===========================
    //    bottom nav appear
    // ===========================
    $(function () {
        var $win = $(window);

        jQuery(function ($) {
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                    // alert("near bottom!");
                    $('.sidenav-bottom').css('opacity', '1');
                    $('.sidenav-bottom').addClass('sidenav-bottom-fixed');
                }
                if ($(window).scrollTop() + $(window).height() < $(document).height() - 300 && $(window).scrollTop() + $(window).height() > $(document).height() - 400) {
                    $('.sidenav-bottom').css('opacity', '0');
                    $('.sidenav-bottom').removeClass('sidenav-bottom-fixed');
                }
            });
        });
    });
    // ===========================
    //    header appear
    // ===========================
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.sidenav-bottom').css('opacity', '0');
            $('header .innerHeader').addClass('headerAppear');
        }
        if ($(this).scrollTop() < 260) {
            $('.sidenav-bottom').css('opacity', '1');
            $('header .innerHeader').removeClass('headerAppear');
        }
    });


    // ===========================
    //     About carousel
    // ===========================
    $('.aboutCarousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });

    $('.aboutRightArrow').click(function () {
        var owl = $('.aboutCarousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.aboutLeftArrow').click(function () {
        var owl = $('.aboutCarousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel');
    });


    // ===========================
    //     portfolio carousel
    // ===========================
    $('.portfolioCarousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });

    $('.portfolioRightArrow').click(function () {
        var owl = $('.portfolioCarousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.portfolioLeftArrow').click(function () {
        var owl = $('.portfolioCarousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel');
    });

    // ===========================
    //     Testimonial carousel
    // ===========================
    $('.review-carousel').owlCarousel({

        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });


    /* ===================================
             Wow Effects
   ======================================*/
    var wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        }
    );
    wow.init();



});