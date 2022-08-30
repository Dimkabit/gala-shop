
 $(document).ready(function() {
	$('.product__slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__slider-thmb',
	 });

	 $('.product__slider-thmb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product__slider-main',
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 370,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			 }
		]
	 });
	 
 })

 $('[data-fancybox="gallery"]').fancybox({
	beforeClose: function (instance, slide) {
		 $('.product__slider-main').slick('getSlick').slickGoTo(slide.index);
	}
})




  
  

 /*$(".product__slider-main").fancybox({
	loop: true,
	selector: ".slick-slide:not(.slick-cloned) > a ",
	backFocus: false,
	afterShow: function(instance) {
	  $(".slider").slick("slickGoTo", instance.currIndex);
	}
 });*/


 /*
  if ( $('.product__slider-main').length ) {
	var $slider = $('.product__slider-main')
		 .on('init', function(slick) {
			  $('.product__slider-main').fadeIn(1000);
		 })
		 .slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  autoplay: false,
			  lazyLoad: 'ondemand',
			  asNavFor: '.product__slider-thmb'
		 });

var $slider2 = $('.product__slider-thmb')
		 .on('init', function(slick) {
			  $('.product__slider-thmb').fadeIn(1000);
		 })
		 .slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  lazyLoad: 'ondemand',
			  asNavFor: '.product__slider-main',
			  dots: false,
			  centerMode: false,
			  focusOnSelect: true
		 });

//remove active class from all thumbnail slides
$('.product__slider-thmb .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
var mySlideNumber = nextSlide;
$('.product__slider-thmb .slick-slide').removeClass('slick-active');
$('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
});


// init slider
require(['js-sliderWithProgressbar'], function(slider) {

$('.product__slider-main').each(function() {

	me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

	// stop slider
	//me.slider.stop();

	// start slider
	//me.slider.start(index);

	// get reference to slick slider
	//me.slider.getSlick();

});
});
var options = {
progressbarSelector    : '.bJS_progressbar'
, slideSelector        : '.bJS_slider'
, previewSlideSelector : '.bJS_previewSlider'
, progressInterval     : ''
	// add your own progressbar animation function to sync it i.e. with a video
	// function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
, onCustomProgressbar : function($slide, $progressbar) {}
}

// slick slider options
// see: https://kenwheeler.github.io/slick/
var sliderOptions = {
slidesToShow   : 1,
slidesToScroll : 1,
arrows         : false,
fade           : false,
autoplay       : false
}

// slick slider options
// see: https://kenwheeler.github.io/slick/
var previewSliderOptions = {
slidesToShow   : 4,
slidesToScroll : 1,
dots           : false,
focusOnSelect  : true,
centerMode     : true
}
}
 */

//Slick:

