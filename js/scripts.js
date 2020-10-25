/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict


    $(document).ready(function(){
      $(".portfolio-link").click(function(){
        $(".portfolio").slideToggle("slow");
        $("#about").slideUp("slow");
        $("#contact").slideUp("slow");
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#portfolio").offset().top
      }, 1000);
      });
    });

    $(document).ready(function(){
      $(".about-link").click(function(){
        $("#about").slideToggle("slow");
        $("#portfolio").slideUp("slow");
        $("#contact").slideUp("slow");
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#about").offset().top
      }, 1000);
      });
    });

    $(document).ready(function(){
      $(".contact-link").click(function(){
        $("#contact").slideToggle("slow");
        $("#about").slideUp("slow");
        $("#portfolio").slideUp("slow");
        $([document.documentElement, document.body]).animate({
          scrollTop: $("#contact").offset().top
      }, 1000);
      });
    });

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  