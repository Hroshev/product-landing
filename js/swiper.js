$(window).on("load", function () {

    var slider = new Swiper('.gallery-slider.one', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,
        navigation: {
            nextEl: '.swiper-button-next.one',
            prevEl: '.swiper-button-prev.one',
        },
    });


    var thumbs = new Swiper('.gallery-thumbs.one', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
    });

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
    var slider2 = new Swiper('.gallery-slider.two', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,
        navigation: {
            nextEl: '.swiper-button-next.two',
            prevEl: '.swiper-button-prev.two',
        },
    });


    var thumbs2 = new Swiper('.gallery-thumbs.two', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
    });

    slider2.controller.control = thumbs2;
    thumbs2.controller.control = slider2;
});