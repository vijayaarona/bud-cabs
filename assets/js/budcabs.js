$(document).ready(function () {
    "use strict";

/* Preloader Script
    ======================================================*/
	
	// $(".loader-inner").delay(800).slideUp(1600);
    // $(".loader-outer").delay(800).slideUp(1600);
    
	 // Intro carousel
     var introCarousel = $(".carousel");
     var introCarouselIndicators = $(".carousel-indicators");
     introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
       (index === 0) ?
       introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
         introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
     });
    
     introCarousel.on('slid.bs.carousel', function(e) {
       $(this).find('h2').addClass('animate__animated animate__fadeInDown');
       $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
     });

     /* Owl Slider For Testimonial 2
    ======================================================*/
	if ($('#testimonial-slider2').length) {
    $('#testimonial-slider2').owlCarousel({
        loop:true,
        dots: false,
        nav:false,
        navText:'',
        items:1,
        autoplay:true,
        smartSpeed:1200,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            992:{
                items:1,
            },
            1199:{
                items:1,
            }
        }
    });
}
	
});