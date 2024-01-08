/*********************************************************************************

	Version: 1.4

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================

    [ INDEX ]
	|
    |___ Mobile Menu
    |___ Loading Overlay
    |___ AOS Animate
    |___ Banner Slider
    |___ Affix Navbar
	|___ Datepicker
	|___ Scroll Up
    |___ Website Shaking on Scroll (specifically in Chrome)
    |___ Yandex Map
    |___ 
    |
	[END INDEX ]

================================================================================*/


(function ($) {
    "use strict";


    //======= Mobile Menu Start ========
    //open left menu clicking the left menu icon
    $('.left_menu_icon').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    //open right menu clicking the right menu icon
    $('.burger-menu-icon').on('click', function(event){
        event.preventDefault();
        toggleRightNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    $('.cd-close-nav, .cd-overlay, .page-scroll').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(false);
        toggleRightNav(false);
        $("body").css({'overflow':'auto'});
    });

    //select a new section
    $('.cd-nav li').on('click', function(){

    });

    function toggleLeftNav(bool) {
        $('.left_menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    };

    function toggleRightNav(bool) {
        $('.burger-menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    };
    //======= Mobile Menu End ========


    //======= Loading Overlay Start ========
    $(window).on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });
    //======= Loading Overlay End ========


    //======= AOS Animate Start ========
    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });
    //======= AOS Animate End ========

    
    //======= Page Scrolling Start ========
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top + (-20)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    //======= Page Scrolling End ========


    //======= Banner Slider Start ========
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        infinite: true, 
        speed: 500,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: false,
    });
    //======= Banner Slider End ========


    //======= Menu Slider Start ========
    $('#menu-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        draggable: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1160,
                 settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 840,
                 settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                 settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //======= Menu Slider End ========


    //======= Events Slider Start ========
    $('.events-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
		autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover:false,
        variableWidth: false
    });
    //======= Events Slider End ========


    //======= Affix Navbar Start ========
    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 60) {
            $('.navbar').addClass('affix');
        } else{
            $('.navbar').removeClass('affix');
        }
    });
    //======= Affix Navbar End ========


    //======= Datepicker Start ========
    $(document).ready(function() {
        $('#reserv_date').datepicker();
    });

    $(document).ready(function() {
        $('#reserv_time').datetimepicker({
            format: 'LT',
        });
    });
    //======= Datepicker End ========


    /* ==========================
       Fancybox grab disabled
    =============================*/ 
    $("[data-fancybox]").fancybox({
        touch: false
    });


    //======= Scroll Up Start ========
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 400) {
			$('.scroll-up').addClass('show');
		} else {
			$('.scroll-up').removeClass('show');
		}
	});

	$('.scroll-up').on('click', scrollToTop);
	 
	function scrollToTop() {
		var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0,
		element = $('body'),
		offset = element.offset(),
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }
    //======= Scroll Up End ========


    //======= START Yandex Map ========

    ymaps.ready(init);
    var myMap, 
        myPlacemark;

    var iconBase = 'assets/img/map-marker.png';
    
    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [41.065434, 28.964260],
            zoom: 13,
    });
    
    myPlacemark = new ymaps.Placemark([41.065434, 28.964260], { 
        // hintContent: 'Moscow!', 
        // balloonContent: 'Capital of Russia'
    },{
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/map-marker.png',
        iconImageSize: [26, 40],
    });
        
        myMap.geoObjects.add(myPlacemark);
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.behaviors.disable('scrollZoom');
    }

    //======= END Yandex Map ========


    //======= Website Shaking on Scroll (specifically in Chrome) Start ========

    // window.addEventListener('touchmove', function (event) {
    //     event.preventDefault()
    // }, false)
  
    // document.querySelector('.body-container').addEventListener('touchmove', function (event) {
    //     event.stopPropagation()
    // }, false)
    //======= Website Shaking on Scroll (specifically in Chrome) End ========


})(jQuery);
