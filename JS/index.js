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

  console.log("Menu");