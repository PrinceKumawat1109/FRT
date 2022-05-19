(function($) {
    
    "use strict";

     
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500);
        }
    } 

    // Navbar
    var nav = $('.main-navbar');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            nav.addClass("fixed-header");
        } else {
            nav.removeClass("fixed-header");
        }
    });

    
     //Search Popup

    //Show Popup
    $('.search-btn').on('click', function() {
        $('#search-item').addClass('search-visible');
    });

    //Hide Popup
    $('.search-close').on('click', function() {
        $('#search-item').removeClass('search-visible');
    });

    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav:false,
        rtl: true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Testimonial Carousel One
    $('.testimonial-carousel-one').owlCarousel({
        loop:true,
        margin:0,
        dots: true,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        rtl: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    // Testimonial Carousel One
    $('.carousel-one').owlCarousel({
        loop:true,
        margin:0,
        rtl: true,
        dots: true,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 2000,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // Testimonial Carousel Two
    $('.testimonial-carousel-two').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:false,
        rtl: true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    
    // Team Carousel 
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots: false,
        nav:false,
        autoplayHoverPause:false,
        autoplay: false,
        rtl: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Event Carousel 
    $('.event-carousel').owlCarousel({
        loop:true,
        margin:8,
        dots: false,
        nav:false,
        autoplayHoverPause:false,
        autoplay: true,
        rtl: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    
    // gallery Carousel 
    $('.gallery-carousel').owlCarousel({
        loop:true,
        margin:15,
        dots: false,
        nav:false,
        rtl: true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // Clients Carousel
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots: false,
        nav:false,
        rtl: true,
        autoplayHoverPause:false,
        autoplay: true,
        smartSpeed: 1500,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:2,
                center: false
            },
            600: {
                items: 3,
                center: false
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    // countdown Timer
    var now = new Date();
    var countTo = '2019/01/01';
    $('.timer').countdown(countTo, function(event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);
    });


 // Counter / Funfact 
    $('.start-count').each(function() {
        var $this = $(this);
        $this.data('target', parseInt($this.html(), 10));
        $this.data('counted', false);
        $this.html('0');
    });

    $(window).on('scroll', function() {
        var speed = 3000;
        $('.start-count').each(function() {
            var $this = $(this);
            if (!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function(now) {
                        var $this = $(this);
                        var val = Math.round($this.data('target') * now);
                        $this.html(val);
                        if (0 < $this.parent('.value').length) {
                            $this.parent('.value').css('width', val + '%');
                        }
                    }
                });
            }
        });
    })
    .triggerHandler('scroll');



    // Progress Ber  
    startAnimation();

    function startAnimation(){
        jQuery('.skills').each(function(){

            jQuery(this).find('.skillbar-1').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 

            jQuery(this).find('.skillbar-2').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 

            jQuery(this).find('.skillbar-3').animate({
              width:jQuery(this).attr('data-percent')
            },3000);

            jQuery(this).find('.skillbar-4').animate({
              width:jQuery(this).attr('data-percent')
            },3000); 
            
        });
    } 


  // Gallery filter 

    $('.gallery-filter li').on("click",function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('.gallery-filter').on('click', 'a', function () {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".gallery-filter-item").next().isotope({filter: filterValue});
    });

    
    // isotope | init Isotope
    var $container = $(".gallery:not(.gallery-masonry)");
    imagesLoaded($container, function () {
        setTimeout(function(){
            $container.isotope({
                itemSelector: '.gallery-item',
                layoutMode: 'fitRows',
                filter: '*'
            });

            $(window).trigger("resize");
            // filter items on button click
        },500);

    });
    
    //LightBox / Fancybox start
    $('.lightbox-image').fancybox({
        openEffect : 'elastic',
        openSpeed  : 250,
        closeEffect : 'elastic',
        helpers : {
            media : {}
        }
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    // Scroll to top
    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $('.player').mb_YTPlayer();

      
    // -- Slider -- //
    $('#bootstrap-touch-slider').bsTouchSlider();


    $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 

    
/* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on('load', function() {
        // add your functions
        preloader();
    }); 


    // --- Ajax Contact script --//
    $(function() {

     // Get the form.
     var form = $('#ajax-contact');

     // Get the messages div.
     var formMessages = $('#form-messages');

     // Set up an event listener for the contact form.
     $(form).submit(function(e) {
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
      .done(function(response) {
       // Make sure that the formMessages div has the 'success' class.
       $(formMessages).removeClass('error');
       $(formMessages).addClass('success');

       // Set the message text.
       $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#phone').val('');
            $('#subject').val('');
            $('#email').val('');
            $('#message').val('');
      })
      .fail(function(data) {
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

    });

})(window.jQuery);

    
       
