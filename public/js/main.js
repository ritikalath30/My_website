(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });



const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            const result = await response.text();
            console.log(result);
            // Handle success, e.g., display a success message
        } else {
            // Handle errors
            console.error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});



    // Get references to the button and the popup container
    var button1 = document.getElementById("popupButton1");
    var popup1 = document.getElementById("popupContainer1");
    var closeButton1 = document.getElementById("closePopup1");

    // Show the popup when the button is clicked
    button1.onclick = function() {
    popup1.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton1.onclick = function() {
    popup1.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup1) {
        popup1.style.display = "none";
    }
    }


    // Get references to the button and the popup container
    var button2 = document.getElementById("popupButton2");
    var popup2 = document.getElementById("popupContainer2");
    var closeButton2 = document.getElementById("closePopup2");

    // Show the popup when the button is clicked
    button2.onclick = function() {
    popup2.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton2.onclick = function() {
    popup2.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup2) {
        popup2.style.display = "none";
    }
    }

    var button3 = document.getElementById("popupButton3");
    var popup3 = document.getElementById("popupContainer3");
    var closeButton3 = document.getElementById("closePopup3");

    // Show the popup when the button is clicked
    button3.onclick = function() {
    popup3.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton3.onclick = function() {
    popup3.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup3) {
        popup3.style.display = "none";
    }
    }

    var button4 = document.getElementById("popupButton4");
    var popup4 = document.getElementById("popupContainer4");
    var closeButton4 = document.getElementById("closePopup4");

    // Show the popup when the button is clicked
    button4.onclick = function() {
    popup4.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton4.onclick = function() {
    popup4.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup4) {
        popup4.style.display = "none";
    }
    }

    var button5 = document.getElementById("popupButton5");
    var popup5 = document.getElementById("popupContainer5");
    var closeButton5 = document.getElementById("closePopup5");

    // Show the popup when the button is clicked
    button5.onclick = function() {
    popup5.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton5.onclick = function() {
    popup5.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup5) {
        popup5.style.display = "none";
    }
    }

    var button6 = document.getElementById("popupButton6");
    var popup6 = document.getElementById("popupContainer6");
    var closeButton6 = document.getElementById("closePopup6");

    // Show the popup when the button is clicked
    button6.onclick = function() {
    popup6.style.display = "block";
    }

    // Close the popup when the close button is clicked
    closeButton6.onclick = function() {
    popup6.style.display = "none";
    }

    // Close the popup if the user clicks outside of it
    window.onclick = function(event) {
    if (event.target == popup6) {
        popup6.style.display = "none";
    }
    }

    

    
})(jQuery);

