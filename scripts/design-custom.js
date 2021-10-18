
//Animates navigation on scroll//
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.extra-background').addClass('bg-opacity');

        }
        if ($(window).scrollTop() < 11) {
            $('.extra-background').removeClass('bg-opacity');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.nav-background').addClass('nav-background-active');

        }
        if ($(window).scrollTop() < 11) {
            $('.nav-background').removeClass('nav-background-active');
        }
    });



    $('.portfolio-modal').scroll(function () {
        if ($('.portfolio-modal').scrollTop() > 600) {
            $('.project-title').addClass('project-title-active');

        }
        if ($('.portfolio-modal').scrollTop() < 601) {
            $('.project-title').removeClass('project-title-active');
        }
    });

    
    
     $('.portfolio-modal2').scroll(function () {
        if ($('.portfolio-modal2').scrollTop() > 600) {
            $('.project-title').addClass('project-title-active');

        }
        if ($('.portfolio-modal2').scrollTop() < 601) {
            $('.project-title').removeClass('project-title-active');
        }
    });
    
    $('.portfolio-modal3').scroll(function () {
        if ($('.portfolio-modal3').scrollTop() > 600) {
            $('.project-title').addClass('project-title-active');

        }
        if ($('.portfolio-modal3').scrollTop() < 601) {
            $('.project-title').removeClass('project-title-active');
        }
    });


});


//Closes open Nav and close open burger//
$('.navbar-collapse ul li a:not(.dropdown-toggler)').click(function () {
    $('.navbar-toggler:visible').click();
});

$('.navbar-collapse ul li a:not(.dropdown-toggler)').click(function () {
    $('.mobile').removeClass('is-active');
});


////Scroll navigator//
//jQuery('.page-scroll').bind('click', function (e) {
//    e.preventDefault();
//    jQuery('html,body').animate({
//        scrollTop: jQuery(this.hash).offset().top - 0
//    });
//});


//Scroll navigator//
  $('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



//AOS//
AOS.init({
    duration: 1000,
})

//Counter//
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 5200
    });
});



    $('.counter-modal').counterUp({
        delay: 10,
        time: 3200
    });



//Typing animation//
var typed = new Typed("#typed", {
    strings: ["mobile app", "VR experience", "website design", "creative project"],
    typeSpeed: 70,
    showCursor: false,
    smartBackspace: true,
    loop: false,
//    showCursor: true,
//    cursorChar: ' |',
    loopCount: Infinity,
    backSpeed: 20,
    backDelay: 2500,
});

//Swiper (SLIDER)//
var swiper = new Swiper('.swiper-container', {

    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




//Burger animation//

    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var mobiles = document.querySelectorAll(".mobile");
    if (mobiles.length > 0) {
        forEach(mobiles, function(mobile) {
            mobile.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }


//


//
//  // Activate scrollspy to add active class to navbar items on scroll
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});





