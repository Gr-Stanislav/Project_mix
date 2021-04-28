const $page = $('html, body');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.slider_one').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 530,
        settings: {
            arrows:false
        }
    }]
  });

  $('.slider-two').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 619,
        settings: {
            arrows:false,
            slidesToShow: 2
        },
    }],
  });


$('.home-icon-block').on('click', function(e) {
    e.preventDefault();
    $(".home-icon-block").toggleClass('toggle');
});

$('.phone-icon-block').on('click', function(e) {
    e.preventDefault();
    $(".phone-icon-block").toggleClass('toggle');
});


// Появление кнопки вверх----------------
let block_show = null;
 
function scrollTracking(){
	let wt = $(window).scrollTop();
	let wh = $(window).height();
	let et = $('#header').offset().top;
	let eh = $('#header').outerHeight();
 
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
            $('.fix-arrow').addClass('hide');
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
            $('.fix-arrow').removeClass('hide');
		}
		block_show = false;
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});
// ----------------------------------

$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();
        $(".otp").removeClass("hidden");
    });
  });

$('.close').on('click', function(e) {
    e.preventDefault();
    $(".otp").addClass('hidden');
});