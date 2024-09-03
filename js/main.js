// testiSlick slick start
$('.testiSlick').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    variableWidth: true,

    nextArrow: '.slick-next-testi',
    prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// testimonialSlick slick end
// logoSlick slick start
$('.logoSlick').slick({
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: false,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    variableWidth: true,

    // nextArrow: '.slick-next-testi',
    // prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// logoSlick slick end